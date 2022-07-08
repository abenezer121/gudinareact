import { React, useState, useEffect, useRef } from "react";

import TimeLine3 from "../components/timeline/TimeLine3";
import TimeLine2 from "../components/timeline/TimeLine2/TimeLine2";
import TimeLine1 from "../components/timeline/TimeLine1";
import Choice from "../components/Filter/Choice/Choice";
import ministry from "../assets/ministry.jpg";
import funeral from "../assets/funeral.JPG";
import gudinatumsa1 from "../assets/gudinatumsa1.JPG";
import gudinatumsa4 from "../assets/gudinatumsa4.png";
import HorizontalScroll from "react-scroll-horizontal";
import {
  PhoneIcon,
  ArrowSmRightIcon,
  ArrowDownIcon,
  AcademicCapIcon,
  PlusIcon,
} from "@heroicons/react/outline";

import { ChipIcon, SupportIcon } from "@heroicons/react/solid";
import Dash from "../components/Carousel/Dash";
import Carousel from "../components/Carousel/Carousel";
import nature from "./../assets/nature.jpg";
import idiologyBackground from "./../assets/idiologybackground.png";
import gudinatumsa3 from "./../assets/gudinatumsa1.png";
import { useInView } from "react-intersection-observer";
import logo from "./../assets/logo.png";
import { Link } from 'react-router-dom';
import YouTube from "react-youtube";
import getYouTubeID from "get-youtube-id";
import Footer from "../components/Footer";
import Aos from 'aos'


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
  useEffect(() => { 
    Aos.init({
      duration: 2000,
    } , [])
  })
    
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



  const dot = (color) => {
    return (
      <div className={`w-[10px] h-[10px] rounded-full ${color} mt-3`}></div>
    );
  };
  const dash = (color) => {
    return (
      <div
        className={`w-[30px] h-[4px]  -rotate-12  ${color} m-auto mt-4 mb-4`}
      ></div>
    );
  };

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
          {/* <div ref={first} className="h-full w-full  flex flex-col text-white bg-[#326473]">
            <p className="fixed top-1/2 -rotate-90 capitalize">{text}</p>
            <div className="my-auto">
              <div className=" mx-auto my-10 w-[70%] h-[30%]  relative">
                <div class="absolute bg-opacity-60 z-10 h-full w-full flex items-center justify-center">
                  <div class="flex items-center">
                    <img
                      src={gudinatumsa4}
                      className="absolute right-0  mb-15 "
                      style={{
                        transform: `translateY(${offsetY}px) translateX(${offsetX}px)`,
                      }}
                    />
                    <div className="flex flex-col mr-20  mix-blend-screen">
                      <h2
                        className="text-6xl  text-slate-300 cursive  text-center mt-[-25px] ml-[200px] "
                        style={{ fontFamily: "Oooh Baby" }}
                      >
                        {" "}
                        His
                      </h2>
                      <h3
                        className="text-8xl font-bold italic text-center  "
                        style={{ fontFamily: "Odibee Sans" }}
                      >
                        Theology & Idiology
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <ArrowDownIcon className="w-7 h-7 text-white absolute bottom-0 mb-20 left-1/2 text-center animate-bounce " />
              <div className=" fixed right-0 top-1/2  flex flex-col mr-10">
               
                {text == "IDIOLOGIES" ? dot("bg-orange-200") : dot("bg-white")}
                {text == "TOPICS" ? dot("bg-orange-200") : dot("bg-white")}
                          
                                  
                                   

              </div>
            </div>
          </div> */}
                  
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
                {dash("bg-white")}
                </div>
                              {/* <div className="idiologyScroll flex flex-col items-center text-center h-[80%] overflow-auto   relative text-white shadow-2xl shadow-inner"> */}
                                  <Link to="/idiologydescription"    state={{title:'Responsibility of a Christian to society  '}}><div data-aos="fade-up">{titleText("Responsibility of a Christian to society")}</div></Link>
                                  <Link to="/idiologydescription"    state={{title:'Ecumenical Harmony  '}}> <div data-aos="fade-left">{titleText("Ecumenical Harmony")}</div></Link>
                                  <Link to="/idiologydescription"   state={{title:'Ecumenical Harmony '}}><div data-aos="fade-right">{titleText("Ecumenical Harmony")}</div></Link>
                                  <Link to="/idiologydescription"    state={{title:'African Theology/ Contextualization  '}}><div data-aos="fade-up">{titleText("African Theology/ Contextualization")}</div></Link>
                                  <Link to="/idiologydescription"    state={{title:'Holistic Theology  '}}><div data-aos="fade-up">{titleText("Holistic Theology")}</div></Link>

                                  <Link to="/idiologydescription"    state={{title:'GT on Politics/Economics '}}><div data-aos="fade-left">{titleText("GT on Politics/Economics")}</div></Link>
                                  <Link to="/idiologydescription"    state={{title:'Cost of Discipleship '}}><div data-aos="fade-right">{titleText("Cost of Discipleship")}</div></Link>

                                  <Link to="/idiologydescription"   state={{title:'Spiritual and Technological Human Development  '}}><div data-aos="fade-up">{titleText("Spiritual and Technological Human Development")}</div></Link>
                                  <Link to="/idiologydescription"    state={{title:'Resources Amongst the Universal Church  '}}><div data-aos="fade-left">{titleText("Resources Amongst the Universal Church")}</div></Link>

                                  <Link to="/idiologydescription"   state={{title:'Nation Building Chrisian Stewardship  '}}><div data-aos="fade-right">{titleText("Nation Building Chrisian Stewardship")}</div></Link>
                                  <Link to="/idiologydescription"    state={{title:'Missions and Outreach  '}}><div data-aos="fade-up">{titleText("Missions and Outreach")}</div></Link>
                                  <Link to="/idiologydescription"   state={{title:'Chrisian Stewardship  '}}><div data-aos="fade-left">{titleText("Chrisian Stewardship")}</div></Link>
                                  <Link to="/idiologydescription"    state={{title:'Nation Building '}}><div data-aos="fade-right">{titleText("Nation Building")}</div></Link>
                             
                                  
                                  
                                  
                {/* </div> */}
            </div>
            </div>
            <Footer/>
        </div>
      )}
    </>
  );
};




export default Idiology;
