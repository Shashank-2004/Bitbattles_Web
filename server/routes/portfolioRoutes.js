const express = require("express");
const { getFeatured, getPortfolios } = require("../controllers/portfolioController");

const router = express.Router();

router.get("/", getPortfolios);
router.get("/featured", getFeatured);

module.exports = router;
