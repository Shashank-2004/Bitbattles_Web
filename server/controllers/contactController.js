const { sendContactNotifications } = require("../services/emailService");
const Career = require("../models/Career");
const Contact = require("../models/Contact");
const CareerApplication = require("../models/CareerApplication");

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
  "",
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
  if (typeof support === "string") {
    return support
      .split(",")
      .map((item) => cleanText(item))
      .filter(Boolean)
      .slice(0, 12);
  }

  if (!Array.isArray(support)) {
    return [];
  }

  return support.map((item) => cleanText(item)).filter(Boolean).slice(0, 12);
};

const cleanSelect = (value) =>
  ["Please select", "Select a Budget Range"].includes(value) ? "" : value;

const buildMessage = (payload) => {
  const isCareer = payload.source === "career-application-page";

  const fields = isCareer
    ? [
        payload.phone && `Phone: ${payload.phone}`,
        payload.role && `Role: ${payload.role}`,
        payload.experience && `Experience: ${payload.experience}`,
        payload.portfolio && `Portfolio: ${payload.portfolio}`,
        payload.linkedin && `LinkedIn: ${payload.linkedin}`,
        (payload.summary || payload.message) && `Summary: ${payload.summary || payload.message}`,
        payload.attachmentName && `Resume: ${payload.attachmentName}`,
      ]
    : [
        payload.phone && `Phone: ${payload.phone}`,
        payload.company && `Company: ${payload.company}`,
        payload.companyType && `Company type: ${payload.companyType}`,
        payload.support?.length && `Support needed: ${payload.support.join(", ")}`,
        (payload.summary || payload.message) && `Summary: ${payload.summary || payload.message}`,
        payload.reference && `Reference: ${payload.reference}`,
        payload.deadline && `Deadline: ${payload.deadline}`,
        cleanSelect(payload.budget) && `Budget: ${cleanSelect(payload.budget)}`,
        payload.attachmentName && `Attachment: ${payload.attachmentName}`,
        payload.comments && `Comments: ${payload.comments}`,
      ];

  return fields.filter(Boolean).join("\n") || "No additional details provided.";
};

const submitContact = async (req, res) => {
  try {
    if (req.body.website) {
      return res.status(200).json({
        success: true,
        message: "Thank you! Your inquiry has been received.",
      });
    }

    if (req.body.source === "career-application-page" && req.body.role) {
      const career = await Career.findOne({ title: req.body.role });
      if (!career) {
        return res.status(400).json({ message: "This role does not exist." });
      }
      if (!career.isActive) {
        return res.status(400).json({ message: "Applications for this role are currently closed." });
      }
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
      attachmentName: cleanText(req.body.attachmentName || req.file?.originalname),
      role: cleanText(req.body.role),
      experience: cleanText(req.body.experience),
      portfolio: cleanText(req.body.portfolio),
      linkedin: cleanText(req.body.linkedin),
      deadline: cleanText(req.body.deadline),
      budget,
      comments: cleanLongText(req.body.comments),
      message,
      source: cleanText(req.body.source, "website"),
      submittedAt: new Date().toISOString(),
      attachment: req.file
        ? {
            filename: req.file.originalname,
            content: req.file.buffer,
            contentType: req.file.mimetype,
          }
        : null,
    };

    if (contact.source === "career-application-page") {
      const application = new CareerApplication({
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        role: contact.role,
        experience: contact.experience,
        portfolio: contact.portfolio,
        linkedin: contact.linkedin,
        summary: contact.summary,
        attachmentName: contact.attachmentName,
      });
      await application.save();
    } else {
      const inquiry = new Contact({
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        company: contact.company,
        companyType: contact.companyType,
        support: contact.support,
        summary: contact.summary,
        reference: contact.reference,
        deadline: contact.deadline,
        budget: contact.budget,
        comments: contact.comments,
        attachmentName: contact.attachmentName,
      });
      await inquiry.save();
    }

    const emailResults = await sendContactNotifications(contact);
    
    // Log any rejected emails for debugging
    emailResults.forEach((result) => {
      if (result.status === "rejected") {
        console.error("Email failed to send:", result.reason);
      }
    });

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
