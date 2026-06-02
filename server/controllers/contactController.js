const { sendContactNotifications } = require("../services/emailService");

const MAX_TEXT_LENGTH = 5000;
const VALID_BUDGETS = new Set([
  "Please select",
  "Select a Budget Range",
  "Under Rs. 50,000",
  "Rs. 50,000 - Rs. 2,00,000",
  "Rs. 2,00,000 - Rs. 5,00,000",
  "Rs. 5,00,000+",
  "Not sure yet",
  "Need guidance",
]);

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const cleanText = (value, fallback = "") =>
  String(value ?? fallback)
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, MAX_TEXT_LENGTH);

const cleanLongText = (value, fallback = "") =>
  String(value ?? fallback)
    .trim()
    .slice(0, MAX_TEXT_LENGTH);

const cleanSupport = (support) => {
  if (!Array.isArray(support)) {
    return [];
  }

  return support.map((item) => cleanText(item)).filter(Boolean).slice(0, 12);
};

const cleanSelect = (value) =>
  ["Please select", "Select a Budget Range"].includes(value) ? "" : value;

const buildMessage = (payload) =>
  [
    `Phone: ${payload.phone || "Not provided"}`,
    `Company: ${payload.company || "Not provided"}`,
    `Company type: ${payload.companyType || "Not selected"}`,
    `Support needed: ${(payload.support || []).join(", ") || "Not specified"}`,
    `Summary: ${payload.summary || payload.message || "Not provided"}`,
    `Reference: ${payload.reference || "Not provided"}`,
    `Attachment: ${payload.attachmentName || "Not attached"}`,
    `Deadline: ${payload.deadline || "Not selected"}`,
    `Budget: ${cleanSelect(payload.budget) || "Not selected"}`,
    `Comments: ${payload.comments || "None"}`,
  ].join("\n");

const submitContact = async (req, res) => {
  try {
    if (req.body.website) {
      return res.status(200).json({
        success: true,
        message: "Thank you! Your inquiry has been received.",
      });
    }

    const firstName = cleanText(req.body.firstName);
    const lastName = cleanText(req.body.lastName);
    const name = cleanText(req.body.name || `${firstName} ${lastName}`);
    const email = cleanText(req.body.email).toLowerCase();
    const support = cleanSupport(req.body.support);
    const budget = cleanText(req.body.budget);
    const summary = cleanLongText(req.body.summary);
    const message = cleanLongText(req.body.message || buildMessage({ ...req.body, support, summary }));
    const subject = cleanText(req.body.subject || support.join(", ") || "Website inquiry");

    if (!name || !email || !message) {
      return res.status(400).json({ message: "Name, email, and message are required." });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ message: "Please provide a valid email address." });
    }

    if (budget && !VALID_BUDGETS.has(budget)) {
      return res.status(400).json({ message: "Please choose a valid budget range." });
    }

    const contact = {
      firstName,
      lastName,
      name,
      email,
      subject,
      phone: cleanText(req.body.phone),
      company: cleanText(req.body.company),
      companyType: cleanText(req.body.companyType),
      support,
      summary,
      reference: cleanText(req.body.reference),
      attachmentName: cleanText(req.body.attachmentName),
      deadline: cleanText(req.body.deadline),
      budget,
      comments: cleanLongText(req.body.comments),
      message,
      source: cleanText(req.body.source, "website"),
      submittedAt: new Date().toISOString(),
    };

    const emailResults = await sendContactNotifications(contact);
    const failedEmail = emailResults.some((result) => result.status === "rejected");

    if (failedEmail) {
      return res.status(502).json({
        message: "Could not send your inquiry right now. Please email the team directly.",
      });
    }

    return res.status(202).json({
      success: true,
      message: "Thank you! Your inquiry has been received.",
    });
  } catch (error) {
    console.error("Contact submission failed:", error);
    return res.status(500).json({ message: "Could not submit your inquiry. Please try again." });
  }
};

module.exports = { submitContact };
