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
  const itemposition =  localStorage.getItem('position');
 
  const images = importAll(
    require.context(
      "../assets/image/SectionsPictures/",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   console.log("asdf")
  // },[]);
  

  var res = [];
  for (var i in images) res.push(images[i]);
  const _data =   idiology ;

  
  const searchPosition = (text) => {
    
    let position = 0;
    
    for (let i = 0; i < idiology.length; i++) {
      if (idiology[i].title === text) {
        position = i;
      }
    }
    return position;
  };
  const handleClick = (i, text) => {
    
    let position = searchPosition(text);
    if (i == 1) {
        if (position == 0) {
           position = position + 1;
        } else if (position == idiology.length - 1) {
         position = 0;
        } else {
          position = position + 1;
        }
    }
    else {
        if (position == 0) {
          position = idiology.length - 1;
        } else if (position == idiology.length - 1) {
          position = 0;
        } else {
          position = position - 1;
        }
    }
    localStorage.setItem('position', position);
    window.location.reload();
      window.scrollTo(0, 0);
 
   
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
        <Link to="/idiology">
            <p className="uppercase mr-10 text-center align-center    md:ml-[1%] mt-[30%] font-medium text-black hover:text-[#321473] flex">
              Back To Ideology
            <ArrowLeftIcon className="ml-2 md:ml-10 mr-10 md:mr-20 w-5 h-5 font-medium  hover:text-[#321473]" />
            </p>
        </Link>
      </div>
     <div className="w-full">
        <div className="w-[90%] md:w-[80%] mx-auto">
          <div className=" grid grid-cols-1 md:grid-cols-2">
            {
              idiology[itemposition].pdf.length > 0 ?
                <div className="hidden md:block  w-[50%]">
              
              <p className="text-sm font-medium uppercase border-b-2 pb-3">{idiology[itemposition].sideText}</p>
              <div className="flex w-full">
                <img src={bookgif} className="w-[250px] h-[150px] mr-5"/>
                <div className="flex flex-col space-y-3">
                    {idiology[itemposition].pdf.map((item, index) => {
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
              <h1 className="text-4xl font-medium">{idiology[itemposition].title}</h1>
               <ReadMore paragraph={idiology[itemposition].paragraph}></ReadMore> 
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
                <img src={idiology[itemposition].image } className="w-full h-full"/>
            
          
              </div>
               <div className=" mb-[400px] md:mb-[40px] h-[300px] md:h-[800px] relative">
                     {idiology[itemposition].quote.length > 0 ? 
              <div className="flex  z-10  top-10  rounded bg-slate-100 ">
                  <div className="mx-10">
                      <div className="w-full border-b-2 pb-2 ">
                        <div className="">
                          <p className="font-bold  text-xl mt-8">Quotes</p>
                        </div>
                      </div>
                      <div className="mt-10"></div>
                      { 
                        idiology[itemposition].quote.map((item, index) => { 
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
        idiology[itemposition].youtube != "" ?  <div className="w-full h-[500px] ">
              
          <iframe
                                  width="100%"
                                  height="100%"
                                  src={`https://www.youtube.com/embed/${getYouTubeID(
                                    idiology[itemposition].youtube
                                  )}`}
                                  frameBorder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                  title="Embedded youtube"
                                />

      </div> : ("")
      }
     

       <div
        className="w-full h-[60%]  pb-10 bg-[#321473]"
        
      >
        <div id="animation-carousel" class="relative" data-carousel="static">
          <div class="overflow-hidden relative h-30 rounded-lg md:h-96 text-center ">
            <p className="mt-[10%] font-bold text-3xl text-white">
              Browse Topics
            </p>
          </div>

          {
          
    
             <button
                type="button"
                onClick={(e) => {
                   
              handleClick(-1, idiology[itemposition].title);
                
                  
              
            }}
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
          
 
         }
          {
            
               <button
            type="button"
            class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
            onClick={(e) => {
              
              handleClick(1, idiology[itemposition].title);
              

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

   
          }
         
        </div>
      </div> 

      <Footer />
    </div>
  );
};

export default Description;
