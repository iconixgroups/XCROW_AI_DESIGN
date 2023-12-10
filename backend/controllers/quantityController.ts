import express, { Router, Request, Response } from 'express';
import Quantity from '../models/Quantity';
import db from '../utils/db';

const router: Router = express.Router();

// Get quantity data
router.get('/:projectCode', async (req: Request, res: Response) => {
    try {
        const projectCode: string = req.params.projectCode;
        const quantityData = await db.query(Quantity.find({ projectCode }));
        res.json(quantityData);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Set quantity data
router.post('/:projectCode', async (req: Request, res: Response) => {
    try {
        const projectCode: string = req.params.projectCode;
        const quantityData = new Quantity({
            projectCode: projectCode,
            data: req.body.data
        });
        const newQuantityData = await db.query(quantityData.save());
        res.status(201).json(newQuantityData);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

export default router;