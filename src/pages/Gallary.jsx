import React , {useEffect , useState} from 'react'
import gudinatumsa4 from "../assets/gudinatumsa4.png";
import gallary1 from "../assets/gallary1.jpg";
import gallary2 from "../assets/gallary2.jpg";
import gallary3 from "../assets/gallary3.jpg";
import gallary4 from "../assets/gallary4.jpg";
import './gallery.css'

import {
  XIcon
   
                          
} from "@heroicons/react/outline";


const Gallary = () => {

  
    const [offsetX, setOffsetX] = useState(0);
    const [offsetY, setoffsetY] = useState(0);
   
    let data = [
        {
            id: 1,
            imgSrc: gallary1
        },
         {
            id: 2,
            imgSrc: gallary2
        },
         {
            id: 3,
            imgSrc: gallary3
        },
         {
            id: 4,
            imgSrc: gallary4
        },
          {
            id: 5,
            imgSrc: gallary2
        },
           {
            id: 6,
            imgSrc: gallary3
        },
        
    ]
    const style = [
        {
            width : ''
        }
    ]
    const [model, setModel] = useState(true)
    const [tempimgsrc, setTempImgSrc] = useState('')
    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
}
    
    const getImg = (imgSrc) => {
 
        setTempImgSrc(imgSrc);
        setModel(true);
    }
    return (
      
        <>
             
            <div className='w-full h-full'>
                <div className='w-full h-[60%] bg-[#321473]'>
                <div className='flex flex-col h-full items-center'>
                    <div className=' my-auto flex'>
                        <p className='text-6xl my-auto text-white'    style={{ fontFamily: "Odibee Sans" }}>Gallary</p>
                        <img src={gudinatumsa4}  style={{
                        
                        transform: `translateY(${offsetY}px) translateX(${offsetX}px)`,
                      }} />
                    </div>
                </div>
            </div> 
                <div className='w-[100%] md:w-[70%] mx-auto'>
                  
                <div className='gallery mt-[100px]'>
                    {data.map((item , index)=> { 
                    return (
                        <div className='pics' key = {index} >
                            <img src={item.imgSrc} style = {{  height : randomIntFromInterval(400 , 500)+'px'}} alt=''/>
                        </div>
                    )
                })}
             
            </div>
                </div>
                

            </div>
           
</>
            

          
           
            
       
    )
}

export default Gallary

/*

*/