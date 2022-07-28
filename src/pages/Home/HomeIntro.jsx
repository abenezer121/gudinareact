import React , {useState , useEffect} from 'react'
import { ArrowDownIcon, ArrowRightIcon } from "@heroicons/react/outline";
import gudinatumsa4 from "../../assets/image/other/gudinatumsa4.png";

const HomeIntro = () => { 
    const [offsetX, setOffsetX] = useState(0);
    const [offsetY, setoffsetY] = useState(0);

    
    useEffect(() => {
  
    const handleWindowMouseMove = (event) => {
      const x = (window.innerWidth - event.screenX * 3) / 90;
      const y = (window.innerHeight - event.screenY * 3) / 90;
      setOffsetX(x);
      setoffsetY(y);
    };
    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  });
    return (
        <div className="h-full w-full  flex flex-col text-white bg-[#321473]">
           
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
                          data-aos="fade-up"
                        className="text-8xl font-bold italic text-center text-white  "
                        style={{ fontFamily: "Odibee Sans" }}
                      >
                        Welcome to Gudina Tumsa
                      </h3>
                        <h2
                          data-aos="fade-up"
                        className="text-6xl  text-slate-300 cursive  text-center mt-[-25px] ml-[200px] "
                        style={{ fontFamily: "Oooh Baby" }}
                      >
                        {" "}
                        Legacy
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <ArrowDownIcon className="w-7 h-7 text-white absolute bottom-0 mb-20 left-1/2 text-center animate-bounce " />
              
            </div>
          </div>
    )
}

export default HomeIntro;