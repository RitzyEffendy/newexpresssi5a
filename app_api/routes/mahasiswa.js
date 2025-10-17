const express = require("express");
const router = express.Router();

// Impor
const mahasiswaController = require("../controllers/mahasiswaController")

// Route GET mahasiswa
router.get("/", mahasiswaController.getAllMahasiswa)

// Export module
module.exports = router;