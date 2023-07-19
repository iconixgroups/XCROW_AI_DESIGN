const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const auth = require('../utils/auth');

router.post('/create', auth, projectController.setProjectDetails);
router.get('/:projectCode', auth, projectController.getProjectDetails);

module.exports = router;