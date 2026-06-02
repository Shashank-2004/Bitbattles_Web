const Portfolio = require("../models/Portfolio");

const getPortfolios = async (req, res) => {
  try {
    const portfolios = await Portfolio.find().sort({ createdAt: -1 });
    res.json(portfolios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getFeatured = async (req, res) => {
  try {
    const featured = await Portfolio.find({ featured: true }).sort({ createdAt: -1 });
    res.json(featured);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getPortfolios, getFeatured };
