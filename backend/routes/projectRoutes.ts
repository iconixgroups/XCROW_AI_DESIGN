import express, { Router } from 'express';
import projectController from '../controllers/projectController';
import auth from '../utils/auth';

const router: Router = express.Router();

router.post('/create', auth, projectController.setProjectDetails);
router.get('/:projectCode', auth, projectController.getProjectDetails);

export default router;