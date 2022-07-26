import React , {useEffect , useState} from 'react'
import gudinatumsa4 from "../assets/image/gudinatumsa4.png";
import gallary1 from "../assets/image/gallary1.jpg";
import gallary2 from "../assets/image/gallary2.jpg";
import gallary3 from "../assets/image/gallary3.jpg";
import gallary4 from "../assets/image/gallary4.jpg";
import importAll from "../helper/importAll"
import './../assets/css/gallery.css'
import Footer from "../components/Footer/Footer";
import { XIcon } from "@heroicons/react/outline";
  import { useSelector, useDispatch } from 'react-redux'
import {home , idiology , relationtoothers , papers , archive , gallery} from "./../redux/actions/navigation"



const Gallery = () => {


  const dispatch = useDispatch()
  useEffect(() => { 
    dispatch(gallery())
  }, []);
    const images = importAll(
    require.context("../assets/image/GTphotoAlbum/", false, /\.(png|jpe?g|svg)$/)
    );
    
    var res = []
    for(var i in images)
      res.push(images[i]);
  
  const returnData = (one, two, three, four, five, six) => {  
    return (
      <><div className="flex flex-wrap md:w-1/2">
        <div className="w-1/2 p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={one} />
        </div>

        <div className="w-1/2 p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={two} />
        </div>

        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={three} />
        </div>
      </div>
        <div className="flex flex-wrap md:w-1/2">
            <div className="w-full p-1 md:p-2">
              <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                src={four} />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                src={five} />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                src={six} />
            </div>
        </div></>
        
    );
  }
  const data = []
  for (let i = 0; i < res.length; i += 6) { 
    data.push(returnData(res[i], res[i + 1], res[i + 2], res[i + 3], res[i + 4], res[i + 5]))
  }

  
      
    
  

   
  return (
    <div className='w-full'>
     {/* <div className='hidden md:flex md:flex-col text-xl font-bold mt-[1%] fixed mr-[10px]'>
                  <p className='-rotate-90'>Family</p>
                  <p className='-rotate-90 py-[20px]'>Work</p>
                  <p className='-rotate-90'>All</p>
            </div>
         */}
          <div className='  w-[85%]  mx-auto   mt-20'>
              <div className='flex'>
                      <div className='flex flex-col text-xl font-bold mt-[1%] fixed mr-[10px]'>
                          <p className='-rotate-90'>Family</p>
                          <p className='-rotate-90 py-[20px]'>Work</p>
                          <p className='-rotate-90'>All</p>
                      </div>
                      <section className="overflow-hidden text-gray-700 ml-[10px]">
                          <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
                              <div className="flex flex-wrap -m-1 md:-m-2">
                                  {data.map((item, index) => { 
                                    return (item);
                                  })}
                              </div>
                          </div>
                      </section>
                  </div>
          </div>
    <Footer/>
    
 
    </div>


  );
}

export default Gallery

/*
<div className='hidden md:flex md:flex-col text-xl font-bold mt-[1%] fixed mr-[10px]'>
                  <p className='-rotate-90'>Family</p>
                  <p className='-rotate-90 py-[20px]'>Work</p>
                  <p className='-rotate-90'>All</p>
            </div>
            */

