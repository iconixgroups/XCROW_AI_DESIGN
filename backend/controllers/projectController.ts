import express, { Request, Response } from 'express';
import Project from '../models/Project';
import db from '../utils/db';

const router = express.Router();

// Get project details
router.get('/:projectCode', async (req: Request, res: Response) => {
    try {
        const project = await db.findOne(Project, { projectCode: req.params.projectCode });
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.json(project);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Set project details
router.post('/', async (req: Request, res: Response) => {
    const { projectCode, projectName } = req.body;
    try {
        const project = new Project({ projectCode, projectName });
        await db.save(project);
        res.status(201).json(project);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

export default router;