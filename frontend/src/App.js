import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from './redux/store';
import UploadComponent from './components/UploadComponent';
import ProjectDetailsComponent from './components/ProjectDetailsComponent';
import DisciplineSelectionComponent from './components/DisciplineSelectionComponent';
import QuantityDataComponent from './components/QuantityDataComponent';
import ExportComponent from './components/ExportComponent';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/upload" component={UploadComponent} />
          <Route path="/project-details" component={ProjectDetailsComponent} />
          <Route path="/discipline-selection" component={DisciplineSelectionComponent} />
          <Route path="/quantity-data" component={QuantityDataComponent} />
          <Route path="/export" component={ExportComponent} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;