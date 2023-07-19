import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { uploadFile } from '../redux/actions';

const UploadComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [projectCode, setProjectCode] = useState('');
  const [projectName, setProjectName] = useState('');
  const dispatch = useDispatch();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleProjectCodeChange = (event) => {
    setProjectCode(event.target.value);
  };

  const handleProjectNameChange = (event) => {
    setProjectName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('projectCode', projectCode);
    formData.append('projectName', projectName);
    dispatch(uploadFile(formData));
  };

  return (
    <div id="uploadFile">
      <form onSubmit={handleSubmit}>
        <label>Project Code:</label>
        <input type="text" value={projectCode} onChange={handleProjectCodeChange} required />
        <label>Project Name:</label>
        <input type="text" value={projectName} onChange={handleProjectNameChange} required />
        <label>Upload File:</label>
        <input type="file" accept=".pdf,.dwg,.dwf,.bim,.revit" onChange={handleFileChange} required />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadComponent;