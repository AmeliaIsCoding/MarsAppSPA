import React from 'react';
import './Component4.css';
import { CountContext } from '../../Counter2';

function Component4() {
  const {count} = React.useContext(CountContext);
  return (
  <div className="Component4">
    <p className="Component4-value">Value: {count}</p>
  </div>
  );
}

export default Component4;
