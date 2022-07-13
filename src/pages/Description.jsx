import React, { useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import logo from "./../assets/logo.png";
import slider from "./../assets/slider.png";

import { Link } from "react-router-dom";
import QuoteCarousel from "../components/Carousel/QuoteCarousel";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";

const ReadMore = ( props ) => {

  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
          {isReadMore ? props.paragraph[0] : props.paragraph.map((item, index) => { return (<p>{ item}</p>) })}
      <div className="flex flex-col">
        <span
          onClick={toggleReadMore}
          className="read-or-hide uppercase text-sm">
                                  <p className=" mt-10 uppercasetext-black w-[21%] border-2 border-slate-400 font-bold py-2 px-4 ">{isReadMore ? "read more" : "show less"}</p>
          
        </span>
      </div>
    </p>
  );
};
const Description = () => {
    const location = useLocation();
    const data = JSON.parse(location.state.data)
    console.log(data)
   
  return (
    <div className="w-full h-full">
      <div className="flex f-full justify-between items-center w-full py-10">
        <img
          src={logo}
          className="ml-10 text-black"
          style={{ width: "50px", height: "50px" }}
        />
        <Link to={data.backToLink}>
          <div className="flex h-full  items-center uppercase">
            <p className="mr-10 text-center align-center mt-3 font-medium">
              { data.backToText}{" "}
            </p>
            <ArrowLeftIcon className="mr-20 w-5 h-5 font-medium" />
          </div>
        </Link>
      </div>
        <div className="w-full">
                        <div className="w-[90%] md:w-[70%] mx-auto">
                                <div className=" grid grid-cols-1 md:grid-cols-2">
                                        <div className="hidden md:block  w-[30%]">
                                            <p className="text-sm font-medium uppercase">{data.sideText}</p>
                                            {
                                              data.sideArray.map((item, index) => { 
                                                return (<p className="text-base">{item}</p>)
                                              })
                                            }
                                                
                                             
                                        </div>
                      <div className="w-[100%]">
                    

                                                <h1 className="text-4xl font-medium">{ data.title}</h1>
                                    <ReadMore paragraph={ data.paragrah}>
                                                          
                                                        
                                                </ReadMore>
                                        </div>
                                </div>
                        </div>
      </div>
      <div className="w-full">
        <img src = {slider}/>

      </div>
                          <div className="w-full mt-10">
                        <div className="w-[90%] md:w-[70%] mx-auto">
                                <div className=" grid grid-cols-1 md:grid-cols-10 ">
                                        <div className="hidden md:block  col-span-2 ">
                                                <p className="text-3xl mt-16 font-medium uppercase">Quotes</p>
                                                
                                        </div>
                                        <div className="col-span-8">
                                                  <QuoteCarousel quote={data.quote} />
                                        </div>
                                </div>
                        </div>
        </div>
                


      <Footer />
    </div>
  );
};

export default Description;



    
