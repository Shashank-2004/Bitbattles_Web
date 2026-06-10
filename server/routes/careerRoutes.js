const express = require("express");
const {
  createCareer,
  deleteCareer,
  getCareerById,
  getCareers,
  updateCareer,
} = require("../controllers/careerController");

const router = express.Router();

const requireAdminKey = (req, res, next) => {
  const configuredKey = process.env.ADMIN_API_KEY;

  if (!configuredKey && process.env.NODE_ENV !== "production") {
    return next();
  }

  if (!configuredKey) {
    return res.status(503).json({
      message: "Admin career management is not configured.",
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

router.get("/", getCareers);
router.get("/:id", getCareerById);
router.post("/", requireAdminKey, createCareer);
router.put("/:id", requireAdminKey, updateCareer);
router.delete("/:id", requireAdminKey, deleteCareer);

module.exports = router;
