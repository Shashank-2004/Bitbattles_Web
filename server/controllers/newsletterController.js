const crypto = require("crypto");

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const getMailchimpConfig = () => {
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID || process.env.MAILCHIMP_LIST_ID;
  const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX || apiKey?.split("-")[1];

  if (!apiKey || !audienceId || !serverPrefix) {
    return null;
  }

  return { apiKey, audienceId, serverPrefix };
};

const mailchimpRequest = async ({ method, path, body, config }) => {
  const response = await fetch(`https://${config.serverPrefix}.api.mailchimp.com/3.0${path}`, {
    method,
    headers: {
      Authorization: `Basic ${Buffer.from(`bitbattles:${config.apiKey}`).toString("base64")}`,
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await response.json().catch(() => ({}));
  return { response, data };
};

const subscribeNewsletter = async (req, res) => {
  try {
    const email = String(req.body.email || "").trim().toLowerCase();

    if (!email) {
      return res.status(400).json({ message: "Email is required." });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ message: "Please enter a valid email address." });
    }

    const config = getMailchimpConfig();

    if (!config) {
      return res.status(503).json({ message: "Newsletter service is not configured yet." });
    }

    const subscriberHash = crypto.createHash("md5").update(email).digest("hex");
    const memberPath = `/lists/${config.audienceId}/members/${subscriberHash}`;
    const existing = await mailchimpRequest({ method: "GET", path: memberPath, config });

    if (existing.response.ok) {
      const status = existing.data.status;

      if (["subscribed", "pending"].includes(status)) {
        return res.status(409).json({ message: "This email is already subscribed." });
      }

      const updated = await mailchimpRequest({
        method: "PATCH",
        path: memberPath,
        config,
        body: {
          email_address: email,
          status: "subscribed",
        },
      });

      if (!updated.response.ok) {
        return res.status(updated.response.status).json({
          message: updated.data.detail || "Could not update newsletter subscription.",
        });
      }

      return res.status(200).json({ success: true, message: "Newsletter subscription updated." });
    }

    if (existing.response.status !== 404) {
      return res.status(existing.response.status).json({
        message: existing.data.detail || "Could not check newsletter subscription.",
      });
    }

    const created = await mailchimpRequest({
      method: "POST",
      path: `/lists/${config.audienceId}/members`,
      config,
      body: {
        email_address: email,
        status: "subscribed",
        tags: ["Website"],
      },
    });

    if (!created.response.ok) {
      return res.status(created.response.status).json({
        message: created.data.detail || "Could not subscribe to newsletter.",
      });
    }

    return res.status(201).json({ success: true, message: "Subscribed successfully." });
  } catch (error) {
    console.error("Newsletter subscription failed:", error);
    return res.status(500).json({ message: "Could not subscribe right now. Please try again." });
  }
};

module.exports = { subscribeNewsletter };
