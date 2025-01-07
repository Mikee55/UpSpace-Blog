const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken"); // Assuming you're using JWT for authentication

// Middleware to verify token
const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Extract token from 'Bearer <token>'

  if (token == null) return res.sendStatus(401); // Unauthorized

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403); // Forbidden
    req.user = decoded; // Attach user data to the request object
    next();
  });
};

router.get("/validate", verifyToken, (req, res) => {
  // If token is valid and verified, send a success response (optional)
  res.status(200).json({ message: "Token valid" });
});

module.exports = router;
