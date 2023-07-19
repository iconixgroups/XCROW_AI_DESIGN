import { createAction } from '@reduxjs/toolkit';

export const uploadRequest = createAction('UPLOAD_REQUEST');
export const uploadSuccess = createAction('UPLOAD_SUCCESS');
export const uploadFailure = createAction('UPLOAD_FAILURE');

export const projectDetailsRequest = createAction('PROJECT_DETAILS_REQUEST');
export const projectDetailsSuccess = createAction('PROJECT_DETAILS_SUCCESS');
export const projectDetailsFailure = createAction('PROJECT_DETAILS_FAILURE');

export const disciplineSelectionRequest = createAction('DISCIPLINE_SELECTION_REQUEST');
export const disciplineSelectionSuccess = createAction('DISCIPLINE_SELECTION_SUCCESS');
export const disciplineSelectionFailure = createAction('DISCIPLINE_SELECTION_FAILURE');

export const quantityDataRequest = createAction('QUANTITY_DATA_REQUEST');
export const quantityDataSuccess = createAction('QUANTITY_DATA_SUCCESS');
export const quantityDataFailure = createAction('QUANTITY_DATA_FAILURE');

export const exportRequest = createAction('EXPORT_REQUEST');
export const exportSuccess = createAction('EXPORT_SUCCESS');
export const exportFailure = createAction('EXPORT_FAILURE');