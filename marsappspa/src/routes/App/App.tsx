import nasaLogo from '../../assets/NASA_logo.svg.png'
import './App.css';
import Info from '../../components/info/Info';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Info title='NASA' para1='For more than 50 years, NASA has been breaking barriers to achieve the seemingly impossible. At its 20 centers and facilities across the country – and the only National Laboratory in space – NASA studies Earth, including its climate, our Sun, and our solar system and beyond. We conduct research, testing, and development to advance aeronautics, including electric propulsion and supersonic flight. We develop and fund space technologies that will enable future exploration and benefit life on Earth.' para2="NASA's future will continue to be a story of human exploration, technology, and science. We will go back to the Moon to learn more about what it will take to support human exploration to Mars and beyond. We will continue to nurture the development of a vibrant low-Earth orbit economy that builds on the work done to date by the International Space Station. NASA engineers will develop new technologies to improve air transport at home and meet the challenges of advanced space exploration. Our scientists will work to increase an understanding of our planet and our place in the universe. We will continue to try to answer the question, 'are we alone'?" imgSrc={nasaLogo}></Info>
        <Link className="App-formLink" to="/form">Click to make query</Link>
      </header>
    </div>
  );
}

export default App;
