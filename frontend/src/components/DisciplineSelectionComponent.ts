import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDiscipline } from '../redux/actions';

const DisciplineSelectionComponent: React.FC = () => {
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('');
  const disciplines = useSelector((state: RootState) => state.disciplines);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedDiscipline) {
      dispatch(setDiscipline(selectedDiscipline));
    }
  }, [selectedDiscipline, dispatch]);

  const handleDisciplineChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDiscipline(event.target.value);
  };

  return (
    <div id="disciplineSelection">
      <h2>Select Discipline</h2>
      <select value={selectedDiscipline} onChange={handleDisciplineChange}>
        <option value="">--Please choose an option--</option>
        {disciplines.map((discipline: string, index: number) => (
          <option key={index} value={discipline}>
            {discipline}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DisciplineSelectionComponent;