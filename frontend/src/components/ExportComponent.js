import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { exportData } from '../redux/actions';

const ExportComponent = () => {
  const dispatch = useDispatch();
  const { projectCode, projectName } = useSelector(state => state.projectDetails);
  const [exportFormat, setExportFormat] = useState('Excel');

  const handleExport = () => {
    dispatch(exportData(projectCode, projectName, exportFormat));
  };

  return (
    <div id="exportData">
      <h2>Export Quantity Data</h2>
      <div>
        <label>Export Format:</label>
        <select value={exportFormat} onChange={e => setExportFormat(e.target.value)}>
          <option value="Excel">Excel</option>
          <option value="CSV">CSV</option>
        </select>
      </div>
      <button onClick={handleExport}>Export</button>
    </div>
  );
};

export default ExportComponent;