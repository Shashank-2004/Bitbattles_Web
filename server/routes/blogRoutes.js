const express = require("express");
const { getBlogBySlug, getBlogs } = require("../controllers/blogController");

const router = express.Router();

router.get("/", getBlogs);
router.get("/:slug", getBlogBySlug);

module.exports = router;
