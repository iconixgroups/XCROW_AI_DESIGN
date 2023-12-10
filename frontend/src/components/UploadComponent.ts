import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { uploadFile } from '../redux/actions';

const UploadComponent: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [projectCode, setProjectCode] = useState<string>('');
  const [projectName, setProjectName] = useState<string>('');
  const dispatch = useDispatch();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(event.target.files?.[0] || null);
  };

  const handleProjectCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProjectCode(event.target.value);
  };

  const handleProjectNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProjectName(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    if (selectedFile) {
      formData.append('file', selectedFile);
    }
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