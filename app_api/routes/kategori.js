const express = require('express');

const router = express.Router();

const kategoriController = require('../controllers/kategoriController');

router.get('/', kategoriController.getAllKategori);
router.get('/:id', kategoriController.getAllKategoriById);
router.delete('/:id', kategoriController.deleteAllKategoriById);
router.put('/:id', kategoriController.updateKategoriById);
router.post('/', kategoriController.createKategori);

module.exports = router;