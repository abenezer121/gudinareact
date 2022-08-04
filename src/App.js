    import './App.css';
import Home from './pages/Home';
import React , { useEffect } from 'react';
import AnimatedCursor from "react-animated-cursor"
import NavBar from './components/NavBar/NavBar';
import Idiology from './pages/Idiology';
import Archive from './pages/Archive';
import DetailThesis from './pages/DetailThesis';
import { AnimatePresence , motion } from 'framer-motion';
import { BrowserRouter as Router, Route, Routes  ,Link , useLocation} from 'react-router-dom' 
import Gallery from './pages/Gallery';
import Papers from './pages/Papers';
import Aos from 'aos'
import RelationToOthers from './pages/RelationToOthers';
import Page2 from './pages/Page2';
import RelationDescription from './pages/RelationDescription';
//fdg
import Description from './pages/Description';
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




function App() {
  useEffect(() => { 
    Aos.init({
      duration: 2000,
    }, [])
    
  }, []);

const location = useLocation()
  return (
    
    
    <AnimatePresence >
      
      <AnimatedCursor
       
            color="0,0,0"
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
        
        <Route path="/detailthesis" element={<DetailThesis />} />

       
        

        
        <Route path="/" element={

           <div className='w-full h-screen' >
                <Home  />
            </div>
            } />
        
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
        

        <Route path="/relationtoothers" element={
            <motion.div
                  initial="out"
                  animate="in"
                  exit="out"
              variants={pageVariant}
               className='w-full h-screen'
              transition={pageTransition}>
              <RelationToOthers />
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
            <Gallery />
             
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
        
         
        

        <Route path="/relationdescription" element={
            <motion.div
                  initial="out"
                  animate="in"
                  exit="out"
              variants={pageVariant}
               className='w-full h-full'
              transition={pageTransition}>
               <RelationDescription />
              </motion.div>
            
          } />
<Route path="/description" element={
            <motion.div
                  initial="out"
                  animate="in"
                  exit="out"
              variants={pageVariant}
               className='w-full h-full'
              transition={pageTransition}>
               <Description />
              </motion.div>
            
          } />
         

        
          
                </Routes>   
     
        

      </AnimatePresence>
      
     

     
      




  );
}

export default App;

