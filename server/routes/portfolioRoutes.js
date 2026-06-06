const express = require("express");

const {
  createPortfolio,
  deletePortfolio,
  getFeatured,
  getPortfolios,
  getPortfolioBySlug,
  updatePortfolio,
} = require("../controllers/portfolioController");

const router = express.Router();

const requireAdminKey = (req, res, next) => {
  const configuredKey = process.env.ADMIN_API_KEY;

  if (!configuredKey && process.env.NODE_ENV !== "production") {
    return next();
  }

  if (!configuredKey) {
    return res.status(503).json({
      message: "Admin project management is not configured.",
    });
  }

  const providedKey = req.headers["x-admin-key"];

  if (providedKey !== configuredKey) {
    return res.status(401).json({
      message: "Invalid admin key.",
    });
  }

  return next();
};

// ALL PROJECTS
router.get("/", getPortfolios);


// FEATURED
router.get("/featured", getFeatured);


// SINGLE PROJECT
router.get("/:id", getPortfolioBySlug);


// CREATE PROJECT
router.post("/", requireAdminKey, createPortfolio);


// UPDATE PROJECT
router.put("/:id", requireAdminKey, updatePortfolio);


// DELETE PROJECT
router.delete("/:id", requireAdminKey, deletePortfolio);

module.exports = router;
