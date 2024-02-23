import './Counter.css';
import Counter from '../../components/counter/Counter';
import Counter2 from '../../components/counter2/Counter2';
import { Link } from 'react-router-dom';

function Counters() {
  return (
    <div className="Counters">
      <div className="Counters-row">
        <Counter />
        <Counter2/>
      </div>
      <Link className="Counters-homeLink" to="/">Home</Link>
    </div>
  );
}

export default Counters;
