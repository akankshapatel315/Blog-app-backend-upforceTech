const express = require("express");
const userController = require("../Controllers/userController");
const auth = require("../middleware/authJWT");
const userRouter = express.Router();

// Route for creating a todo
userRouter.post("/register", userController.addUser);
userRouter.post("/login", userController.login);


module.exports = userRouter;
