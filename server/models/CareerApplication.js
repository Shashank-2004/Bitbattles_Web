const mongoose = require("mongoose");

const careerApplicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  role: { type: String, required: true },
  experience: { type: String, required: true },
  portfolio: { type: String },
  linkedin: { type: String },
  summary: { type: String, required: true },
  attachmentName: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("CareerApplication", careerApplicationSchema);
