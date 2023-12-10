import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProjectDetails } from '../redux/actions';

interface ProjectDetails {
  code: string;
  name: string;
}

const ProjectDetailsComponent: React.FC = () => {
  const dispatch = useDispatch();
  const projectDetails = useSelector((state: any) => state.projectDetails);
  const [projectCode, setProjectCode] = useState<string>('');
  const [projectName, setProjectName] = useState<string>('');

  useEffect(() => {
    if (projectDetails) {
      setProjectCode(projectDetails.code);
      setProjectName(projectDetails.name);
    }
  }, [projectDetails]);

  const handleProjectCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProjectCode(event.target.value);
  };

  const handleProjectNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProjectName(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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