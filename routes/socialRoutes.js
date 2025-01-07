const express = require("express");
const router = express.Router();
const Blog = require("../models/blogModel");
const authMiddleware = require("../authMiddleware");

router.post("/:postId/like", authMiddleware, async (req, res) => {
  try {
    const { postId } = req.params;
    const blog = await Blog.findById(postId);

    if (!blog) {
      return res.status(400).json({ messae: "Blog not found" });
    }

    if (blog.likes.includes(req.userId)) {
      await Blog.findByIdAndUpdate(postId, { $pull: { likes: req.userId } });
    } else {
      await Blog.findByIdAndUpdate(postId, { $push: { likes: req.userId } });
    }
    console.log(req.userId);

    const updatedBlog = await Blog.findById(postId); // Fetch updated blog data
    res.json(updatedBlog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ messae: "Server Error" });
  }
});

router.post("/:postId/comment", authMiddleware, async (req, res) => {
  try {
    const { postId } = req.params;
    const blog = await Blog.findById(postId);
    const { content } = req.body;

    if (!blog) {
      return res.status(400).json({ message: "Blog not found" });
    }

    await Blog.findByIdAndUpdate(postId, {
      $push: { comments: { content } },
    });

    console.log(content);

    const updatedBlog = await Blog.findById(postId); // Fetch updated blog data
    res.json(updatedBlog);
  } catch (error) {
    console.error("Error fetching comment", error);
    res.status(500).jsosn({ message: "Server Error" });
  }
});

router.delete(
  "/:postId/comment/:commentId",
  authMiddleware,
  async (req, res) => {
    try {
      const { postId, commentId } = req.params;

      const blog = await Blog.findById(postId);
      if (!blog) {
        return res.status(404).json({ message: "Blog not found" });
      }

      // Find the index of the comment to be deleted
      const commentIndex = blog.comments.findIndex(
        (comment) => comment._id.toString() === commentId
      );

      if (commentIndex !== -1) {
        blog.comments.splice(commentIndex, 1); // Remove the comment from the array
        await blog.save();
        res.json({ message: "Comment deleted successfully" });
      } else {
        return res.status(404).json({ message: "Comment not found" });
      }
    } catch (error) {
      console.error("Error deleting comment:", error);
      res.status(500).json({ message: "Server Error" });
    }
  }
);

module.exports = router;
