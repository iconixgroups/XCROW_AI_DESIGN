const express = require('express');
const router = express.Router();
const disciplineController = require('../controllers/disciplineController');
const auth = require('../utils/auth');

router.get('/disciplines', auth, disciplineController.getDisciplines);
router.post('/discipline', auth, disciplineController.setDiscipline);

module.exports = router;