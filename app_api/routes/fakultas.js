const express = require("express");
const router = express.Router();

// Impor fakultasController
const fakultasController = require("../controllers/fakultasController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

// Route GET fakultas
router.get("/", authMiddleware, fakultasController.getAllFakultas)
router.post("/", authMiddleware, roleMiddleware("admin"), fakultasController.createFakultas)
router.get("/:id", authMiddleware, fakultasController.getFakultasById)
router.delete("/:id", authMiddleware, roleMiddleware("admin"), fakultasController.deleteFakultasById)
router.put("/:id", authMiddleware, roleMiddleware("admin"), fakultasController.updateFakultasById)

// Export module
module.exports = router;