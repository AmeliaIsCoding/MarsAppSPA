import React from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = React.useState(
        parseInt(localStorage.getItem("count") ?? "0")
  );
  React.useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count])
  return (
    <div className="Counter">
        <p className="Counter-title">Counter 1</p>
        <button className="Counter-button" onClick={() => setCount(count+1)}>
          {count}
        </button>
    </div>
  );
}

export default Counter;
