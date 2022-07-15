import React, { useState , useEffect } from "react";

import book1 from "../assets/image/book1.jpg";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
const Page2 = (props) => {     

  return (
    <>
   
      <div className="w-full h-full mb-20">
        <div className="flex w-full">
          <div className="w-[32%] h-full  my-auto">
                <img src={book1} className="mx-auto" alt="book1" />
          </div>
          <div className="w-[40%] mx-3 mt-20">
            <div className="w-[90%]">
              <h1 className="text-5xl font-medium">Debt - The First 5000 Years</h1> 
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vitae amet possimus, delectus temporibus natus culpa magnam cupiditate officia nam!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vitae amet possimus, delectus temporibus natus culpa magnam cupiditate officia nam!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vitae amet possimus, delectus temporibus natus culpa magnam cupiditate officia nam!

              </p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque quas esse suscipit voluptatem deserunt explicabo, minus culpa magnam animi doloribus tempore similique, amet porro. Facilis delectus corrupti error consequuntur ipsam deleniti harum. Sint sunt consequuntur fuga beatae voluptas qui reiciendis.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque quas esse suscipit voluptatem deserunt explicabo, minus culpa magnam animi doloribus tempore similique, amet porro. Facilis delectus corrupti error consequuntur ipsam deleniti harum. Sint sunt consequuntur fuga beatae voluptas qui reiciendis.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque quas esse suscipit voluptatem deserunt explicabo, minus culpa magnam animi doloribus tempore similique, amet porro. Facilis delectus corrupti error consequuntur ipsam deleniti harum. Sint sunt consequuntur fuga beatae voluptas qui reiciendis.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque quas esse suscipit voluptatem deserunt explicabo, minus culpa magnam animi doloribus tempore similique, amet porro. Facilis delectus corrupti error consequuntur ipsam deleniti harum. Sint sunt consequuntur fuga beatae voluptas qui reiciendis.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque quas esse suscipit voluptatem deserunt explicabo, minus culpa magnam animi doloribus tempore similique, amet porro. Facilis delectus corrupti error consequuntur ipsam deleniti harum. Sint sunt consequuntur fuga beatae voluptas qui reiciendis.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque quas esse suscipit voluptatem deserunt explicabo, minus culpa magnam animi doloribus tempore similique, amet porro. Facilis delectus corrupti error consequuntur ipsam deleniti harum. Sint sunt consequuntur fuga beatae voluptas qui reiciendis.
                
              </p>
              <div className="border-t-2 border-slate-200">
                <div className="flex w-full justify-between ">
                  <div className="pt-8">
                      <div className="flex">
                        <p className="font-bold">Author</p>
                        <p className="mx-10">Gudina Tumsa</p>
                      </div>
                  </div>
                  <div className="pt-8">
                      <div className="flex">
                        <p className="font-bold">Release Date</p>
                        <p className="mx-10">Gudina Tumsa</p>
                      </div>
                  </div>
                  
                </div>
                 <div className="flex w-full justify-between ">
                  <div className="pt-2">
                      <div className="flex">
                        <p className="font-bold">Language</p>
                        <p className="mx-10">Gudina Tumsa</p>
                      </div>
                  </div>
                  <div className="pt-2">
                      <div className="flex">
                        <p className="font-bold">Page</p>
                        <p className="mx-10">Gudina Tumsa</p>
                      </div>
                  </div>
                  
                </div>
              </div>
            </div>
                 
          </div>
          <div className="absolute h-screen right-0 w-[15%]  mt-[60px] overflow-auto">
            <div className="flex flex-col">
              <Link to="/papers">
                  <div className="flex h-full  items-center uppercase hover:text-blue-500">
                    <p className="mr-10 text-center align-center mt-3 font-medium">
                    Back to Papers
                    </p>
                    <ArrowLeftIcon className="mr-20 w-5 h-5 font-medium" />
                </div>
              </Link>
              
              
              <p className="mx-auto font-bold mt-10 ">Other Book</p>
              <img src={book1} className="mx-auto w-[70%] h-[50%] mt-10" alt="book1" />
              <img src={book1} className="mx-auto w-[70%] h-[50%] mt-10" alt="book1" />
              <img src={book1} className="mx-auto w-[70%] h-[50%] mt-10" alt="book1" />
              <img src={book1} className="mx-auto w-[70%] h-[50%] mt-10" alt="book1" />
              <img src={book1} className="mx-auto w-[70%] h-[50%] mt-10" alt="book1" />
              <img src={book1} className="mx-auto w-[70%] h-[50%] mt-10" alt="book1" />
            </div>
          </div>
        
        </div>
     </div>
     
    </>
  );
};

export default Page2;
