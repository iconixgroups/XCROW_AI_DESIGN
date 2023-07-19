const express = require('express');
const Discipline = require('../models/Discipline');
const db = require('../utils/db');

const router = express.Router();

// Get all disciplines
router.get('/', async (req, res) => {
    try {
        const disciplines = await Discipline.find();
        res.json(disciplines);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get one discipline
router.get('/:id', getDiscipline, (req, res) => {
    res.json(res.discipline);
});

// Create one discipline
router.post('/', async (req, res) => {
    const discipline = new Discipline({
        name: req.body.name,
        description: req.body.description
    });

    try {
        const newDiscipline = await discipline.save();
        res.status(201).json(newDiscipline);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Middleware function for get by ID
async function getDiscipline(req, res, next) {
    let discipline;
    try {
        discipline = await Discipline.findById(req.params.id);
        if (discipline == null) {
            return res.status(404).json({ message: 'Cannot find discipline' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.discipline = discipline;
    next();
}

module.exports = router;