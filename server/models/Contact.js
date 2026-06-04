const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  company: { type: String },
  companyType: { type: String },
  support: { type: [String], default: [] },
  summary: { type: String },
  reference: { type: String },
  deadline: { type: String },
  budget: { type: String },
  comments: { type: String },
  attachmentName: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Contact", contactSchema);
