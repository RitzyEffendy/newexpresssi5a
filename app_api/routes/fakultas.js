const express = require("express");
const router = express.Router();

// Impor fakultasController
const fakultasController = require("../controllers/fakultasController")

// Route GET fakultas
router.get("/", fakultasController.getAllFakultas)
router.post("/", fakultasController.createFakultas)
router.get("/:id", fakultasController.getFakultasById)
router.delete("/:id", fakultasController.deleteFakultasById)
router.put("/:id", fakultasController.updateFakultasById)

// Export module
module.exports = router;