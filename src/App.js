import logo from './logo.svg';
import './App.css';
import TimeLine2 from './components/timeline/TimeLine2';
import TimeLine1 from './components/timeline/TimeLine1';
import TimeLine3 from './components/timeline/TimeLine3';
import NavBar from './components/NavBar';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <TimeLine1 />
      <TimeLine2 />
      <TimeLine3/>
    </div>
   

  );
}

export default App;
