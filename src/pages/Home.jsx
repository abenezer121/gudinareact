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
                        <h3 className="text-7xl font-bold py-6] text-center " style={{
                            fontFamily :  'Montserrat'
                        }}>Gudina Tumsa</h3>
                        <h2 className='text-lg  text-slate-300  text-center'>Gudina Tumsa Legacy</h2> 
                    </div>   
                    <ArrowDownIcon className='w-7 h-7 text-white absolute bottom-0 mb-20 left-1/2 text-center animate-bounce ' />
                    <div className=' fixed right-0 top-1/2  flex flex-col mr-10'>
                        {dot("bg-orange-200")}
                        {dot("bg-white")}
                        {dot("bg-white")}
                        {dot("bg-white")}
                        {dot("bg-white")}
                        
                        
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
                        <h2 className='text-lg  text-slate-300  text-center mt-4'>Gudina Tumsa was born in 1929 in Bodji Wollega, Ethiopia. He was born to Mrs.Nassissie Chiracho and Mr. Tumsa Silga. Prior to Gudina Tumsa’s birth his mother had six children, sadly all of them died. Thus, when Gudina the “seventh child” was born she called him Gudina an Oromo word which means “growth”, because she wanted him to survive. It is ironic how Gudina’s name became his character, as H.E Emmanuel Abraham described</h2> 
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

// /*
//   <div className='w-full h-[calc(100%-70px)]'>
//             <div className='grid md:grid-cols-1 lg:grid-cols-2 h-full'>
//                 <div className='flex flex-col  h-full '>
//                     <div className=' m-auto w-[50%]  '>
//                             <h1 className='text-3xl font-bold mt-10 mb-10'> ETHIOPIA: A NEW HORIZON OF HOPE</h1>
//                             <p>The wisdom taught us by our Ethiopianess is not to be overcome by temporary obstacles but rather to change the trials we face into opportunities and desirable accidents and achieve victory.</p>
//                             <p className='mb-10'>-  H.E. Abiy Ahmed</p>
                      
//                     </div>
//                 </div>
//                 <div className='relative h-full bg-slate-400'>
//                     <Carousel/>
                  
//                 </div>
//             </div>

            
//             {/* about section */}
          
           
//             <div className='py-20 '>
//                 <div className='m-auto w-[20%] border-b-2 border-indigo-200 text-center '>
//                     <h1 className='mt-10'>About Brillian</h1>
//                     <p className=''>Meet me and my little history</p>
//                  </div>
//                 <div className='grid md:grid-cols-1 lg:grid-cols-3 h-full flex text-left'>
//                         <div className='mx-5'>
//                             <p className='mt-2'>Photographers tend not to photograph what they can’t see, which is the very reason one should try to attempt it. Otherwise we’re going to go on forever just photographing more faces and more rooms and more places. Photography has to transcend description. It has to go beyond description to bring insight into the subject, or reveal the subject, not as it looks, but how does it feel. The camera would miss it all. There are no bad pictures; that's just how your face looks sometimes. A picture is a secret about a secrets, the more it tells you the less you know, and feel.</p>
//                             <p className='mt-2'>He was right. John Loengard, the picture editor at Life, always used to tell me, ”If you want something to look interesting, don’t light all of it.Taking pictures is savoring life intensely, every hundredth of a second. For me, the camera is a sketch book, an instrument of the best intuitions.</p>
//                         </div>
//                         <div className='mx-5'>
//                             <p className='mt-2'>Photography is a magical kind of art that allows people to preserve time and moments, and to describe the world the way they see it and loves.</p>
//                             <p className='mt-2'>For me, the subject of the picture is always more important than the picture. A photograph is a click away. A good photographer is a hundred clicks away and a better one, a thousand clicks away for photography love photos and we make.</p>
//                             <p className='mt-2'>I am a professional photographer by trade and an amateur photographer by vocation. If only I had thought of a Kodak! I could have flashed that glimpse of the Under-world in a second, and examined for more best and nice photographers.</p>
//                             <p className='mt-2'>Women that can work a camera with ease often work men just as effortlessly for both require the same commitment to vanity and manipulations.</p>
//                         </div>
//                         <div  className='mx-5'>
//                             <img src={nature} className=''/>
//                     </div>
//                 </div>
//             </div>
//              {/* <TimeLine1 /> */}
//       {/* <TimeLine2 /> */}
//              <TimeLine3/> 
            
//             {/* the filter goes here */}
//             <div className='flex w-full mb-20 '>
//                 <div className='w-[20%] sm:w-[15%]  '>
                    

//                     <div className='mx-2 h-[200px]  w-[100%] mx-2'>
//                         <div className='h-[70px] z-10 bg-slate-100 flex items-center sticky top-0 z-50   '>
//                             <p className='mx-2'>Filter</p>
//                         </div>
//                         <div className=' h-[200px] overflow-auto'>
//                                 <p className=' mt-5'>Refine by</p>
//                                 <p className='mb-3'>Categories</p>
//                                 <Choice name='Category 1'/>
//                                 <Choice name='Category 2' />
//                                 <Choice name='Category 3' />
//                                 <Choice name='Category 4' />
//                                 <Choice name='Category 5' />
//                                 <Choice name='Category 6' />
//                                 <Choice name='Category 7' />
//                                 <Choice name='Category 1'/>
//                                 <Choice name='Category 2' />
//                                 <Choice name='Category 3' />
//                                 <Choice name='Category 4' />
//                                 <Choice name='Category 5' />
//                                 <Choice name='Category 6' />
//                                 <Choice name='Category 7' />
//                         </div>
//                     </div>
//                 </div>
//                 <div className='w-[70%] ml-20'>
//                     <div className=" bg-gray-400 rounded-lg shadow-xl  px-6 py-4 w-full">
//                         <h3 className="mb-3 font-bold text-gray-800 text-xl">Lorem Ipsum</h3>
//                         <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
//                     </div>
//                 </div>
//             </div>
//             <div className='mt-10'>
//                 <p>asdfg</p>
//             </div>
//         </div >
//             */