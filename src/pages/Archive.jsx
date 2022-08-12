import { React, useState, useEffect, useRef } from "react";

import { useSelector , useDispatch} from 'react-redux'
import Choice from "../components/Filter/Choice/Choice";

import { _bookdata, _category } from "./../assets/data/archivedata/index"
import {getCategory , getArchive} from "./../helper/api" 
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


  const child = { width: `300em`, height: `100%` };
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setoffsetY] = useState(0);
  const [category, setCategory] = useState([])
  const [bookdata , setBookData] = useState([])
  const [search, setSearch] = useState("")
  const [searchFilter , setSearchFilter] = useState("All")
  const [value, setValue] = useState(false);
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch()
  const authorState = useSelector(state => state.author)
  useEffect( () => {
    window.scrollTo(0, 0);
    dispatch(archive())
    setCategory(_category)
    setBookData(_bookdata)
    
    // // // get category
    getCategory().then((res) => {
      let _onlineCategory = []
         for (let i = 0; i < res.length; i++){
           _onlineCategory.push(res[i].name)
      }
      var joined = _category.concat(_onlineCategory);
  
      setCategory(joined)
    })

      getArchive().then((res) => {
      let _onlineCategory = []
         for (let i = 0; i < res.length; i++){
           _onlineCategory.push({
              author: "Gudina Tumsa",
          
              uploadDate: "2020-01-04",
              bookName: res[i].title,
              category: res[i].category,
              book: "https://44.204.78.162"+res[i].fileLocation,
              popular: 2.8,
      
           })
      }
      var joined = _bookdata.concat(_onlineCategory);
      setBookData(joined)
    })


  }, []);
  
 
 


 const ArchiveCard = (image , author , book , bookname) => {
    return (
      <div className="rounded overflow-hidden shadow-lg w-[90%]  max-h-[150px] my-[10px] ">
        <div className="flex flex-col w-full h-full justify-between">
          <div className="w-[100%] md:w-[80%] mx-auto">
            <p className="mx-[10%] md:mx-auto mt-[10%] text-gray-700 text-base">{bookname}</p>
          </div>
          
          <div className="flex w-[80%] justify-between mx-auto mb-[10px] ">
              <a href={book} without rel="noopener noreferrer" target="_blank">
                                              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Preview</span>
                                          </a>
                                          <a href={book} download>
                                              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Download</span>
                                          </a>
          </div>
                  
        </div>
      
        
             
          </div>  
    );
  };


  return (
   
          <>
            
             
         <div className="w-full py-[15px] z-10 bg-slate-100 sticky top-0 z-50    mb-10 relative overflow-hidden   ">
        {/* */}
         <div className="w-[80%] mx-auto">
                          <h2 className="mt-[4%] font-bold text-5xl uppercase text-gray-300 ">Archive</h2>
                   </div>
        {/*  md:ml-[40px] my-auto ml-[10%] */}
        
            <div className=" h-full w-full  flex flex-col md:flex-row      md:items-center justify-between  mt-[30px] ">
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

              {/* <div className="  w-[90%] md:w-[81%]   mx-auto md:ml-[10%]md:hidden md:ml-[10px] mt-[10px] md:mt-[10px] ">
                  <DropDown className="" text={"Filter"} authors={ category} />
              </div>  */}
            </div>
      </div>
      <div className="flex flex-col">
              <div className="w-full h-full flex flex-col mt-[20px] pb-10 ">
            <div className=" w-[100%] md:w-[90%]  mx-auto  ">
              <div className="flex">
                
                  <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-2 w-[100%] md:w-[70%]  md:ml-[6%]   ">
                        {
                          bookdata.map((item, index) => {
                                  if (item.bookName.toLowerCase().includes(search) || search == "") {
                                    if (item.category.toLowerCase() == searchFilter.toLowerCase() || searchFilter == "All") {
                                      return ArchiveCard(item.image, item.author, item.book, item.bookName)
                                    }
                                    return "";
                                  }
                                  return ""
                                })
                        }
                  </div>
                   <div className="z hidden md:flex h-full md:mr-0 w-[50%]  md:w-[40%] md:w-[20%] sticky top-[21%] md:top-[30%]   border-2 border-transparent border-l-gray-300 ">
                      <div className="w-full bg-whitetext-black  ">
                        <div className="w-full flex items-center h-[70px] z-10 bg-slate-100 text-left">
                        <AdjustmentsIcon className="  w-5 h-5 ml-[40px] " />
                          <p className="mx-2 my-auto  font-bold">Filter</p>
                          </div>
                          

                        <div className="w-full h-full text-left pb-10">
                          <div className="mx-10 mt-10">
                  
                        </div>
                          {category.map((item, index) => {
                            
                            if (searchFilter == item) {
                                return  <div onClick={(e) => { setSearchFilter(item); }} className="font-bold text-black"><Choice name={item}  /></div>
                            } else {
                                return  <div onClick={(e) => { setSearchFilter(item); }}><Choice name={item} /></div>
                            }
                            
                             
                          // <div onClick={(e) => { sort({type : "Date"}); }}><Choice  name={"Date"} /></div>
                          })}
                         
                        </div>
                      </div>
                </div>
              </div>
            </div>
          </div>
      
            <Footer/>

      </div>

        </>
   
  );
};

export default Archive;
