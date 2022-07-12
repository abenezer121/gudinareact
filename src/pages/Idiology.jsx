import { React, useState, useEffect, useRef } from "react";



import idiologyBackground from "./../assets/idiologybackground.png";

import { useInView } from "react-intersection-observer";
import { Link } from 'react-router-dom';
import Footer from "../components/Footer";
import { useSelector, useDispatch } from 'react-redux'
import {idiology} from "./idiologydata/index"
const  titleText = (text) => {
    return (
        
        <p className=" ideologyText text-black text-3xl sm:text-6xl mx-10 font-bold my-3 mt-[60px]">{text.split(" ").map(word => {
          return <span>{`${word} `}</span>;
        })}</p>
    )
}

const Idiology = () => {
  const [text, setText] = useState("IDIOLOGIES");
  const { ref: first, inView: firstVisible } = useInView();
  const { ref: second, inView: secondVisible } = useInView();

  const [offsetX, setOffsetX] = useState(0);
 
  const [offsetY, setoffsetY] = useState(0);
  const [offsetXOther, setoffXOther] = useState(0);
  const [offsetYOther, setoffYOther] = useState(0);
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [value, setValue] = useState(false);

     const dispatch = useDispatch()
    useEffect(() => {
  
      if (secondVisible) {
         
          setText("TOPICS");
      }
      if (firstVisible) {
          setText("IDIOLOGIES");
      } 
          
      


    const handleWindowMouseMove = (event) => {
      const x = (window.innerWidth - event.screenX * 3) / 90;
      const y = (window.innerHeight - event.screenY * 3) / 90;
      setOffsetX(x);
      setoffsetY(y);

      setoffXOther((window.innerWidth - event.screenX * 1) / 90);
      setoffYOther((window.innerHeight - event.screenY * 1) / 90);
    };
    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  });




  return (
    <>
      {value == true ? (
        <div className="w-full h-full ">
     
        </div>
      ) : (
        <div className="w-full h-full">
            <div className='w-full h-[100%]' style={{
              backgroundImage: `url(${idiologyBackground})`,
               backgroundRepeat: "no-repeat",
            backgroundSize: "100%"
          }}>
                <div className='flex flex-col h-full items-center'>
                    <div className=' my-auto flex'>
                        <p className='text-9xl my-auto text-white'    style={{ fontFamily: "Odibee Sans", fontSize :'350px' }}>Idiology</p>
                        {/* <img src={gudinatumsa4}  style={{
                        
                        transform: `translateY(${offsetY}px) translateX(${offsetX}px)`,
                      }} /> */}
                    </div>
                </div>
            </div> 
         
                  
          <div
            ref={second}
            className="w-full flex flex-col items-center bg-[#6dafd1] pb-20 "
          >
            <div className="my-auto w-[80%] h-full mx-auto text-center relative bg-[#6dafd1] ">
              <div className=" text-center my-10   relative">
                <p
                  className="text-lg text-center uppercase text-xm text-white font-bold"
                  style={{
                    transform: `translateY(${offsetYOther}px) translateX(${offsetXOther}px)`,
                  }}
                >
                  select topics
                </p>
               
                </div>
                {
                  idiology.map((item, index) => {
                    
                    return (
                      <Link to="/description" state={{
                        data: JSON.stringify({
                          title: item.title,
                          backToText: "Back To Idiology",
                          backToLink : "/idiology", 
                          quote: item.quote,
                          paragrah: item.paragraph,
                          sideText: "OTHER TOPICS",
                          sideArray: [
                                  "Cost of Discipleship",
                                  "GT on Politics/Economics",
                                  "Holistic Theology"
                            ]
                        })
                        
                        
                    }}><div data-aos={item.fadeAnimation}>{titleText(item.title)}</div></Link>
                    
                    )
                  })
                }   
              
                                  
            
            </div>
            </div>
            <Footer/>
        </div>
      )}
    </>
  );
};




export default Idiology;
