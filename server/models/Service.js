const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    serviceId: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    heroTitle: {
      type: String,
      required: true,
    },
    heroDescription: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
    emoji: {
      type: String,
      required: true,
    },
    shortCode: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// We want to transform `_id` to `id` for frontend consistency if needed
serviceSchema.set("toJSON", {
  virtuals: true,
  transform: (doc, ret) => {
    ret.id = ret.serviceId;
    delete ret._id;
    delete ret.__v;
    return ret;
  },
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
