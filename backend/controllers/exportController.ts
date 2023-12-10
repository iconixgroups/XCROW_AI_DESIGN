import express, { Request, Response, Router } from 'express';
import { s3 } from '../utils/fileStorage';
import Quantity from '../models/Quantity';

const router: Router = express.Router();

const exportData = async (req: Request, res: Response): Promise<void> => {
  try {
    const { projectId } = req.params;
    const quantityData = await Quantity.find({ projectId });

    if (!quantityData) {
      res.status(404).json({ message: 'No quantity data found for this project' });
      return;
    }

    const fileName = `quantity_data_${projectId}.xlsx`;
    const fileKey = `exports/${fileName}`;

    // Convert quantity data to Excel format and upload to S3
    const excelBuffer = await convertToExcel(quantityData);
    await s3.upload({
      Bucket: process.env.S3_BUCKET,
      Key: fileKey,
      Body: excelBuffer,
      ContentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    }).promise();

    res.json({ message: 'Data exported successfully', downloadUrl: s3.getSignedUrl('getObject', { Bucket: process.env.S3_BUCKET, Key: fileKey }) });
  } catch (error) {
    res.status(500).json({ message: 'Error exporting data', error });
  }
};

const convertToExcel = async (data: any): Promise<any> => {
  // Implement conversion logic here
};

router.get('/export/:projectId', exportData);

export default router;