const express = require("express");
const router = express.Router();

// Impor beritaController
const beritaController = require("../controllers/beritaController")

// Route GET berita
router.get("/", beritaController.getAllBerita)

// Export module
module.exports = router;