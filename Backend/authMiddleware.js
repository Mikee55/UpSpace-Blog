const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authorizationHeader = req.headers.authorization;

  if (authorizationHeader) {
    const token = authorizationHeader.split(" ")[1];

    try {
      const decoded = jwt.verify(token, process.env.SECRET);
      req.userId = decoded._id;
      next();
    } catch (error) {
      console.error("Authentication error:", error);
      res.status(401).json({ message: "unauthorized" });
    }
  } else {
    res.status(401).json({ message: "Authorization header missing" });
  }
};

module.exports = authMiddleware;
