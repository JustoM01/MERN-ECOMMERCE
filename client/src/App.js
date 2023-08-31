import Home from './components/Home';
import './App.css';
import Mernpng from './img/Mernpng.jpg'; // Adjust the path as needed

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign:'center'}}>My Todo App</h1>
      <img className='mern' src= {Mernpng} alt='mern'></img>
     <Home/>
    </div>
  );
}

export default App;
