const Contact = require("../models/Contact");
const { sendContactNotifications } = require("../services/emailService");

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const cleanSelect = (val) =>
  ["Please select", "Select a Budget Range"].includes(val) ? "" : val;

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

// POST /api/contact (public)
const submitContact = async (req, res) => {
  try {
    if (req.body.website) {
      return res.status(200).json({
        success: true,
        message: "Thank you! Your inquiry has been received.",
      });
    }

    const firstName = (req.body.firstName || "").trim();
    const lastName = (req.body.lastName || "").trim();
    const name = (req.body.name || `${firstName} ${lastName}`).trim();
    const email = (req.body.email || "").trim().toLowerCase();
    const subject = req.body.subject || (req.body.support || []).join(", ") || "Website inquiry";
    const message = req.body.message || buildMessage(req.body);

    if (!name || !email || !message) {
      return res.status(400).json({ message: "Name, email, and message are required." });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ message: "Please provide a valid email address." });
    }

    const contact = await Contact.create({
      firstName,
      lastName,
      name,
      email,
      subject,
      phone: req.body.phone,
      company: req.body.company,
      companyType: req.body.companyType,
      support: Array.isArray(req.body.support) ? req.body.support : [],
      summary: req.body.summary,
      reference: req.body.reference,
      attachmentName: req.body.attachmentName,
      deadline: req.body.deadline,
      budget: req.body.budget,
      comments: req.body.comments,
      message,
      source: req.body.source || "website",
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
    res.status(500).json({ message: error.message });
  }
};

// GET /api/contact (admin only)
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
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
    res.status(500).json({ message: error.message });
  }
};

module.exports = { submitContact, getContacts, markAsRead };
