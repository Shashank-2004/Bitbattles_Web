const nodemailer = require("nodemailer");

const hasSmtpConfig = () =>
  Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);

const createTransporter = () => {
  if (!hasSmtpConfig()) {
    return null;
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

const sendViaBrevo = async ({ to, subject, text, html, replyTo, attachments }) => {
  const body = {
    sender: { 
      name: "BitBattles", 
      email: process.env.MAIL_FROM || process.env.SMTP_USER || "noreply@bitbattles.com" 
    },
    to: [{ email: to }],
    subject: subject,
    textContent: text,
    htmlContent: html,
  };

  if (replyTo) {
    body.replyTo = { email: replyTo };
  }

  if (attachments && attachments.length > 0) {
    body.attachment = attachments.map(att => ({
      name: att.filename,
      content: att.content.toString("base64") // Brevo expects base64 encoded files
    }));
  }

  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": process.env.BREVO_API_KEY,
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    const errorData = await response.text();
    throw new Error(`Brevo API Error: ${errorData}`);
  }

  return response.json();
};

const sendMail = async ({ to, subject, text, html, replyTo, attachments }) => {
  // Use Brevo HTTP API if key is provided (Bypasses Render's firewall)
  if (process.env.BREVO_API_KEY) {
    return sendViaBrevo({ to, subject, text, html, replyTo, attachments });
  }

  // Fallback to SMTP (Works locally, blocked by Render Free Tier)
  const transporter = createTransporter();

  if (!transporter || !to) {
    return { skipped: true };
  }

  return transporter.sendMail({
    from: process.env.MAIL_FROM || process.env.SMTP_USER,
    to,
    replyTo,
    subject,
    text,
    html,
    attachments,
  });
};

const sendContactNotifications = async (contact) => {
  const notifications = [];

  if (process.env.CONTACT_TO_EMAIL) {
    notifications.push(
      sendMail({
        to: process.env.CONTACT_TO_EMAIL,
        replyTo: contact.email,
        subject: `New BitBattles inquiry: ${contact.subject}`,
        text: [
          `Name: ${contact.name}`,
          `Email: ${contact.email}`,
          "",
          contact.message,
        ].join("\n"),
        attachments: contact.attachment
          ? [
              {
                filename: contact.attachment.filename,
                content: contact.attachment.content,
                contentType: contact.attachment.contentType,
              },
            ]
          : undefined,
      }),
    );
  }

  if (String(process.env.AUTO_REPLY_ENABLED).trim().toLowerCase() === "true") {
    const textContent = [
      `Hi ${contact.firstName || contact.name},`,
      "",
      "Thanks for reaching out to BitBattles. We received your inquiry and will review it soon.",
      "",
      "Regards,",
      "BitBattles ESP",
    ].join("\n");

    const htmlContent = `
      <div style="font-family: sans-serif; color: #333;">
        <p>Hi ${contact.firstName || contact.name},</p>
        <p>Thanks for reaching out to BitBattles. We received your inquiry and will review it soon.</p>
        <br/>
        <p>Regards,<br/><strong>BitBattles ESP</strong></p>
      </div>
    `;

    notifications.push(
      sendMail({
        to: contact.email,
        subject: "Thanks for contacting BitBattles",
        text: textContent,
        html: htmlContent,
      }),
    );
  }

  return Promise.allSettled(notifications);
};

module.exports = { sendContactNotifications };
