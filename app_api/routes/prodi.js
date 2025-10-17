const express = require("express");
const router = express.Router();

// Impor prodiController
const prodiController = require("../controllers/prodiController")

// Route GET prodi
router.get("/", prodiController.getAllProdi)

// Export module
module.exports = router;