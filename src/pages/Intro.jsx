import React , {useState , useEffect} from 'react'
import { useSelector , useDispatch} from 'react-redux'
import loadgif from "./../assets/load.gif";
import { AnimatePresence, motion } from 'framer-motion';
import {home} from "./../redux/actions/navigation.js"
const Intro = () => { 
    
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
  
   
    const dispatch = useDispatch()
    var timer = setTimeout(
      function () {   
              localStorage.setItem('nav', JSON.stringify({ "location" : "HOME"}));
             dispatch(home())
             clearTimeout(timer)},3000);
    return (
        <motion.div
            className='w-full h-screen'
                  initial="out"
                  animate="in"
                  exit="out"
                  variants={pageVariant}
            transition={pageTransition}>
            <div className="w-full h-screen bg-black">    
                    <div class="grid place-items-center h-screen text-white">
                            <img src={loadgif} className="w-[25%] h-[35%]" alt="loading" />
                    </div>
                </div>
              </motion.div>
        
    )
}

export default Intro;