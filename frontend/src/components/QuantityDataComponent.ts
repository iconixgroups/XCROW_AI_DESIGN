import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getQuantityData } from '../redux/actions';

const QuantityDataComponent: React.FC = () => {
  const dispatch = useDispatch();
  const quantityData = useSelector((state: RootState) => state.quantityData);
  const projectCode = useSelector((state: RootState) => state.projectDetails.code);

  useEffect(() => {
    dispatch(getQuantityData(projectCode));
  }, [dispatch, projectCode]);

  return (
    <div id="quantityData">
      <h2>Quantity Data</h2>
      {quantityData.loading ? (
        <p>Loading...</p>
      ) : quantityData.error ? (
        <p>{quantityData.error}</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {quantityData.data.map((item: QuantityItem, index: number) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default QuantityDataComponent;