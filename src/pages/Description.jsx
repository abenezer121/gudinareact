import React, { useState, useEffect } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";
import logo from "./../assets/image/other/logo.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import importAll from "./../helper/importAll";
import getYouTubeID from "get-youtube-id";
import background from "./../assets/image/ideology/image.jpg";
import { idiology } from "./../assets/data/idiologydata/index"
import "./../assets/css/style.css";
import bookgif from "./../assets/image/other/bbbook.gif"

                                          
import { relationData } from './../assets/data/relationdata/index'
import styled from "styled-components";
const ReadMore = (props) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore
        ? props.paragraph[0]
        : props.paragraph.map((item, index) => {
            return <p>{item}</p>;
          })}
      <div className="flex flex-col">
        <span
          onClick={toggleReadMore}
          className="">
            <button class="btn btn1 uppercase"> {isReadMore ? "read more" : "show less"}</button>
        </span>
      </div>
    </p>
  );
};
const Description = () => {
  const location = useLocation();
  const data = JSON.parse(location.state.data);
  const images = importAll(
    require.context(
      "../assets/image/SectionsPictures/",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  var res = [];
  for (var i in images) res.push(images[i]);
  const _data = data.backToLink == "/idiology" ? idiology : relationData;

  console.log(_data);
  const searchPosition = (text) => {
    let position = 0;
    
    for (let i = 0; i < _data.length; i++) {
      if (_data[i].title === text) {
        position = i;
      }
    }
    return position;
  };
  const handleClick = (i, text) => {
    const position = searchPosition(text);
    
    if (i == 1) {
      if (position == 0) {
        return position + 1;
      } else if (position == _data.length - 1) {
        return 0;
      } else {
        return position + 1;
      }
    } else {
      if (position == 0) {
        return _data.length - 1;
      } else if (position == _data.length - 1) {
        return 0;
      } else {
        return position - 1;
      }
    }
  };

   const dash = (color) => {
    return (
      <div
        className={`w-[30px] h-[4px]  -rotate-12  ${color} m-auto mt-4 mb-4`}
      ></div>
    );
  };


  return (
    <div className="w-full h-full mt-10">
      <div className="flex f-full justify-between items-center w-full py-10">
        {/* <img
          src={logo}
          className="ml-10 text-black"
          style={{ width: "50px", height: "50px" }}
        /> */}
        <p></p>
        <Link to={data.backToLink}>
            <p className="uppercase mr-10 text-center align-center    md:ml-[1%] mt-[30%] font-medium text-black hover:text-[#321473] flex">
              {data.backToText}{" "}
            <ArrowLeftIcon className="ml-2 md:ml-10 mr-10 md:mr-20 w-5 h-5 font-medium  hover:text-[#321473]" />
            </p>
        </Link>
      </div>
      <div className="w-full">
        <div className="w-[90%] md:w-[80%] mx-auto">
          <div className=" grid grid-cols-1 md:grid-cols-2">
            {
              data.pdf.length > 0 ?
                <div className="hidden md:block  w-[50%]">
              
              <p className="text-sm font-medium uppercase border-b-2 pb-3">{data.sideText}</p>
              <div className="flex w-full">
                <img src={bookgif} className="w-[250px] h-[150px] mr-5"/>
                <div className="flex flex-col space-y-3">
                    {data.pdf.map((item, index) => {
                      return (
                        <a
                          href={item.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-black hover:text-[#321473]"
                        >
                          {item.name}
                        </a>
                      );
                    })}
              </div>
              </div>
            </div> : <div className="hidden md:block  w-[50%]"></div>
              }
            
            <div className="w-[100%]">
              <h1 className="text-4xl font-medium">{data.title}</h1>
              <ReadMore paragraph={data.paragrah}></ReadMore>
            </div>
          </div>
        </div>
      </div>
      <div>
    </div>


      <div className="mt-[5%] mb-[1%]">
         <div className="w-full">
        <div className="w-[90%] md:w-[70%] mx-auto">
          <div className=" grid grid-cols-1 md:grid-cols-2 space-x-2">
           
              
              <div className="  mb-[40px] h-[300px] md:h-[800px] relative">
                <img src={data.image } className="w-full h-full"/>
            
          
              </div>
               <div className=" mb-[400px] md:mb-[40px] h-[300px] md:h-[800px] relative">
                     {data.quote.length > 0 ? 
              <div className="flex  z-10  top-10  rounded bg-slate-100 ">
                  <div className="mx-10">
                      <div className="w-full border-b-2 pb-2 ">
                        <div className="">
                          <p className="font-bold  text-xl mt-8">Quotes</p>
                        </div>
                      </div>
                      <div className="mt-10"></div>
                      { 
                        data.quote.map((item, index) => { 
                          return <p className="" >{item}</p>
                        })
                      }
                    </div>
              </div> : ("")}
              </div>
          </div>
        </div>
      </div>
      </div>
      {
        data.youtube != "" ?  <div className="w-full h-[500px] ">
              {/* <p  data-aos="fade-up" className="text-lg text-center text-black "> The Importance of the Man, Reverend and Martyr Gudina Tumsa </p>
               {dash("bg-black")}
                    <p className="mb-[4 0px]"></p> */}
          <iframe
                                  width="100%"
                                  height="100%"
                                  src={`https://www.youtube.com/embed/${getYouTubeID(
                                    data.youtube
                                  )}`}
                                  frameBorder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                  title="Embedded youtube"
                                />

      </div> : ("")
      }
     

      <div
        className="w-full h-[60%]  pb-10"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div id="animation-carousel" class="relative" data-carousel="static">
          <div class="overflow-hidden relative h-30 rounded-lg md:h-96 text-center ">
            <p className="mt-[10%] font-bold text-3xl text-white">
              Browse Topics
            </p>
          </div>

          {
          //"/idiology"
          <Link to="/description" state={{
                        data: JSON.stringify({
                          title: _data[handleClick(-1, data.title)].title,
                          backToText:  _data[handleClick(-1, data.title)].backToText,
                          backToLink :  _data[handleClick(-1, data.title)].backToLink, 
                          quote: _data[handleClick(-1, data.title)].quote,
                          paragrah: _data[handleClick(-1, data.title)].paragraph,
                          image : _data[handleClick(-1, data.title)].image,
                          sideText: "PDF",
                          youtube : _data[handleClick(-1, data.title)].youtube,
                          sideArray: [
                                  "Cost of Discipleship",
                                  "GT on Politics/Economics",
                                  "Holistic Theology"
                          ],
                          pdf :  _data[handleClick(-1, data.title)].pdf,
                        })
                        
                        
          }}>
             <button
            type="button"
            class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
        
          >
            <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              <span class="sr-only">Previous</span>
            </span>
          </button>
          
          </Link>
         }
          {
             <Link to="/description" state={{
                        data: JSON.stringify({
                          title: _data[handleClick(1, data.title)].title,
                             backToText:  data.backToText,
                          backToLink :  data.backToLink, 
                          quote: _data[handleClick(1, data.title)].quote,
                          paragrah: _data[handleClick(1, data.title)].paragraph,
                          image: _data[handleClick(-1, data.title)].image,
                           youtube : _data[handleClick(1, data.title)].youtube,
                          sideText: "PDF",
                          sideArray: [
                                  "Cost of Discipleship",
                                  "GT on Politics/Economics",
                                  "Holistic Theology"
                          ],
                          pdf :  _data[handleClick(1, data.title)].pdf,
                        })
                        
                        
            }}>
               <button
            type="button"
            class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
            onClick={() => {
              const pos = handleClick(1, data.title);
              console.log(pos);
            }}
          >
            <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              <span class="sr-only">Next</span>
            </span>
          </button>

          </Link>
          }
         
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Description;
