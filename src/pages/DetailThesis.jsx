import { React, useState, useEffect, useRef } from "react";


import gudinatumsa1 from "../assets/gudinatumsa1.JPG";
import gudinatumsa4 from "../assets/gudinatumsa4.png";

import years from "../assets/year.json";
import {
  PhoneIcon,
  ArrowSmRightIcon,
  ArrowDownIcon,
  DownloadIcon
} from "@heroicons/react/outline";


import nature from "./../assets/nature.jpg";

import { useInView } from "react-intersection-observer";


const DetailThesis = () => {
  const [text, setText] = useState("INTRODUCTION");
  const { ref: first, inView: firstVisible } = useInView();
  const { ref: second, inView: secondVisible } = useInView();
  const { ref: third, inView: thirdVisible } = useInView();
  const { ref: fourth, inView: fourthVisible } = useInView();

  const child = { width: `300em`, height: `100%` };
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setoffsetY] = useState(0);
  const [offsetXOther, setoffXOther] = useState(0);
  const [offsetYOther, setoffYOther] = useState(0);
  const [yearsdata, setYoursData] = useState([]);

  const [value, setValue] = useState(false);
  console.log(years.years);

  useEffect(() => {
    if (fourthVisible) {
      setText("TimeLine");
      console.log(fourthVisible);
      console.log(text);
    }
    if (firstVisible) {
      setText("INTRODUCTION");
    } else if (secondVisible) {
      setText("CHILDHOOD");
    } else if (thirdVisible) {
      setText("EARLY LIFE");
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

  setTimeout(() => {
    setValue(false);
  }, 1000);

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

  const Cards = () => {
    return (
      <div className="flex mt-10">
                                        <img src={nature}  className="w-[40%] h-[15%]"/>
                                        <div className="mx-5">
                                            <h1 className="text-xl">A guide to SlideShare Analytics</h1>
                                            <p>SlideShare</p>
                                        </div>
                                    </div>
    );
  };

  return (
    <>
      {value == true ? (
        <div className="w-full h-full "></div>
      ) : (
          <>
             <div
            ref={first}
            className="h-screen w-full  flex flex-col text-white bg-[#321473]  "
            >
              
            
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
                      <h3
                        className="text-8xl font-bold italic text-center  "
                        style={{ fontFamily: "Odibee Sans" }}
                      >
                        Archive
                      </h3>
                     
                    </div>
                  </div>
                </div>
              </div>
              <ArrowDownIcon className="w-7 h-7 text-white absolute bottom-0 mb-20 left-1/2 text-center animate-bounce " />
              
            </div>
            </div>
            
   
          
          <div ref={second} className="w-full h-full flex flex-col mt-[100px] mb-[30px]  ">
            <div className=" w-[80%]  mx-auto mb-[40px]">
              <div className="grid md:grid-cols-1 lg:grid-cols-2 mx-10 ">
                <div className="relative w-[100%] h-[60%] bg-red-200 detailpagemainimage">
                    <img src={nature} className="h-full rounded-sm" alt="" />
                    <div className="w-[80px] h-[60px] downloadIcon">
                         <DownloadIcon className="absolute bottom-10 right-5 mt-10 bg-green-200 w-[80px] h-[60px]  "/>
                    </div>
                    <p className="text-3xl font-bold">Thesis name</p>  
                    <p className="text-2xl">Description</p>
                    <p className="text-xl">SlideShares that inform, inspire and educate attract the most views. Beyond that, ideas for what you can upload are limitless. We’ve selected a few popular examples to get your creative juices flowing.</p>
                                      
                </div>
                <div className="md:mx-20">
                
                  
                    <h1 className="text-3xl font-bold mt-[-15px] ">Recommended</h1>
                                      {Cards()}
                                      {Cards()}
                                      {Cards()}
                                      {Cards()}
                                      {Cards()}
                                      
                </div>
                </div>
                
                
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DetailThesis;
