import express from 'express';
import { Router } from 'express';
import uploadController from '../controllers/uploadController';
import auth from '../utils/auth';

const router: Router = express.Router();

router.post('/upload', auth, uploadController.uploadFile);

export default router;