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
                          <h2 className="mt-[4%] font-bold text-5xl uppercase text-gray-300 ">In Relation With Others</h2>
                   </div>
                      
            <div className="w-[80%] h-[70%]  mx-auto flex items-center mt-[3%] justify-between mb-[500px] md:mb-[120px]">
              <div className="flex flex-col w-[100%] md:w-[70%] h-full ">
                <div className="flex  flex-col md:flex-row w-full h-full  ">
                  <img
                    src={images[position]}
                    className="w-[90%] md:w-[60%] h-[100%] "
                  />
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

              <img
                className="grayscale hidden md:flex  h-[100%] "
                width="200"
                onClick={() => {
                  handlePosition(1);
                }}
                style={{
                  objectFit: "cover",

                  height: "100%",
                }}
                src={cutImage[position]}
                alt="Bear"
              />
                      </div>
                     
                       <Footer />
          </div>
        </div>
      </div>
     
    </>
  );
};
export default RelationToOthers;
