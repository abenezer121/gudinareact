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
import book1 from "../assets/book1.jpg";
import book2 from "../assets/book2.jpg";
import book3 from "../assets/book3.jpg";
import book4 from "../assets/book4.jpg";
import book5 from "../assets/book5.jpg";
import Footer from "../components/Footer";
import years from "./../assets/year.json";
import {
  PhoneIcon,
  ArrowSmRightIcon,
  ArrowDownIcon,
  AcademicCapIcon,
  PlusIcon,
  SearchIcon,
  AdjustmentsIcon,
} from "@heroicons/react/outline";

import { ChipIcon, SupportIcon } from "@heroicons/react/solid";
import Dash from "../components/Carousel/Dash";
import Carousel from "../components/Carousel/Carousel";
import nature from "./../assets/nature.jpg";
import gudinatumsa3 from "./../assets/gudinatumsa1.png";
import { useInView } from "react-intersection-observer";
import logo from "./../assets/logo.png";
import DropDown from "../components/DropDown";
import { Link } from 'react-router-dom';

const Papers = () => {
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

  const ArchiveCard = (image , title) => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg w-[90%] mt-5">
  <img className="w-full" src={image} alt="Sunset in the mountains"/>
  <div className="px-6 py-1">
          <div className="font-bold text-xl mb-1">{ title}</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum
    </p>
  </div>
        <div className="flex  justify-between px-6  pb-2">
          <Link to ="/detailthesis"> <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Preview</span></Link>
   
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Download</span>

  </div>
</div>
   
    );
  };
{/* 
     // <div className="item-wrapper ">
      //   <div className="img-wrapper">
      //     <img src={nature} className="w-[300px] h-[300px]" alt="nature" />
      //   </div>
      //   <p className="hovertext text-red-400">text</p>
      //   <div className="handle flex justify-between mx-10">
      //     <h1 className="ml-10">Preview</h1>
      //     <h1 className="mr-10">Download</h1>
      //   </div>
      // </div> */}
  return (
    <>
      {value == true ? (
        <div className="w-full h-full "></div>
      ) : (
          <>
             <div
            ref={first}
            className="h-screen w-full  flex flex-col text-white bg-[#321473]">
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
                        Papers
                      </h3>
                     
                    </div>
                  </div>
                </div>
              </div>
              <ArrowDownIcon className="w-7 h-7 text-white absolute bottom-0 mb-20 left-1/2 text-center animate-bounce " />
              
            </div>
            </div>
            
          <div className="w-full h-[80px] z-10 bg-slate-100 sticky top-0 z-50 shadow-sm  drop-shadow-lg mb-10 relative  ">
            {/* */}
            <div className=" flex flex-cols  h-full  items-center  md:ml-[15%] ml-[40px] my-auto ml-[10%] ">
              <div class="relative text-gray-600 focus-within:text-gray-400 shadow-lg">
                <span class="absolute inset-y-0 right-0 flex items-center pl-2">
                  <button type="submit" class="p-1 mr-5">
                    <SearchIcon className="w-5 h-5" />
                  </button>
                </span>
                <input
                  type="search"
                  name="q"
                  class="py-3 text-sm text-black  focus:outline-none rounded-lg pl-10 w-[700px]"
                  placeholder="Search..."
                  autocomplete="off"
                />
              </div>

              <div className="flex flex-rows  space-x-5 pr-10 ml-[8%]">
                <DropDown className="" text = {"Sort By Staff Pick"} />
                  <DropDown className="" text={"Sort By Upload Date"} />
              </div>
            </div>
          </div>
            <div>
              <p className="ml-[15%]  text-4xl font-medium">0 items found</p>
          </div>
          <div ref={second} className="w-full h-full flex flex-col mt-[20px] ">
            <div className=" w-[80%]  mx-auto">
              <div className="flex">
                
                <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-2 w-[70%] ml-[100px]  ">
                  {ArchiveCard(book1 , "title 1")}
                  {ArchiveCard(book2 , "title2")}
                  {ArchiveCard(book3 , "title3")}
                  {ArchiveCard(book4 , "title4")}
                    {ArchiveCard(book5, "title5")}
                       {ArchiveCard(book1 , "title 1")}
                  {ArchiveCard(book2 , "title2")}
                  {ArchiveCard(book3 , "title3")}
                  {ArchiveCard(book4 , "title4")}
                    {ArchiveCard(book5, "title5")}
                       {ArchiveCard(book1 , "title 1")}
                  {ArchiveCard(book2 , "title2")}
                  {ArchiveCard(book3 , "title3")}
                  {ArchiveCard(book4 , "title4")}
                    {ArchiveCard(book5, "title5")}
                       {ArchiveCard(book1 , "title 1")}
                  {ArchiveCard(book2 , "title2")}
                  {ArchiveCard(book3 , "title3")}
                  {ArchiveCard(book4 , "title4")}
                  {ArchiveCard(book5 , "title5")}
           
                  </div>
                  <div className="h-full w-[40%] md:w-[20%] sticky top-[10%]">
                  <div className="w-full bg-white shadow-lg text-black  ">
                    <div className="w-full flex items-center h-[70px] z-10 bg-slate-100    text-left">
                     <AdjustmentsIcon className="  w-5 h-5 ml-[40px] " />
                      <p className="mx-2 my-auto  font-bold">Filter</p>
                      </div>
                       

                    <div className="w-full h-full text-left pb-10">
                      <div className="mx-10 mt-10">
                        <p className="text-base font-bold">Refine by</p>
                   
                      </div>

                      <Choice name={"Latest version"} />
                      <Choice name={"Package"} />
                      <Choice name={"Issues Count"} />
                      <Choice name={"Production-ready"} />
                      <Choice name={"lightweight "} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <Footer/>
        </>
      )}
    </>
  );
};

export default Papers;
