const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },

    title: {
      type: String,
      required: true,
    },

    category: String,

    description: String,

    tag: String,

    color: String,

    bgClass: String,

    image: String,

    subtitle: String,

    challenge: String,

    solution: String,

    outcome: String,

    techStack: [String],

    metrics: [
      {
        label: String,
        value: String,
      },
    ],

    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Portfolio", portfolioSchema);