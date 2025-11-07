const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Rute new user
router.post("/register", authController.register)

// Route GET berita
router.post("/login", authController.login)

// Export module
module.exports = router;