const express = require("express");
const router = express.Router();
const {
  getPortfolios,
  getFeatured,
  createPortfolio,
  updatePortfolio,
  deletePortfolio,
} = require("../controllers/portfolioController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", getPortfolios);                     // public
router.get("/featured", getFeatured);               // public
router.post("/", protect, createPortfolio);         // admin only
router.put("/:id", protect, updatePortfolio);       // admin only
router.delete("/:id", protect, deletePortfolio);    // admin only

module.exports = router;
