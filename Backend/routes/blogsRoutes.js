const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const {
  getBlogs,
  getBlog,
  getCategory,
  createBlog,
  deleteBlog,
  updateBlog,
} = require("../controllers/blogController");

const router = express.Router();

router.get("/", getBlogs);

router.get("/:id", getBlog);

router.get("/categories/:category", getCategory);

router.post("/", upload.single("image"), createBlog);

router.delete("/:id", deleteBlog);

router.patch("/:id", updateBlog);

module.exports = router;
