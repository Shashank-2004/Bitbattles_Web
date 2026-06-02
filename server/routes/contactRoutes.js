const express = require("express");
const rateLimit = require("express-rate-limit");
const multer = require("multer");
const { submitContact } = require("../controllers/contactController");

const router = express.Router();
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter(req, file, callback) {
    const allowedTypes = new Set([
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ]);

    if (!allowedTypes.has(file.mimetype)) {
      return callback(new Error("Resume must be a PDF, DOC, or DOCX file."));
    }

    return callback(null, true);
  },
});

const handleResumeUpload = (req, res, next) => {
  upload.single("resume")(req, res, (error) => {
    if (!error) {
      return next();
    }

    return res.status(400).json({
      message: error.message || "Could not upload resume.",
    });
  });
};

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { message: "Too many submissions. Please try again after 15 minutes." },
});

router.post("/", contactLimiter, handleResumeUpload, submitContact);

module.exports = router;
