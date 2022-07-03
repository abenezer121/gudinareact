import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import TimeLine2 from './components/timeline/TimeLine2';
import TimeLine1 from './components/timeline/TimeLine1';
import TimeLine3 from './components/timeline/TimeLine3';
import NavBar from './components/NavBar';
function App() {
  return (
    <div className="w-full h-screen">
      <NavBar />
      <Home/>
    
    </div>
   

  );
}

export default App;
