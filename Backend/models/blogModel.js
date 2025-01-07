const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: false,
    },
    author: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    likes: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
    comments: [
      {
        author: {
          type: mongoose.Schema.ObjectId,
          ref: "User",
        },
        content: {
          type: String,
          required: false,
        },
      },
    ],
    shares: {
      type: Number,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);
