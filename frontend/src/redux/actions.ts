import { createAction } from '@reduxjs/toolkit';

export const uploadRequest = createAction<string>('UPLOAD_REQUEST');
export const uploadSuccess = createAction<string>('UPLOAD_SUCCESS');
export const uploadFailure = createAction<string>('UPLOAD_FAILURE');

export const projectDetailsRequest = createAction<string>('PROJECT_DETAILS_REQUEST');
export const projectDetailsSuccess = createAction<string>('PROJECT_DETAILS_SUCCESS');
export const projectDetailsFailure = createAction<string>('PROJECT_DETAILS_FAILURE');

export const disciplineSelectionRequest = createAction<string>('DISCIPLINE_SELECTION_REQUEST');
export const disciplineSelectionSuccess = createAction<string>('DISCIPLINE_SELECTION_SUCCESS');
export const disciplineSelectionFailure = createAction<string>('DISCIPLINE_SELECTION_FAILURE');

export const quantityDataRequest = createAction<string>('QUANTITY_DATA_REQUEST');
export const quantityDataSuccess = createAction<string>('QUANTITY_DATA_SUCCESS');
export const quantityDataFailure = createAction<string>('QUANTITY_DATA_FAILURE');

export const exportRequest = createAction<string>('EXPORT_REQUEST');
export const exportSuccess = createAction<string>('EXPORT_SUCCESS');
export const exportFailure = createAction<string>('EXPORT_FAILURE');