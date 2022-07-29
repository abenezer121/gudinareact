import React , {useEffect , useState} from 'react'

import importAll from "../helper/importAll"
import './../assets/css/gallery.css'
import Footer from "../components/Footer/Footer";
import { XIcon } from "@heroicons/react/outline";
  import { useSelector, useDispatch } from 'react-redux'
import {home , idiology , relationtoothers , papers , archive , gallery} from "./../redux/actions/navigation"



const Gallery = () => {


 
 
  const dispatch = useDispatch()
  const [filter , setFilter] = useState("All")
  useEffect(() => { 
    window.scrollTo(0, 0);
    dispatch(gallery())
  }, []);

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
  }
  return array;
  }
  


  const getMeImage = () => {
      const Childhood = importAll(require.context("../assets/image/Gallery/Childhood", false, /\.(png|jpe?g|svg)$/));
      const EarlyLife = importAll(require.context("../assets/image/Gallery/EarlyLife", false, /\.(png|jpe?g|svg)$/));
      const EECMY = importAll(require.context("../assets/image/Gallery/EECMY", false, /\.(png|jpe?g|svg)$/));
      const Evangelist = importAll(require.context("../assets/image/Gallery/Evangelist", false, /\.(png|jpe?g|svg)$/));
      const GTFamily = importAll(require.context("../assets/image/Gallery/GTFamily", false, /\.(png|jpe?g|svg)$/));
      const quote = importAll(require.context("../assets/image/Gallery/quote", false, /\.(png|jpe?g|svg)$/));
      
      var res = []
      for (var image in Childhood) res.push( { category:"Childhood" , image:Childhood[image]  });
      for (var image in EarlyLife) res.push( { category:"Early Life" , image:EarlyLife[image]  });
      for (var image in EECMY) res.push( { category:"EECMY" , image:EECMY[image] } );
      for (var image in Evangelist) res.push( { category:"Evangelist" , image:Evangelist[image]} );
      for (var image in GTFamily) res.push({ category:"Family" , image:GTFamily[image]});
      for (var image in quote) res.push({ category:"Quote" , image:quote[image]});
      return shuffleArray(res)
      
  }

  var res = getMeImage()
  
  
  const returnData = (one, two, three, four, five, six , putdata) => {  
    return (
      <>
        <div className="flex flex-wrap md:w-1/2">
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
        </div>
        {
          putdata == true ? <div className='w-[100%] h-[100%] mt-[30px]  '>
            <img alt="gallery" className="block object-cover object-center w-full  h-full rounded-lg"
                src={six} />
          </div> : ("")
      }
      </>
        
    );
  }
  let filteredRes = []
  for (let i = 0; i < res.length; i++) { 
    try {
         if (res[i].category == filter || filter == "All")  { 
      filteredRes.push(res[i])
    }
    }catch(err){}
 
  }
  const data = []
  let added = false
  for (let i = 0; i < filteredRes.length; i += 6) { 
    try {
      if (i == 36 && added == false) {
      data.push(returnData(filteredRes[i].image, filteredRes[i+1].image, filteredRes[i+2].image, filteredRes[i+3].image, filteredRes[i+4].image, filteredRes[i+5].image , true))
      added = true;
    } else {
        data.push(returnData(filteredRes[i].image, filteredRes[i + 1].image, filteredRes[i + 2].image, filteredRes[i + 3].image, filteredRes[i + 4].image, filteredRes[i + 5].image , false))
    }
    } catch (err) {
   
    }
    
    
  }

  
      
    
  
  return (
    <>
      <div className="w-[80%] mx-auto mt-[36%] md:mt-[5%]">
                          <h2 className="mt-[2%] font-bold text-5xl uppercase text-gray-300 ">Gallery</h2>
                   </div>
    <div class="flex">
    <aside class="h-screen sticky top-[15px] md:ml-20 ">
        <div className='flex flex-col text-xl font-bold  mt-[10px] uppercase9+ '>
            <p className= { filter == "All" ? '-rotate-90 py-[40px]' : '-rotate-90 py-[40px] text-gray-400'} onClick={()=>{setFilter("All");}}>All</p>
            <p className={ filter == "Childhood" ? '-rotate-90 py-[40px]' : '-rotate-90 py-[40px] text-gray-400'} onClick={()=>{setFilter("Childhood");}}>Childhood</p>
            <p className={ filter == "Early Life" ? '-rotate-90 py-[20px]' : '-rotate-90 py-[20px] text-gray-400'} onClick={()=>{setFilter("Early Life");}}>Early Life</p>
            <p className= { filter == "EECMY" ? '-rotate-90 py-[20px]' : '-rotate-90 py-[20px] text-gray-400'} onClick={()=>{setFilter("EECMY");}}>EECMY</p>
            <p className= { filter == "Family" ? '-rotate-90 py-[20px]' : '-rotate-90 py-[20px] text-gray-400'} onClick={()=>{setFilter("Family");}}>Family</p>
            <p className= { filter == "Evangelist" ? '-rotate-90 py-[40px]' : '-rotate-90 py-[40px] text-gray-400'} onClick={()=>{setFilter("Evangelist");}}>Evangelist</p>
            <p className={ filter == "Quote" ? '-rotate-90 py-[20px]' : '-rotate-90 py-[20px] text-gray-400'} onClick={()=>{setFilter("Quote");}}>Quote</p>
         

      </div>
    </aside>
    
    <main>
            <section className=" text-gray-700 mt-[90px] ">
                           <div className="container px-1 py-2 mx-auto lg:pt-24 lg:px-32">
                               <div className="flex flex-wrap -m-1 md:-m-2">
                                  {data.map((item, index) => { 
                                     return (item);
                                   })}
                               </div>
                           </div>
            </section>
        </main>
     
</div>
      <Footer/>
    </>

  )
   

}

export default Gallery




