const Portfolio = require("../models/Portfolio");

// GET /api/portfolio  (public)
const getPortfolios = async (req, res) => {
  try {
    const portfolios = await Portfolio.find().sort({ createdAt: -1 });
    res.json(portfolios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /api/portfolio/featured  (public — homepage)
const getFeatured = async (req, res) => {
  try {
    const featured = await Portfolio.find({ featured: true }).sort({ createdAt: -1 });
    res.json(featured);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST /api/portfolio  (admin only)
const createPortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.create(req.body);
    res.status(201).json(portfolio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// PUT /api/portfolio/:id  (admin only)
const updatePortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!portfolio) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json(portfolio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE /api/portfolio/:id  (admin only)
const deletePortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findByIdAndDelete(req.params.id);
    if (!portfolio) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json({ message: "Project deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getPortfolios, getFeatured, createPortfolio, updatePortfolio, deletePortfolio };
