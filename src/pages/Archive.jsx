import { React, useState, useEffect, useRef } from "react";

import { useSelector , useDispatch} from 'react-redux'
import Choice from "../components/Filter/Choice/Choice";
import gudinatumsa4 from "../assets/image/archivebackgorund.png";
import { data , Authors } from "./../assets/data/bookdata/index"
import {

  ArrowDownIcon,
  SearchIcon,
  AdjustmentsIcon,
} from "@heroicons/react/outline";
import Footer from "../components/Footer/Footer";
import { useInView } from "react-intersection-observer";
import DropDown from "../components/DropDown/DropDown";

import {home  , relationtoothers , papers , archive , gallery} from "./../redux/actions/navigation"

const Archive = () => {
  const [text, setText] = useState("INTRODUCTION");
  const { ref: first, inView: firstVisible } = useInView();
  const { ref: second, inView: secondVisible } = useInView();
  const { ref: third, inView: thirdVisible } = useInView();
  const { ref: fourth, inView: fourthVisible } = useInView();

  const child = { width: `300em`, height: `100%` };
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setoffsetY] = useState(0);
  
  const [search , setSearch] = useState("")
  const [value, setValue] = useState(false);
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch()
  const authorState = useSelector(state => state.author)
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(archive())
  }, []);
  
  useEffect(() => {
    if (fourthVisible) {
      setText("TimeLine");
    
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
      // setOffsetX(x);
      // setoffsetY(y);
    };
    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  });

  
  const sort = (e) => { 
   
    if (e.type == "Date") {
        // data = data.sort((a, b) => (new Date(b.date).getTime() || -Infinity) - (new Date(a.date).getTime() || -Infinity));
        
      for (let i = 0; i < data.length; i++){
        for (let j = 0; j < data.length; j++){
          if (new Date(data[i].uploadDate) > new Date(data[j].uploadDate)){
            let temp = data[i]
            data[i] = data[j]
            data[j] = temp
          }
        }
      }
    }
    if (e.type == "Popular") {
      for (let i = 0; i < data.length; i++){
        for (let j = 0; j < data.length; j++){
          if (data[i].popular > data[j].popular){
            let temp = data[i]
            data[i] = data[j]
            data[j] = temp
          }
        }
      } 
    }
    setFilter(e.type)
  }


  const ArchiveCard = (image , title , book , bookname) => {
    return (
          <div className="max-w-sm rounded overflow-hidden shadow-lg w-[90%] mt-5">
              <img className="w-full" src={image} alt="Sunset in the mountains"/>
              <div className="px-6 py-1">
                  <div className="font-bold text-xl mb-1">{ title}</div>
                  <p className="text-gray-700 text-base"> {bookname}</p>
              </div>
              <div className="flex  justify-between px-6  pb-2">      
                  <a href={book} without rel="noopener noreferrer" target="_blank">
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Preview</span>
                  </a>
                  <a href={book} download>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Download</span>
                  </a>
              </div>
          </div>  
    );
  };

  return (
   
          <>
            
               <div className='w-full h-screen bg-[#322476] relative'>
                <div className='flex flex-col h-[100%] items-center'>
                    <div className=' my-auto flex'>
                        <p className='text-[400px] my-auto text-white z-1 ml-[100px] '    style={{ fontFamily: "Odibee Sans" }}>Archive</p>
                        <img src={gudinatumsa4}  className=" absolute w-[400px] h-[400px] right-[100px]" style={{
                        
                        transform: `translateY(${offsetY}px) translateX(${offsetX}px)`,
                      }} />
                    </div>
              </div>
               <ArrowDownIcon className="w-7 h-7 text-white absolute bottom-0 mb-20 left-1/2 text-center animate-bounce " />
            </div> 
            
            
          <div className="w-full h-[80px] z-10 bg-slate-100 sticky top-0 z-50 shadow-sm  drop-shadow-lg mb-10 relative  ">
            {/* */}
            <div className=" flex flex-cols  h-full  items-center justify-between  md:ml-[15%] ml-[40px] my-auto ml-[10%] ">
              <div class="relative text-gray-600 focus-within:text-gray-400 shadow-lg">
                <span class="absolute inset-y-0 right-0 flex items-center pl-2">
                  <button type="submit" class="p-1 mr-5">
                    <SearchIcon className="w-5 h-5" />
                  </button>
                </span>
                <input
                  type="search"
                  name="q"
                  onChange={(e) => {
                    setSearch(e.target.value.toLowerCase())
                  }}
                  class="py-3 text-sm text-black  focus:outline-none rounded-lg pl-10 w-[700px]"
                  placeholder="Search..."
                  autocomplete="off"
                />
              </div>

          <div className="flex flex-rows  space-x-5 pr-10 mr-[13%]">
                  
                <DropDown className="" text={"Sort By Author"} authors={ Authors} />
                  {/* <DropDown className="" text={"Sort By Upload Date"} /> */}
              </div>
            </div>
          </div>
            <div>
              {/* <p className="ml-[15%]  text-4xl font-medium">0 items found</p> */}
          </div>
          <div ref={second} className="w-full h-full flex flex-col mt-[20px] pb-10 ">
            <div className=" w-[80%]  mx-auto">
              <div className="flex">
                
                  <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-2 w-[70%] ml-[100px]  ">
              {
                data.map((item, index) => {
                        if (item.bookName.toLowerCase().includes(search) || search == "") {
                          if (item.author.toLowerCase() == authorState.author.toLowerCase() || authorState.author == "All") {
                            return ArchiveCard(item.image, item.author, item.book, item.bookName)
                          }
                          return "";
                        }
                        return ""
                      })
                    }
                  
                 
           
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
                      <div onClick={(e) => { sort({type : "Popular"}); }}><Choice name={"Popular"} /></div>
                      <div onClick={(e) => { sort({type : "Date"}); }}><Choice  name={"Date"} /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>
      
            <Footer/>
        </>
   
  );
};

export default Archive;
