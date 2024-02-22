import React from 'react';
import './Counter2.css';
import Component2 from './component2/Component2';
import Component3 from './component3/Component3';

export const CountContext = React.createContext({count: 0, setCount: (count: number)=>{}});

function Counter2() {
  const [count, setCount] = React.useState(
        parseInt(localStorage.getItem("count2") ?? "0")
  );
  React.useEffect(() => {
    localStorage.setItem("count2", JSON.stringify(count));
  }, [count])
  return (
    <CountContext.Provider value={{count, setCount}}>
    <div className="Counter2">
      <p className="Counter2-title">Counter 2</p>
      <div className="Counter2-component1">
        <Component2 />
        <Component3 />
      </div>
    </div>
    </CountContext.Provider>
  );
}

export default Counter2;
