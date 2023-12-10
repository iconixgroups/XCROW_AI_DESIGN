import express, { Router } from 'express';
import exportController from '../controllers/exportController';
import auth from '../utils/auth';

const router: Router = express.Router();

router.get('/export/:projectId', auth, exportController.exportData);

export default router;