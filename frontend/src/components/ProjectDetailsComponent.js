import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProjectDetails } from '../redux/actions';

const ProjectDetailsComponent = () => {
  const dispatch = useDispatch();
  const projectDetails = useSelector(state => state.projectDetails);
  const [projectCode, setProjectCode] = useState('');
  const [projectName, setProjectName] = useState('');

  useEffect(() => {
    if (projectDetails) {
      setProjectCode(projectDetails.code);
      setProjectName(projectDetails.name);
    }
  }, [projectDetails]);

  const handleProjectCodeChange = (event) => {
    setProjectCode(event.target.value);
  };

  const handleProjectNameChange = (event) => {
    setProjectName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setProjectDetails({ code: projectCode, name: projectName }));
  };

  return (
    <div id="projectDetails">
      <form onSubmit={handleSubmit}>
        <label>
          Project Code:
          <input type="text" value={projectCode} onChange={handleProjectCodeChange} />
        </label>
        <label>
          Project Name:
          <input type="text" value={projectName} onChange={handleProjectNameChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ProjectDetailsComponent;