const express = require('express');
const router = express.Router();
const quantityController = require('../controllers/quantityController');
const auth = require('../utils/auth');

router.get('/quantity/:projectId', auth, quantityController.getQuantityData);
router.post('/quantity/:projectId', auth, quantityController.setQuantityData);

module.exports = router;