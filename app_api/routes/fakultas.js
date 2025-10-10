const express = require("express");
const router = express.Router();

// Impor fakultasController
const fakultasController = require("../controllers/fakultasController")

// Route GET fakultas
router.get("/", fakultasController.getAllFakultas)

// Export module
module.exports = router;