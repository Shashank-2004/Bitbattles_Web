const mongoose = require("mongoose");

const careerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Job title is required"],
    trim: true,
  },
  department: {
    type: String,
    required: [true, "Department is required"],
    trim: true,
  },
  location: {
    type: String,
    required: [true, "Location is required"],
    trim: true,
  },
  experience: {
    type: String,
    required: [true, "Experience is required"],
    trim: true,
  },
  type: {
    type: String,
    required: [true, "Job type is required"],
    enum: ["Intern", "Full-time", "Contract"],
  },
  description: {
    type: String,
    required: [true, "Job description is required"],
  },
  tags: {
    type: [String],
    default: [],
  },
  moreCount: {
    type: Number,
    default: 0,
  },
  icon: {
    type: String,
    default: "💼",
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Career", careerSchema);
