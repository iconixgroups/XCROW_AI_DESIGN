# Source Code Documentation

This document provides an overview of the source code for our application that allows users to upload construction drawings, uses AI to analyze files, extracts quantity data, and provides cost estimations.

## Frontend

The frontend of the application is built using React and Redux. The main entry point of the application is `App.js`. This file sets up the Redux store using the `store` exported from `redux/store.js` and renders the main application component.

The application consists of several components:

- `UploadComponent.js`: This component provides the functionality for users to upload PDF, DWG, DWF, BIM, REVIT files. It uses the `uploadFile` DOM element ID for the file input field.

- `ProjectDetailsComponent.js`: This component allows users to provide the project code and name. It uses the `projectDetails` DOM element ID.

- `DisciplineSelectionComponent.js`: This component allows users to select the discipline for the project. It uses the `disciplineSelection` DOM element ID.

- `QuantityDataComponent.js`: This component displays the quantity data extracted by the AI. It uses the `quantityData` DOM element ID.

- `ExportComponent.js`: This component allows users to download the quantity data as an Excel file. It uses the `exportData` DOM element ID.

Redux is used for state management. The actions and reducers are defined in `redux/actions.js` and `redux/reducers.js` respectively.

## Backend

The backend of the application is built using Node.js and Express. The main entry point of the server is `server.js`.

The server has several routes:

- `uploadRoutes.js`: Handles file uploads.

- `projectRoutes.js`: Handles getting and setting project details.

- `disciplineRoutes.js`: Handles getting and setting the discipline.

- `quantityRoutes.js`: Handles getting and setting quantity data.

- `exportRoutes.js`: Handles exporting data.

Each route uses a corresponding controller:

- `uploadController.js`: Handles the logic for file uploads.

- `projectController.js`: Handles the logic for getting and setting project details.

- `disciplineController.js`: Handles the logic for getting and setting the discipline.

- `quantityController.js`: Handles the logic for getting and setting quantity data.

- `exportController.js`: Handles the logic for exporting data.

The server uses MySQL for the database. The database configuration and connection are handled in `dbConfig.js` and `dbConnection.js` respectively. The database queries are defined in `dbQueries.js`.

The server uses S3 for file storage. The S3 configuration and functionality are handled in `config.js` and `s3.js` respectively.

The server uses OAuth2 for authentication. The OAuth2 configuration and functionality are handled in `config.js` and `oauth2.js` respectively.

## AI

The AI functionality of the application is handled by TensorFlow and OpenCV. The main scripts are `analyzeDrawings.py` and `extractQuantity.py`.

- `analyzeDrawings.py`: This script uses AI to analyze the uploaded drawings and match project details.

- `extractQuantity.py`: This script uses AI to extract quantity data from the analyzed drawings.

The AI model is trained using the `train.py` script and the trained model is saved as `model.h5`.

## Tests

The application includes tests for the frontend, backend, AI, database, file storage, and authentication. The tests are located in the `tests` directory.

## Documentation

This source code documentation, along with a user guide and a deployment guide, are included in the `documentation` directory.