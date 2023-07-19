const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/uploadController');
const auth = require('../utils/auth');

router.post('/upload', auth, uploadController.uploadFile);

module.exports = router;