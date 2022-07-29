import React, { useEffect, useState } from "react";
import { relationData } from "./../assets/data/relationdata/index";

import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import martin from "./../assets/image/other/martin.png";
import bonhoeffer1 from "./../assets/image/other/bonhoeffer1.png";
import abiy2 from "./../assets/image/other/drabiy2.jpg";
import Dash from "./../components/Carousel/Dash";
import "./../assets/css/style.css";
                                          
import { useSelector, useDispatch } from "react-redux";
import { relationtoothers } from "./../redux/actions/navigation";

const RelationToOthers = () => {
  const [position, setPosition] = useState(0);

  const images = [martin, abiy2, bonhoeffer1];
  const title = [
    "Relation With Martin Luther King",
    "Relation With Prime Minster Dr. Abiy Ahmed",
    "Relation With Dr. Bonhoeffer",
  ];
  const cutImage = [abiy2, bonhoeffer1, martin];
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(relationtoothers());
       window.scrollTo(0, 0);
  }, []);

  const handlePosition = (i) => {
    if (i == -1) {
      if (position == 0) setPosition(images.length - 1);
      else setPosition(position - 1);
    } else {
      if (position == images.length - 1) setPosition(0);
      else setPosition(position + 1);
    }
  };
  return (
    <>
          <div className="w-full h-full mb-[120px] ">
           
              <div className="flex flex-col">
                  
                  <div className="w-full h-screen ">
                      <div className="w-[80%] mx-auto">
                          <h2 className="mt-[50%] md:mt-[4%] font-bold text-5xl uppercase text-gray-300 ">In Relation With Others</h2>
                   </div>
                      
            <div className="w-[80%] h-[70%]  mx-auto flex items-center mt-[3%] justify-between mb-[500px] md:mb-[120px]">
              <div className="flex flex-col w-[100%] md:w-[70%] h-full ">
                <div className="flex  flex-col md:flex-row w-full h-full  ">
                  <div className="h-full w-full relative">
                      <img
                        src={images[position]}
                        className="w-[90%] md:w-[60%] h-[100%] "
                    />
                    <div className="w-[90%] md:w-[60%] flex justify-between absolute top-1/2 md:hidden  ">
                       <button type="button" class="animate-pulse ml-[10px]" data-carousel-prev onClick={function (e) {
                        
                        handlePosition(-1);
                    }}>
                            <span class="bg-gray-500 inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                                <span class="sr-only">Previous</span>
                            </span>
                      </button>
                  
                       <button type="button" class="animate-pulse  mr-[10px]" data-carousel-prev onClick={function (e) {
                      
                        handlePosition(1);
                    }}>
                            <span class="bg-gray-500 inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-w/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                                <span class="sr-only">Next</span>
                            </span>
                        </button>
                       

                    </div>
                  </div>
                  
<div className=" w-[70%] mt-3  md:hidden flex items-center">
                  <div
                    onClick={function (e) {
                      setPosition(0);
                    }}
                  >
                    <Dash
                      color={position == 0 ? "bg-[#321473]" : "bg-slate-500"}
                    />
                  </div>
                  <div
                    onClick={function (e) {
                      setPosition(1);
                    }}
                  >
                    <Dash
                      color={position == 1 ? "bg-[#321473]" : "bg-slate-500"}
                      onClick={() => {
                        setPosition(1);
                      }}
                    />
                  </div>
                  <div
                    onClick={function (e) {
                      setPosition(2);
                    }}
                  >
                    <Dash
                      color={position == 2 ? "bg-[#321473]" : "bg-slate-500"}
                      onClick={() => {
                        setPosition(2);
                      }}
                    />
                  </div>
                </div>
                  <div className="md:ml-[60px]  my-auto w-[90%] md:w-[30%] bg-transparent ">
                    <h2 className="font-bold text-5xl mt-[50px] md:mt-[10px]">{title[position]}</h2>

                    <p>{relationData[position].paragraph[0]}</p>
                    <Link
                      to="/description"
                      state={{
                        data: JSON.stringify({
                          title: relationData[position].title,
                          backToLink: "/relationtoothers",
                          backToText: "Back To Relations",
                          quote: relationData[position].quote,
                          pdf: [],
                          image: relationData[position].image,
                          paragrah: relationData[position].paragraph,
                          sideText: "OTHER PEOPLE",
                          youtube : relationData[position].youtube,
                          sideArray: [
                            "Prime minster Dr Abiy",
                            "Dietrich Bonhoeffer",
                            "martin luther king",
                          ],
                        }),
                      }}
                    >
                      <button class="btn btn1"> Read More</button>                    
                    </Link>
                  </div>
                </div>
                <div className=" w-[70%] mt-3  hidden md:flex items-center">
                  <div
                    onClick={function (e) {
                      setPosition(0);
                    }}
                  >
                    <Dash
                      color={position == 0 ? "bg-[#321473]" : "bg-slate-500"}
                    />
                  </div>
                  <div
                    onClick={function (e) {
                      setPosition(1);
                    }}
                  >
                    <Dash
                      color={position == 1 ? "bg-[#321473]" : "bg-slate-500"}
                      onClick={() => {
                        setPosition(1);
                      }}
                    />
                  </div>
                  <div
                    onClick={function (e) {
                      setPosition(2);
                    }}
                  >
                    <Dash
                      color={position == 2 ? "bg-[#321473]" : "bg-slate-500"}
                      onClick={() => {
                        setPosition(2);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="h-full relative"  onClick={() => {
                                      handlePosition(1);
                                    }}>
                        <img
                                    className="grayscale hidden md:flex  h-[100%] "
                                    width="200"
                                   
                                    style={{
                                      objectFit: "cover",

                                      height: "100%",
                                    }}
                                    src={cutImage[position]}
                                    alt="Bear"
                />
                 <button type="button" class="hidden md:flex animate-pulse flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
                  <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                      <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                      <span class="sr-only">Next</span>
                  </span>
              </button>
                          
              </div>
              
                      </div>
                     
                       <Footer />
          </div>
        </div>
      </div>
     
    </>
  );
};
export default RelationToOthers;
