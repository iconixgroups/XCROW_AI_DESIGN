const express = require('express');
const router = express.Router();
const exportController = require('../controllers/exportController');
const auth = require('../utils/auth');

router.get('/export/:projectId', auth, exportController.exportData);

module.exports = router;