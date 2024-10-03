import { NextFunction } from "express";

const jwt = require("jsonwebtoken");

const verifyToken = (req:any, res:any, next:NextFunction) => {
  // Retrieve the token from the Authorization header
  const authHeader = req.headers["authorization"];
  
  // Check if the header is present and starts with "Bearer "
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }

  // Extract the token by removing the "Bearer " part
  const token = authHeader.split(" ")[1];

  jwt.verify(token, "Akanksha", (err:Error, decoded:any) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }
    
    // Save the user ID from the decoded token
    req.body.userId = decoded.id;
    next();
  });
};

module.exports = { verifyToken };
