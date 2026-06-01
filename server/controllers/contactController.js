const Contact = require("../models/Contact");
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
    `Budget: ${payload.budget || "Not selected"}`,
    `Comments: ${payload.comments || "None"}`,
  ].join("\n");

// POST /api/contact (public)
const submitContact = async (req, res) => {
  try {
    if (req.body.website) {
      return res.status(204).end();
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

    const contact = await Contact.create({
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
    });

    sendContactNotifications(contact).catch((error) => {
      console.error("Contact email notification failed:", error);
    });

    res.status(201).json({
      success: true,
      message: "Thank you! Your inquiry has been received.",
      data: contact,
    });
  } catch (error) {
    console.error("Contact submission failed:", error);
    res.status(500).json({ message: "Could not submit your inquiry. Please try again." });
  }
};

// GET /api/contact (admin only)
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    console.error("Contact list fetch failed:", error);
    res.status(500).json({ message: "Could not fetch contact submissions." });
  }
};

// PUT /api/contact/:id/read (admin only)
const markAsRead = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true },
    );

    if (!contact) {
      return res.status(404).json({ message: "Message not found" });
    }

    res.json(contact);
  } catch (error) {
    console.error("Contact read update failed:", error);
    res.status(500).json({ message: "Could not update contact submission." });
  }
};

module.exports = { submitContact, getContacts, markAsRead };
