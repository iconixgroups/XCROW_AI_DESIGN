import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getQuantityData } from '../redux/actions';

const QuantityDataComponent = () => {
  const dispatch = useDispatch();
  const quantityData = useSelector(state => state.quantityData);
  const projectCode = useSelector(state => state.projectDetails.code);

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
            {quantityData.data.map((item, index) => (
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