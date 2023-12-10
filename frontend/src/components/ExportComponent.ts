import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { exportData } from '../redux/actions';

const ExportComponent: React.FC = () => {
  const dispatch = useDispatch();
  const { projectCode, projectName } = useSelector((state: RootState) => state.projectDetails);
  const [exportFormat, setExportFormat] = useState<string>('Excel');

  const handleExport = () => {
    dispatch(exportData(projectCode, projectName, exportFormat));
  };

  return (
    <div id="exportData">
      <h2>Export Quantity Data</h2>
      <div>
        <label>Export Format:</label>
        <select value={exportFormat} onChange={(e) => setExportFormat(e.target.value)}>
          <option value="Excel">Excel</option>
          <option value="CSV">CSV</option>
        </select>
      </div>
      <button onClick={handleExport}>Export</button>
    </div>
  );
};

export default ExportComponent;