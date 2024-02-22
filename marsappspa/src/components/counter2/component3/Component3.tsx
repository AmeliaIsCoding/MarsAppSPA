import './Component3.css';
import Component4 from './component4/Component4';

function Component3() {
  return (
  <div className="Component3">
    <Component4></Component4>
    <p className="Component3-message">This is counter 2's message.</p>
  </div>
  );
}

export default Component3;
