const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./utils/db');
const oauth2 = require('../authentication/oauth2');

const uploadRoutes = require('./routes/uploadRoutes');
const projectRoutes = require('./routes/projectRoutes');
const disciplineRoutes = require('./routes/disciplineRoutes');
const quantityRoutes = require('./routes/quantityRoutes');
const exportRoutes = require('./routes/exportRoutes');

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

module.exports = app;