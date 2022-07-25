import React from 'react';

import importAll from "./../helper/importAll"
const Page2 = () => {

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
      <div className='flex flex-col w-full items-center'>
        <div className='w-[50%] bg-red-200   text-xl font-bold mt-[1%] fixed visible md:hidden'>
          <div className='flex items-center'>
                <p className=''>All</p>
                  <p className='px-[20px]'>Family</p>
                  <p className=' '>Work</p>
            </div>  
        </div>
             <div className='  w-[85%] mx-auto  mt-20'>
        
            <div className='hidden md:flex md:flex-col text-xl font-bold mt-[1%] fixed mr-[10px]'>
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
    
 
    </div>


  );
}

export default Page2;


