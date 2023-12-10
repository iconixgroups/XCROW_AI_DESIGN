import express, { Router } from 'express';
import { Request, Response } from 'express';
import * as quantityController from '../controllers/quantityController';
import auth from '../utils/auth';

const router: Router = express.Router();

router.get('/quantity/:projectId', auth, (req: Request, res: Response) => {
  quantityController.getQuantityData(req, res);
});

router.post('/quantity/:projectId', auth, (req: Request, res: Response) => {
  quantityController.setQuantityData(req, res);
});

export default router;