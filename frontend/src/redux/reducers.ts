import { combineReducers, Reducer } from 'redux';

interface ProjectState {
  [key: string]: any;
  error?: any;
}

interface DisciplineState {
  [key: string]: any;
  error?: any;
}

interface QuantityState {
  [key: string]: any;
  error?: any;
}

interface UploadState {
  [key: string]: any;
  error?: any;
}

interface ExportState {
  [key: string]: any;
  error?: any;
}

interface RootState {
  project: ProjectState;
  discipline: DisciplineState;
  quantity: QuantityState;
  upload: UploadState;
  export: ExportState;
}

const initialState: RootState = {
  project: {},
  discipline: {},
  quantity: {},
  upload: {},
  export: {},
};

const projectReducer: Reducer<ProjectState> = (state = initialState.project, action) => {
  switch (action.type) {
    case 'PROJECT_DETAILS_SUCCESS':
      return { ...state, ...action.payload };
    case 'PROJECT_DETAILS_FAILURE':
      return { ...state, error: action.error };
    default:
      return state;
  }
};

const disciplineReducer: Reducer<DisciplineState> = (state = initialState.discipline, action) => {
  switch (action.type) {
    case 'DISCIPLINE_SELECTION_SUCCESS':
      return { ...state, ...action.payload };
    case 'DISCIPLINE_SELECTION_FAILURE':
      return { ...state, error: action.error };
    default:
      return state;
  }
};

const quantityReducer: Reducer<QuantityState> = (state = initialState.quantity, action) => {
  switch (action.type) {
    case 'QUANTITY_DATA_SUCCESS':
      return { ...state, ...action.payload };
    case 'QUANTITY_DATA_FAILURE':
      return { ...state, error: action.error };
    default:
      return state;
  }
};

const uploadReducer: Reducer<UploadState> = (state = initialState.upload, action) => {
  switch (action.type) {
    case 'UPLOAD_SUCCESS':
      return { ...state, ...action.payload };
    case 'UPLOAD_FAILURE':
      return { ...state, error: action.error };
    default:
      return state;
  }
};

const exportReducer: Reducer<ExportState> = (state = initialState.export, action) => {
  switch (action.type) {
    case 'EXPORT_SUCCESS':
      return { ...state, ...action.payload };
    case 'EXPORT_FAILURE':
      return { ...state, error: action.error };
    default:
      return state;
  }
};

const rootReducer = combineReducers<RootState>({
  project: projectReducer,
  discipline: disciplineReducer,
  quantity: quantityReducer,
  upload: uploadReducer,
  export: exportReducer,
});

export default rootReducer;