const express = require("express");
const router = express.Router();
const { getServices, toggleServiceState } = require("../controllers/serviceController");

router.get("/", getServices);
router.put("/:serviceId/toggle", toggleServiceState);

module.exports = router;
