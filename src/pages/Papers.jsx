import { React, useState, useEffect, useRef } from "react";
import Choice from "../components/Filter/Choice/Choice";

import { _paperdata  } from "./../assets/data/paperdata/index"
import {
  SearchIcon,
} from "@heroicons/react/outline";
import Footer from "../components/Footer/Footer";
import { useInView } from "react-intersection-observer";
import DropDown from "../components/DropDown/DropDown";
import { useSelector , useDispatch} from 'react-redux'
import { getPaperData} from "./../helper/api" 
import {papers } from "./../redux/actions/navigation"

const Papers = () => {
  const [text, setText] = useState("INTRODUCTION");
  const { ref: first, inView: firstVisible } = useInView();
  const { ref: second, inView: secondVisible } = useInView();
  const { ref: third, inView: thirdVisible } = useInView();
  const { ref: fourth, inView: fourthVisible } = useInView();

  const child = { width: `300em`, height: `100%` };
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setoffsetY] = useState(0);
  const [paperdata , setPaperData] = useState([])
  const [search , setSearch] = useState("")
  const [value, setValue] = useState(false);
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch()
  const authorState = useSelector(state => state.author)
  useEffect(() => {
      window.scrollTo(0, 0);
      dispatch(papers())
      setPaperData(_paperdata)
      getPaperData().then((res) => {
            let _onlineCategory = []
            for (let i = 0; i < res.length; i++){
              _onlineCategory.push({
                  author: "Gudina Tumsa",
                  uploadDate: "2020-01-04",
                  bookName: res[i].title,
                  category: "category",
                  book: "http://localhost:8080"+res[i].fileLocation,
                  popular: 2.8,
          
              })
          }
          var joined = _paperdata.concat(_onlineCategory);
          setPaperData(joined)
      })
    }, []);
 

  



  const ArchiveCard = (image , title , book , bookname) => {
    return (
          <div className="rounded overflow-hidden shadow-lg w-[90%] mt-5">
              {/* <img className="w-full" src={image} alt="Sunset in the mountains"/> */}
              <div className="px-6 py-1">
                  {/* <div className="font-bold text-xl mb-1">{ title}</div> */}
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
            
        


      
         <div className="w-full py-[15px] z-10 bg-slate-100 sticky top-0 z-50    mb-10 relative overflow-hidden   ">
        {/* */}
         <div className="w-[80%] mx-auto">
                          <h2 className="mt-[4%] font-bold text-5xl uppercase text-gray-300 ">Papers</h2>
                   </div>
        {/*  md:ml-[40px] my-auto ml-[10%] */}
        
             <div className=" h-full w-full  flex flex-col md:flex-row      md:items-center justify-between  mt-[60px] ">
              <div class="relative text-gray-600 focus-within:text-gray-400  w-[90%] md:w-[81%]   mx-auto md:ml-[10%]  ">
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
                  class="py-3 text-sm text-black  focus:outline-none rounded-lg pl-10 w-full "
                  placeholder="Search..."
                  autocomplete="off"
                />
              </div>

              {/* <div className="ml-[10px] mt-[10px] md:mt-[10px] ">
                  <DropDown className="" text={"Sort By Author"} authors={ Authors} />
              </div> */}
            </div>
      </div>



















          <div ref={second} className="w-full h-full flex flex-col mt-[20px] pb-10 ">
            <div className=" w-[100%] md:w-[80%]  mx-auto">
              <div className="flex">
                
                  <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-2 w-[100%] md:w-[70%] ml-[20px] md:ml-[100px]  ">
              {
                paperdata.map((item, index) => {
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
                  {/* <div className="h-full mr-[10px] md:mr-0 w-[60%] md:w-[40%] md:w-[20%] sticky top-[10%]">
                  <div className="w-full bg-white shadow-lg text-black  ">
                    <div className="w-full flex items-center h-[70px] z-10 bg-slate-100 text-left">
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
                </div> */}
              </div>
            </div>
          </div>
      
            <Footer/>
        </>
   
  );
};


export default Papers;
