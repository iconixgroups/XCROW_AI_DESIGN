import express, { Router, Request, Response } from 'express';
import multer, { Multer } from 'multer';
import { s3 } from '../utils/fileStorage';
import { ProjectSchema } from '../models/Project';
import { db } from '../utils/db';

const router: Router = express.Router();

const upload: Multer = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // no larger than 5mb
  },
  fileFilter: function (req: Request, file: Express.Multer.File, cb: (error: Error | null, acceptFile: boolean) => void) {
    const filetypes = /pdf|dwg|dwf|bim|revit/;
    const extname = filetypes.test(file.originalname.toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(new Error("Error: File upload only supports the following filetypes - " + filetypes), false);
  }
});

router.post('/upload', upload.single('file'), async (req: Request, res: Response) => {
  const file: Express.Multer.File = req.file;
  const { projectCode, projectName } = req.body;

  if (!file) {
    res.status(400).send('No file uploaded.');
    return;
  }

  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: `${projectCode}/${file.originalname}`,
    Body: file.buffer,
    ContentType: file.mimetype,
  };

  try {
    const uploaded = await s3.upload(params).promise();

    const newProject = new ProjectSchema({
      code: projectCode,
      name: projectName,
      fileUrl: uploaded.Location,
    });

    const savedProject = await db.collection('projects').insertOne(newProject);

    res.status(200).json({ message: 'UPLOAD_SUCCESS', project: savedProject.ops[0] });
  } catch (error) {
    res.status(500).json({ message: 'UPLOAD_FAILURE', error: error.message });
  }
});

export default router;