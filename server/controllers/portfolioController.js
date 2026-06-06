const Portfolio = require("../models/Portfolio");

const slugify = (value) =>
  String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

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

const normalizePortfolioPayload = (body) => {
  const title = String(body.title || "").trim();
  const id = slugify(body.id || title);

  return {
    id,
    title,
    category: String(body.category || "Development").trim(),
    description: String(body.description || "").trim(),
    tag: String(body.tag || "").trim(),
    color: String(body.color || "#ff6a2a").trim(),
    bgClass: String(body.bgClass || "from-[#111c2e] to-[#070c14]").trim(),
    image: String(body.image || "").trim(),
    subtitle: String(body.subtitle || "").trim(),
    challenge: String(body.challenge || "").trim(),
    solution: String(body.solution || "").trim(),
    outcome: String(body.outcome || "").trim(),
    techStack: cleanArray(body.techStack),
    metrics: Array.isArray(body.metrics)
      ? body.metrics
          .map((metric) => ({
            label: String(metric.label || "").trim(),
            value: String(metric.value || "").trim(),
          }))
          .filter((metric) => metric.label || metric.value)
      : [],
    featured: Boolean(body.featured),
  };
};

const validatePortfolioPayload = (payload) => {
  const errors = [];

  if (!payload.title) errors.push("Project title is required.");
  if (!payload.id) errors.push("Project ID is required.");
  if (!payload.description) errors.push("Project description is required.");

  return errors;
};

// GET ALL PROJECTS
const getPortfolios = async (req, res) => {
  try {
    const query = {};

    if (req.query.category && req.query.category !== "All") {
      query.category = req.query.category;
    }

    if (req.query.featured === "true") {
      query.featured = true;
    }

    const portfolios = await Portfolio.find(query).sort({ createdAt: -1 });

    res.json(portfolios);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// GET FEATURED PROJECTS
const getFeatured = async (req, res) => {
  try {
    const featured = await Portfolio.find({
      featured: true,
    }).sort({
      createdAt: -1,
    });

    res.json(featured);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// GET SINGLE PROJECT
const getPortfolioBySlug = async (req, res) => {
  try {
    const project = await Portfolio.findOne({
      id: req.params.id,
    });

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    res.json(project);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// CREATE PROJECT
const createPortfolio = async (req, res) => {
  try {
    const payload = normalizePortfolioPayload(req.body);
    const errors = validatePortfolioPayload(payload);

    if (errors.length) {
      return res.status(400).json({ message: errors.join(" ") });
    }

    const exists = await Portfolio.findOne({ id: payload.id });

    if (exists) {
      return res.status(409).json({ message: "A project with this ID already exists." });
    }

    const project = await Portfolio.create(payload);
    return res.status(201).json(project);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// UPDATE PROJECT
const updatePortfolio = async (req, res) => {
  try {
    const payload = normalizePortfolioPayload({
      ...req.body,
      id: req.body.id || req.params.id,
    });
    const errors = validatePortfolioPayload(payload);

    if (errors.length) {
      return res.status(400).json({ message: errors.join(" ") });
    }

    const project = await Portfolio.findOneAndUpdate(
      { id: req.params.id },
      payload,
      { new: true, runValidators: true }
    );

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    return res.json(project);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// DELETE PROJECT
const deletePortfolio = async (req, res) => {
  try {
    const project = await Portfolio.findOneAndDelete({ id: req.params.id });

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    return res.json({ message: "Project removed successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getPortfolios,
  getFeatured,
  getPortfolioBySlug,
  createPortfolio,
  updatePortfolio,
  deletePortfolio,
};
