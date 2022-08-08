import './App.css';
import React , {useEffect} from 'react'

import Aos from 'aos'
import RootPage from "./route/index"


function App() {
  useEffect(() => { 
    Aos.init({
      duration: 2000,
    }, [])
    
  }, []);


  return (<RootPage/>);
}

export default App;

