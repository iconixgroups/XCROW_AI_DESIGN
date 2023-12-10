import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import db from './utils/db';
import oauth2 from '../authentication/oauth2';

import uploadRoutes from './routes/uploadRoutes';
import projectRoutes from './routes/projectRoutes';
import disciplineRoutes from './routes/disciplineRoutes';
import quantityRoutes from './routes/quantityRoutes';
import exportRoutes from './routes/exportRoutes';

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Authentication
app.use(oauth2.initialize());

// Routes
app.use('/api/upload', uploadRoutes);
app.use('/api/project', projectRoutes);
app.use('/api/discipline', disciplineRoutes);
app.use('/api/quantity', quantityRoutes);
app.use('/api/export', exportRoutes);

// Connect to database
db.connect();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;