const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const blogsRoutes = require("./routes/blogsRoutes");
const userRoutes = require("./routes/userRoutes");
const socialRoutes = require("./routes/socialRoutes");
const authRoutes = require("./routes/authRoutes");

const path = require("path");

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/blogs", blogsRoutes);
app.use("/api/user", userRoutes);
app.use("/api/posts", socialRoutes);
app.use("/api/auth", authRoutes);

app.use(express.static(path.join(__dirname, "/Client/dist")));

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/Client/dist/index.html"))
);

mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `Connected to DB and Server listening on port`,
        process.env.PORT
      );
    });
  })
  .catch((error) => {
    console.error(error);
  });
