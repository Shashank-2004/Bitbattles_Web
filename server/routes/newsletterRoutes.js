const express = require("express");
const rateLimit = require("express-rate-limit");
const { subscribeNewsletter } = require("../controllers/newsletterController");

const router = express.Router();

const newsletterLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 8,
  message: { message: "Too many subscription attempts. Please try again later." },
});

router.post("/", newsletterLimiter, subscribeNewsletter);

module.exports = router;
