import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import React , {} from 'react';
import AnimatedCursor from "react-animated-cursor"
import NavBar from './components/NavBar';
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {

 
  return (
    <div className="w-full h-screen">
    <AnimatedCursor
  color="255,255,255"
  innerSize={8}
  outerSize={35}
  innerScale={1}
  outerScale={1.7}
  outerAlpha={0}
  outerStyle={{
    border: '3px solid #fff'
  }}
      />
      <ParallaxProvider>
            <NavBar/>
           <Home/>
      </ParallaxProvider>
        

    </div>
  



  );
}

export default App;
