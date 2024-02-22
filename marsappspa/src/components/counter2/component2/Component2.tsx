import React from 'react';
import './Component2.css';
import { CountContext } from '../Counter2';

function Component2() {
  const {count, setCount} = React.useContext(CountContext);
  return (
  <div className="Component2">
      <button className="Component2-button" onClick={() => setCount(count+1)}>
        Click me
      </button>
  </div>
  )
};


export default Component2;
