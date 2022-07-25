import React , {useEffect , useState} from 'react'
import { relationData } from './../assets/data/relationdata/index'
import gudinatumsa1 from "./../assets/image/gudinatumsa1.JPG"
import { Link } from 'react-router-dom';
import Footer from "../components/Footer/Footer";
import homepage1 from "./../assets/image/HomePagePictures/homepage1.jpg";
import homepage2 from "./../assets/image/HomePagePictures/homepage2.jpg";
import homepage3 from "./../assets/image/HomePagePictures/homepage3.jpg";
import homepage4 from "./../assets/image/HomePagePictures/homepage4.jpg";
import homepage5 from "./../assets/image/HomePagePictures/homepage5.jpg";
import homepage6 from "./../assets/image/HomePagePictures/homepage6.jpg";
import martin from "./../assets/image/martin.png"
import bonhoeffer1 from "./../assets/image/bonhoeffer1.png"
import abiy2 from "./../assets/image/drabiy2.jpg"
import Dash from './../components/Carousel/Dash'
import './../assets/css/style.css'
  import { useSelector, useDispatch } from 'react-redux'
import {home , idiology , relationtoothers , papers , archive , gallery} from "./../redux/actions/navigation"

const RelationToOthers = () => { 
   const [position, setPosition] = useState(0);
    
    const images = [martin, abiy2, bonhoeffer1]
    const title = ["Relation With Martin Luther King", "Relation With Prime Minster Dr. Abiy Ahmed", "Relation With Dr. Bonhoeffer"]
    const cutImage = [abiy2, bonhoeffer1, martin]
    const dispatch = useDispatch()
    useEffect(() => { 
        dispatch(relationtoothers())
    }, []);
 
      const handlePosition = (i) => { 
            if (i == -1) {
                if (position == 0) setPosition(images.length -1);
                else  setPosition(position - 1);
            }
            else {
                if (position == images.length-1) setPosition(0);
                else  setPosition(position + 1);
                
            } 
    }
    return (  
        <>
        <div className='w-full h-full  overflow-auto'>
            <div className='w-[80%] h-[70%]  mx-auto flex items-center mt-[8%] justify-between '>
                <div className='flex flex-col w-[100%] md:w-[70%] h-full '>
                    <div className='flex  flex-col md:flex-row w-full h-full  '>
                        <img src={images[position]} className="w-[90%] md:w-[60%] h-[100%] " />
                        

                         <div className=' w-[70%] flex md:hidden mt-[20px] mb-[20px] '>
                                <div  onClick={function(e) {
                                            setPosition(0);    
                                        }}><Dash color={position == 0 ? 'bg-[#321473]' : 'bg-slate-500'} /></div>  
                                        <div
                                        onClick={function(e) {
                                            setPosition(1);    
                                        }}>
                                            <Dash color = { position == 1 ? 'bg-[#321473]' : 'bg-slate-500'} onClick = {()=>{ setPosition(1)}} />
                                        </div>
                                        <div onClick={function(e) {
                                            setPosition(2);    
                                        }}>
                                            <Dash color = { position == 2 ? 'bg-[#321473]' : 'bg-slate-500'} onClick = {()=>{ setPosition(2)}} />
                                </div>
                        </div>


                        <div className='ml-[60px] my-auto w-[90%] md:w-[30%] bg-transparent '>
                            <h2 className='font-bold text-5xl'>{ title[position]}</h2>
                        
                            <p>{relationData[position].paragraph[0]}</p>
                                    <Link to="/description" state={{
                                            data: JSON.stringify({
                                                title: relationData[position].title,
                                                backToLink: "/relationtoothers",
                                                backToText: "Back To Relations",
                                                quote: relationData[position].quote,
                                                pdf : [],
                                                paragrah: relationData[position].paragraph,
                                                sideText: "OTHER PEOPLE",
                                                sideArray: [
                                                    "Prime minster Dr Abiy",
                                                    "Dietrich Bonhoeffer",
                                                    "martin luther king"
                                                ]
                                            })
                                                
                                        }}>
                                            <button class="btn btn1" > Read  More</button>
                                                            
                                        </Link>
                            
                        </div>
                    </div>
                </div>
                <img className="grayscale hidden md:flex" width="200" onClick = {()=>{handlePosition(1)} }  style={{
                    objectFit: "cover",
                    
                    height: "100%",                   
                     }} src={cutImage[position]} alt="Bear"/>
                

            </div>
            <div className=' w-[70%] mt-3 mx-auto hidden md:flex items-center'>
                <div  onClick={function(e) {
                               setPosition(0);    
                        }}><Dash color={position == 0 ? 'bg-[#321473]' : 'bg-slate-500'} /></div>  
                        <div
                        onClick={function(e) {
                               setPosition(1);    
                        }}>
                            <Dash color = { position == 1 ? 'bg-[#321473]' : 'bg-slate-500'} onClick = {()=>{ setPosition(1)}} />
                        </div>
                        <div onClick={function(e) {
                               setPosition(2);    
                        }}>
                            <Dash color = { position == 2 ? 'bg-[#321473]' : 'bg-slate-500'} onClick = {()=>{ setPosition(2)}} />
                        </div>
            </div>
          
            
        </div>
      <Footer />
    </>
    )
}
export default RelationToOthers;
