const express = require('express');

const router = express.Router();

const resepController = require('../controllers/resepController');

router.get('/', resepController.getAllResep);
router.get('/:id', resepController.getAllResepById);
router.delete('/:id', resepController.deleteAllResepById);
router.patch('/:id', resepController.updateResepById);
router.post('/', resepController.createResep);

module.exports = router;