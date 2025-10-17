const express = require("express");
const router = express.Router();

// Impor fakultasController
const beritaController = require("../controllers/beritaController")

// Route GET fakultas
router.get("/", beritaController.getAllBerita)

// Export module
module.exports = router;