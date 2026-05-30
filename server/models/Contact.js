const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
  },
  subject: {
    type: String,
    default: "General Inquiry",
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  company: {
    type: String,
    trim: true,
  },
  companyType: {
    type: String,
    trim: true,
  },
  support: {
    type: [String],
    default: [],
  },
  summary: {
    type: String,
    trim: true,
  },
  reference: {
    type: String,
    trim: true,
  },
  attachmentName: {
    type: String,
    trim: true,
  },
  deadline: {
    type: String,
    trim: true,
  },
  budget: {
    type: String,
    trim: true,
  },
  comments: {
    type: String,
    trim: true,
  },
  message: {
    type: String,
    required: [true, "Message is required"],
  },
  source: {
    type: String,
    default: "website",
    trim: true,
  },
  read: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Contact", contactSchema);
