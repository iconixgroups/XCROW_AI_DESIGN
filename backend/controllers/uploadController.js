const express = require('express');
const multer = require('multer');
const { s3 } = require('../utils/fileStorage.js');
const { ProjectSchema } = require('../models/Project.js');
const { db } = require('../utils/db.js');

const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // no larger than 5mb
  },
  fileFilter: function (req, file, cb) {
    const filetypes = /pdf|dwg|dwf|bim|revit/;
    const extname = filetypes.test(file.originalname.toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    }
    cb("Error: File upload only supports the following filetypes - " + filetypes);
  }
});

router.post('/upload', upload.single('file'), async (req, res) => {
  const file = req.file;
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

module.exports = router;