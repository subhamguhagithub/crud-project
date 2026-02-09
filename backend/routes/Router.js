const UserController = require("../controller/UserController.js");

const express = require("express");

const router = express.Router();
const upload=require("../controller/multiConfig")

// Routes
router.post("/register",upload.single('image'),UserController.createUser);
router.get("/viewer", UserController.getUsers);
router.get("/user/:id", UserController.getUserById);
router.put("/updateuser/:id", UserController.updateUser);   // ✅ FIXED
router.delete("/deleteuser/:id", UserController.deleteUser); // ✅ FIXED

module.exports = router;
  