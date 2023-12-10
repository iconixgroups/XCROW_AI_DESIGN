import express, { Router } from 'express';
import { Request, Response } from 'express';
import disciplineController from '../controllers/disciplineController';
import auth from '../utils/auth';

const router: Router = express.Router();

router.get('/disciplines', auth, (req: Request, res: Response) => {
  disciplineController.getDisciplines(req, res);
});

router.post('/discipline', auth, (req: Request, res: Response) => {
  disciplineController.setDiscipline(req, res);
});

export default router;