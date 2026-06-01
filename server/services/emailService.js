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

const sendMail = async ({ to, subject, text, html, replyTo }) => {
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
      }),
    );
  }

  if (process.env.AUTO_REPLY_ENABLED === "true") {
    notifications.push(
      sendMail({
        to: contact.email,
        subject: "Thanks for contacting BitBattles",
        text: [
          `Hi ${contact.firstName || contact.name},`,
          "",
          "Thanks for reaching out to BitBattles. We received your inquiry and will review it soon.",
          "",
          "Regards,",
          "BitBattles ESP",
        ].join("\n"),
      }),
    );
  }

  return Promise.allSettled(notifications);
};

module.exports = { sendContactNotifications };
