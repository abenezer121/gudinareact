import React, { useState , useEffect } from "react";
import './../assets/css/page2.css';



const Page2 = () => {     
 useEffect(() => {
    const scrollingDiv = document.getElementById("scrollContainer");
    const img1 = document.getElementById("img1");

    const left = document.querySelector(".container .left");

    left.onscroll = function (e) {
      console.log(e);
    };

    scrollingDiv.onscroll = function () {
      if (scrollingDiv.scrollTop < 250) {
        img1.src = "https://placeimg.com/250/100/arch";
      }

      if (scrollingDiv.scrollTop > 500) {
        img1.src = "https://placeimg.com/250/100/nature";
      }
      if (scrollingDiv.scrollTop > 1000) {
        img1.src = "https://placeimg.com/250/100/tech";
      }
    };
  }, []);
  return (
    <>
   
      <h1>Down here starts scrolling effect </h1>
      <div className="container">
        <div className="left">
          <img
            id="img1"
            src="https://placeimg.com/250/100/arch"
            alt="placeholder"
          />
        </div>
        <div className="middle h-screen" id="scrollContainer">
          <div className="in-middle">
            <div className="in-in-middle" id="1">
              ONE
            </div>
            <div className="in-in-middle" id="2">
              TWO
            </div>
            <div className="in-in-middle" id="3">
              THREE
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Page2;
