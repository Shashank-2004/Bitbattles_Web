const express = require("express");
const { getCareers } = require("../controllers/careerController");

const router = express.Router();

router.get("/", getCareers);

module.exports = router;
