Shared Dependencies:

1. Exported Variables:
   - `store` from "frontend/src/redux/store.js"
   - `db` from "backend/utils/db.js"
   - `s3` from "fileStorage/s3.js"
   - `oauth2` from "authentication/oauth2.js"

2. Data Schemas:
   - `ProjectSchema` from "backend/models/Project.js"
   - `DisciplineSchema` from "backend/models/Discipline.js"
   - `QuantitySchema` from "backend/models/Quantity.js"
   - `UserSchema` from "backend/models/User.js"

3. DOM Element IDs:
   - `uploadFile` in "frontend/src/components/UploadComponent.js"
   - `projectDetails` in "frontend/src/components/ProjectDetailsComponent.js"
   - `disciplineSelection` in "frontend/src/components/DisciplineSelectionComponent.js"
   - `quantityData` in "frontend/src/components/QuantityDataComponent.js"
   - `exportData` in "frontend/src/components/ExportComponent.js"

4. Message Names:
   - `UPLOAD_SUCCESS` and `UPLOAD_FAILURE` in "frontend/src/redux/actions.js"
   - `PROJECT_DETAILS_SUCCESS` and `PROJECT_DETAILS_FAILURE` in "frontend/src/redux/actions.js"
   - `DISCIPLINE_SELECTION_SUCCESS` and `DISCIPLINE_SELECTION_FAILURE` in "frontend/src/redux/actions.js"
   - `QUANTITY_DATA_SUCCESS` and `QUANTITY_DATA_FAILURE` in "frontend/src/redux/actions.js"
   - `EXPORT_SUCCESS` and `EXPORT_FAILURE` in "frontend/src/redux/actions.js"

5. Function Names:
   - `uploadFile` in "backend/controllers/uploadController.js"
   - `getProjectDetails` and `setProjectDetails` in "backend/controllers/projectController.js"
   - `getDisciplines` and `setDiscipline` in "backend/controllers/disciplineController.js"
   - `getQuantityData` and `setQuantityData` in "backend/controllers/quantityController.js"
   - `exportData` in "backend/controllers/exportController.js"
   - `analyzeDrawings` in "ai/analyzeDrawings.py"
   - `extractQuantity` in "ai/extractQuantity.py"
   - `trainModel` in "ai/model/train.py"