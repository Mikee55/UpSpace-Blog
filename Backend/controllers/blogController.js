const { default: mongoose } = require("mongoose");
const Blog = require("../models/blogModel");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "dhyha3lv4",
  api_key: "296185512289852",
  api_secret: "meyq6ZnRwpfzDfvLbqyxvuEdamc",
});

const upload = multer({ dest: "uploads/" });

const getBlogs = async (req, res) => {
  const blogs = await Blog.find({});
  res.status(200).json(blogs);
};

const getBlog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Blog not found" });
  }

  const blog = await Blog.findById(id);

  if (!blog) {
    return res.status(400).jsaon({ error: "Blog not found" });
  }

  res.status(200).json(blog);
};

const getCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const blogs = await Blog.find({ category: category });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: "Error fetching blogs" });
  }
};

const createBlog = async (req, res) => {
  try {
    const { title, description, category, author, date } = req.body;

    let imageUrl = "";

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      imageUrl = result.secure_url;
    }

    const blog = await Blog.create({
      title,
      description,
      category,
      author,
      date,
      image: imageUrl,
    });
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteBlog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Blog not found" });
  }

  const blog = await Blog.findByIdAndDelete({ _id: id });

  if (!blog) {
    return res.status(404).json({ error: "Blog not found" });
  }

  res.status(200).json(blog);
};

const updateBlog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Blog not found" });
  }

  const blog = await Blog.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!blog) {
    return res.status(404).json({ error: "Blog not found" });
  }

  res.status(200).json(blog);
};

module.exports = {
  getBlogs,
  getBlog,
  getCategory,
  createBlog,
  deleteBlog,
  updateBlog,
};
