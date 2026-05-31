const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Project title is required"],
    trim: true,
  },
  category: {
    type: String,
    required: true,
    enum: ["web", "mobile", "ai", "security", "saas"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  techStack: {
    type: [String],
    default: [],
  },
  image: {
    type: String,
    default: "",
  },
  liveUrl: {
    type: String,
    default: "",
  },
  featured: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Portfolio", portfolioSchema);
