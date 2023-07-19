import { combineReducers } from 'redux';

const initialState = {
  project: {},
  discipline: {},
  quantity: {},
  upload: {},
  export: {},
};

function projectReducer(state = initialState.project, action) {
  switch (action.type) {
    case 'PROJECT_DETAILS_SUCCESS':
      return { ...state, ...action.payload };
    case 'PROJECT_DETAILS_FAILURE':
      return { ...state, error: action.error };
    default:
      return state;
  }
}

function disciplineReducer(state = initialState.discipline, action) {
  switch (action.type) {
    case 'DISCIPLINE_SELECTION_SUCCESS':
      return { ...state, ...action.payload };
    case 'DISCIPLINE_SELECTION_FAILURE':
      return { ...state, error: action.error };
    default:
      return state;
  }
}

function quantityReducer(state = initialState.quantity, action) {
  switch (action.type) {
    case 'QUANTITY_DATA_SUCCESS':
      return { ...state, ...action.payload };
    case 'QUANTITY_DATA_FAILURE':
      return { ...state, error: action.error };
    default:
      return state;
  }
}

function uploadReducer(state = initialState.upload, action) {
  switch (action.type) {
    case 'UPLOAD_SUCCESS':
      return { ...state, ...action.payload };
    case 'UPLOAD_FAILURE':
      return { ...state, error: action.error };
    default:
      return state;
  }
}

function exportReducer(state = initialState.export, action) {
  switch (action.type) {
    case 'EXPORT_SUCCESS':
      return { ...state, ...action.payload };
    case 'EXPORT_FAILURE':
      return { ...state, error: action.error };
    default:
      return state;
  }
}

export default combineReducers({
  project: projectReducer,
  discipline: disciplineReducer,
  quantity: quantityReducer,
  upload: uploadReducer,
  export: exportReducer,
});