const express = require("express");
const router = express.Router();
const {
  getBlogs,
  getBlogBySlug,
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", getBlogs);                          // public
router.get("/:slug", getBlogBySlug);                // public
router.post("/", protect, createBlog);              // admin only
router.put("/:id", protect, updateBlog);            // admin only
router.delete("/:id", protect, deleteBlog);         // admin only

module.exports = router;
