import express, { Request, Response, NextFunction } from 'express';
import Discipline, { IDiscipline } from '../models/Discipline';
import db from '../utils/db';

const router = express.Router();

// Get all disciplines
router.get('/', async (req: Request, res: Response) => {
    try {
        const disciplines: IDiscipline[] = await Discipline.find();
        res.json(disciplines);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get one discipline
router.get('/:id', getDiscipline, (req: Request, res: Response) => {
    res.json(res.discipline);
});

// Create one discipline
router.post('/', async (req: Request, res: Response) => {
    const discipline: IDiscipline = new Discipline({
        name: req.body.name,
        description: req.body.description
    });

    try {
        const newDiscipline: IDiscipline = await discipline.save();
        res.status(201).json(newDiscipline);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Middleware function for get by ID
async function getDiscipline(req: Request, res: Response, next: NextFunction) {
    let discipline: IDiscipline | null;
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

export default router;