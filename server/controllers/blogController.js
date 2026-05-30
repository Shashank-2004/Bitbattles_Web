const Blog = require("../models/Blog");

// GET /api/blog  (public)
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ published: true }).sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /api/blog/:slug  (public)
const getBlogBySlug = async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
    if (!blog) {
      return res.status(404).json({ message: "Blog post not found" });
    }
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST /api/blog  (admin only)
const createBlog = async (req, res) => {
  try {
    // Auto-generate slug from title
    const slug = req.body.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

    const blog = await Blog.create({ ...req.body, slug });
    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// PUT /api/blog/:id  (admin only)
const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!blog) {
      return res.status(404).json({ message: "Blog post not found" });
    }
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE /api/blog/:id  (admin only)
const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "Blog post not found" });
    }
    res.json({ message: "Blog post deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getBlogs, getBlogBySlug, createBlog, updateBlog, deleteBlog };
