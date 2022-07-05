import { React, useState  , useEffect , useRef} from 'react';

import TimeLine3 from '../components/timeline/TimeLine3';
import TimeLine2 from '../components/timeline/TimeLine2/TimeLine2';
import TimeLine1 from '../components/timeline/TimeLine1';
import Choice from '../components/Filter/Choice/Choice';
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import {
    PhoneIcon,
    ArrowSmRightIcon,
    ArrowDownIcon,
    AcademicCapIcon,
    PlusIcon
} from "@heroicons/react/outline"

import  {ChipIcon , SupportIcon} from "@heroicons/react/solid"
import Dash from '../components/Carousel/Dash';
import Carousel from '../components/Carousel/Carousel';
import nature from './../assets/nature.jpg';
import gudinatumsa1 from "./../assets/gudinatumsa1.JPG";
import { useInView } from 'react-intersection-observer';
import { Parallax } from 'react-scroll-parallax';


const Home = () => { 
  

    const [text , setText] = useState("INTRODUCTION")
    const { ref: first, inView: firstVisible } = useInView();
    const { ref: second, inView: secondVisible } = useInView();
    const { ref: third, inView: thirdVisible } = useInView();

   
    
    
    useEffect(() => { 
      

        if (firstVisible) { setText("INTRODUCTION") }
        else if (secondVisible) { setText("CHILDHOOD") }
        else if(thirdVisible) { setText("ABOUT") }} )

    const dot = (color) => {
        return (
           <div className={`w-[10px] h-[10px] rounded-full ${color} mt-3`}></div>
       )
    }
    const dash = (color) => { 
        return (
            <div className={`w-[30px] h-[4px]  -rotate-12  ${color} m-auto mt-4 mb-4`}></div>
        )
    }

    

    return (
        <div  className='w-full h-full ' >
            <div className='w-full h-full bg-purple-900/90 fixed'>
                {/* <img className = 'w-full h-full object-cover mix-blend-overlay' src = {nature} alt="/"/> */}
            </div>
              

            {/* the homepage */}
            <div  ref = {first} className='h-full w-full  flex flex-col text-white '>
                <p className='fixed top-1/2 -rotate-90 capitalize'>{text}</p>
                <div className='my-auto'>
                    <div className=' mx-auto my-10 w-[70%] h-[30%]  relative'>
                        <Parallax speed={-2}>
                            <h3 className="text-7xl font-bold py-6] text-center " style={{
                            fontFamily :  'Montserrat'
                        }}>Gudina Tumsa</h3>
                         </Parallax>
                        
                        <Parallax speed={-10}>
                            <h2 className='text-lg  text-slate-300  text-center'>Gudina Tumsa Legacy</h2> 
                        </Parallax>
                        
                    </div>   
                    <ArrowDownIcon className='w-7 h-7 text-white absolute bottom-0 mb-20 left-1/2 text-center animate-bounce ' />
                    <div className=' fixed right-0 top-1/2  flex flex-col mr-10'>
                        {text == "INTRODUCTION" ? dot("bg-orange-200") : dot("bg-white")}
                        {text == "CHILDHOOD" ? dot("bg-orange-200") : dot("bg-white")}
                        { text == "ABOUT" ? dot("bg-orange-200") : dot("bg-white") }
                       
                       
                        
                        
                    </div>
                </div>
            </div>
                        
                
                    <div ref={second} className='w-full h-full flex flex-col items-center'>
                <div className='my-auto w-[60%]'>
                    <div className=' mx-auto my-10   relative'>
                        <p className='text-lg text-center'>Gudina's ChildHood</p>
                        {dash("bg-white")}
                        <h3 className="text-3xl font-bold py-6] text-center " style={{
                            fontFamily :  'Montserrat'
                        }}>“A man of strong character, physically, mentally and
                        </h3>
                         <h3 className="text-3xl font-bold py-6] text-center " style={{
                            fontFamily :  'Montserrat'
                        }}>   spiritually.” - H.E Emmanuel Abraham</h3>
                        <h2 className='text-lg  text-slate-300  text-center mt-4'>Gudina Tumsa was born in 1929 in Bodji Wollega, Ethiopia. He was born to Mrs.Nassissie Chiracho and Mr. Tumsa Silga. Prior to Gudina Tumsa’s birth his mother had six children, sadly all of them died. Thus, when Gudina the “seventh child” was born she called him Gudina an Oromo word which means “growth”, because she wanted him to survive. It is ironic how Gudina’s name became his character,]
                            as H.E Emmanuel Abraham described him... <span className='text-center'>Read More</span></h2> 
                        
                    </div>  
                </div>
                

            </div>
                       
        

            {/*  */}
            <div ref = {third}>
                <div  name="third" className=' w-full  flex text-white relative m-auto '>
                                <div className='mx-auto my-10 w-[60%]   relative'>
                                    <div className='grid md:grid-cols-1 lg:grid-cols-2 w-full h-full'>
                                        <img src={gudinatumsa1} className='w-[90%] h-[600px] ' alt="nature"/>
                                        <div className='mx-20 mt-3'>
                                            <h1 className='text-4xl'>Duola Jeans</h1>
                                            <p className='mt-4'>Direction, Production & Editing</p>
                                            <p className='mt-4'>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you</p>
                                            <div className='flex items-center mt-6'>
                                                <PlusIcon className='w-3 h-3'/> <p className='ml-3'>Read More</p>
                                            </div>
                                            
                                        </div>
                                    
                                    </div>
                                </div>
                            </div>
                            <div  name="fourth" className=' w-full  flex text-white relative m-auto'>
                                <div className='mx-auto my-10 w-[60%]   relative'>
                                    <div className='grid md:grid-cols-1 lg:grid-cols-2 w-full h-full'>
                                        
                                        <div className='mx-20'>
                                            <h1 className='text-4xl'>Duola Jeans</h1>
                                            <p className='mt-4'>Direction, Production & Editing</p>
                                            <p className='mt-4'>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you</p>
                                            <div className='flex items-center mt-6'>
                                                <PlusIcon className='w-3 h-3'/> <p className='ml-3'>Read More</p>
                                            </div>
                                            
                                        </div>
                                        <img src={nature} className='w-full h-[100%] ' alt="nature"/>
                                    
                                    </div>
                                </div>
                            </div>
                 </div>
           </div>
         
    );
}
export default Home;

