const Career = require("../models/Career");

const cleanArray = (value) => {
  if (Array.isArray(value)) {
    return value.map((item) => String(item).trim()).filter(Boolean);
  }

  if (typeof value === "string") {
    return value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
};

const normalizeCareerPayload = (body) => ({
  title: String(body.title || "").trim(),
  department: String(body.department || "").trim(),
  location: String(body.location || "").trim(),
  experience: String(body.experience || "").trim(),
  type: String(body.type || "Intern").trim(),
  description: String(body.description || "").trim(),
  tags: cleanArray(body.tags),
  moreCount: Number.isFinite(Number(body.moreCount)) ? Number(body.moreCount) : 0,
  icon: String(body.icon || "Job").trim(),
  isActive: body.isActive === undefined ? true : Boolean(body.isActive),
});

const validateCareerPayload = (payload) => {
  const errors = [];
  const validTypes = ["Intern", "Full-time", "Contract"];

  if (!payload.title) errors.push("Job title is required.");
  if (!payload.department) errors.push("Department is required.");
  if (!payload.location) errors.push("Location is required.");
  if (!payload.experience) errors.push("Experience is required.");
  if (!payload.description) errors.push("Job description is required.");
  if (!validTypes.includes(payload.type)) {
    errors.push(`Job type must be one of: ${validTypes.join(", ")}.`);
  }

  return errors;
};

const getCareers = async (req, res) => {
  try {
    const query = {};

    if (req.query.includeInactive !== "true") {
      query.isActive = true;
    }

    if (req.query.department) {
      query.department = req.query.department;
    }

    if (req.query.type) {
      query.type = req.query.type;
    }

    const careers = await Career.find(query).sort({ createdAt: -1 });
    res.json(careers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCareerById = async (req, res) => {
  try {
    const career = await Career.findById(req.params.id);

    if (!career) {
      return res.status(404).json({ message: "Career not found" });
    }

    return res.json(career);
  } catch (error) {
    return res.status(400).json({ message: "Invalid career ID." });
  }
};

const createCareer = async (req, res) => {
  try {
    const payload = normalizeCareerPayload(req.body);
    const errors = validateCareerPayload(payload);

    if (errors.length) {
      return res.status(400).json({ message: errors.join(" ") });
    }

    const career = await Career.create(payload);
    return res.status(201).json(career);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const updateCareer = async (req, res) => {
  try {
    const payload = normalizeCareerPayload(req.body);
    const errors = validateCareerPayload(payload);

    if (errors.length) {
      return res.status(400).json({ message: errors.join(" ") });
    }

    const career = await Career.findByIdAndUpdate(req.params.id, payload, {
      new: true,
      runValidators: true,
    });

    if (!career) {
      return res.status(404).json({ message: "Career not found" });
    }

    return res.json(career);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const deleteCareer = async (req, res) => {
  try {
    const career = await Career.findByIdAndDelete(req.params.id);

    if (!career) {
      return res.status(404).json({ message: "Career not found" });
    }

    return res.json({ message: "Career removed successfully" });
  } catch (error) {
    return res.status(400).json({ message: "Invalid career ID." });
  }
};

module.exports = {
  getCareers,
  getCareerById,
  createCareer,
  updateCareer,
  deleteCareer,
};
