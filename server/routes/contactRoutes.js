const express = require("express");
const router = express.Router();
const rateLimit = require("express-rate-limit");
const { submitContact, getContacts, markAsRead } = require("../controllers/contactController");
const { protect } = require("../middleware/authMiddleware");

// Rate limit: max 5 contact submissions per IP per 15 minutes
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { message: "Too many submissions. Please try again after 15 minutes." },
});

router.post("/", contactLimiter, submitContact);   // public
router.get("/", protect, getContacts);              // admin only
router.put("/:id/read", protect, markAsRead);       // admin only

module.exports = router;
