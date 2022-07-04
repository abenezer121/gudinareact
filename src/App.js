import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';

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
