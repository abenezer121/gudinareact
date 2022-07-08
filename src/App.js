    import './App.css';
import Home from './pages/Home';
import React , {} from 'react';
import AnimatedCursor from "react-animated-cursor"
import NavBar from './components/NavBar';
import Idiology from './pages/Idiology';
import LinkTutorial from './pages/LinkTutorial'
import Archive from './pages/Archive';
import DropDownComp from './components/DropDown';
import { Menu, Dropdown } from 'antd';
import DetailThesis from './pages/DetailThesis';
import { AnimatePresence , motion } from 'framer-motion';
import { BrowserRouter as Router, Route, Routes  ,Link , useLocation} from 'react-router-dom' 
import Gallary from './pages/Gallary';
import Papers from './pages/Papers';
import Footer from './components/Footer';
import IdiologyDescription from './pages/IdiologyDescription.';
const pageVariant = {
  in: {
    opacity: 1,
    x : 0
  },
  out: {
    opacity: 0,
    x : "100%"
  }
}

const pageTransition = {
  duration: 0.5,
}

const Page1 = () => {
  return (
    
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariant}
      transition={pageTransition}
    >
       <div className='w-full h-full bg-red-200' style={{
          height: '100vh',
        width: '100vw',
          overflow : 'hidden'
        }}>

          <p>This is page 1</p>
          <Link to='/page2'>Go to page 2</Link>
      
    </div>
    </motion.div>
   
   
    );
}


const Page2 = () => {
  return (
    <div className='wrapper'>
      <div className='item'></div>
      <div className='item'></div>
      <div className='item'></div>
      <div className='item'></div>
      <div className='item'></div>
      
    </div>
   
   
    );
}


function App() {

const location = useLocation()
  return (
    
    
    <AnimatePresence >
      
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
         <NavBar/> 
      
        
        <Routes location={location} keys={location.pathname} >
            <Route path="/page2" element={<Page2 />} />
          <Route path="/" element={
            <motion.div
              className='w-full h-screen'
                  initial="out"
                  animate="in"
                  exit="out"
                  variants={pageVariant}
              transition={pageTransition}>
              <Home /> </motion.div>} />
          <Route path="/archive" element={
            
            <motion.div
                  initial="out"
                  animate="in"
                  exit="out"
              variants={pageVariant}
               className='w-full h-full'
              transition={pageTransition}>
               <Archive />
              </motion.div>
           } />
          <Route path="/idiology" element={
            <motion.div
                  initial="out"
                  animate="in"
                  exit="out"
              variants={pageVariant}
               className='w-full h-screen'
              transition={pageTransition}>
              <Idiology />
              </motion.div>
            
          } />
          <Route path="/gallery" element={
            <motion.div
                  initial="out"
                  animate="in"
                  exit="out"
              variants={pageVariant}
               className='w-full h-screen'
              transition={pageTransition}>
              <Gallary />
              </motion.div>
            
          } />

          <Route path="/papers" element={
            <motion.div
                  initial="out"
                  animate="in"
                  exit="out"
              variants={pageVariant}
               className='w-full h-full'
              transition={pageTransition}>
              <Papers />
              </motion.div>
            
          } />
<Route path="/idiologydescription" element={
            <motion.div
                  initial="out"
                  animate="in"
                  exit="out"
              variants={pageVariant}
               className='w-full h-full'
              transition={pageTransition}>
               <IdiologyDescription />
              </motion.div>
            
          } />
         

        
          
                </Routes>   
     
          

      </AnimatePresence>
      
     

     
      




  );
}

export default App;

