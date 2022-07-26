import React , {useState , useEffect} from 'react';

import './../../assets/css/homepagegallery.css'
import one from "./../../assets/image/HomePagePictures/homepage1.jpg"
import two from "./../../assets/image/HomePagePictures/homepage2.jpg"
import three from "./../../assets/image/HomePagePictures/homepage3.jpg"
import four from "./../../assets/image/HomePagePictures/homepage4.jpg"
import five from "./../../assets/image/HomePagePictures/homepage5.jpg"
import six from "./../../assets/image/HomePagePictures/homepage6.jpg"
import seven from "./../../assets/image/HomePagePictures/homepage7.jpg"


const FlexImage = () => {
    const [position , setPosition] = useState(0)
    useEffect(() => { 
        let timer = setTimeout(function () { handlePosition(1) }, 2000);
        return () => { clearTimeout(timer) }
    })
    
    const handlePosition = (i) => { 
                if (position == 5) setPosition(0);
                else  setPosition(position + 1);        
    }
    
  

   
  return (

        <div class="homepageimagecontainer space-x-2 relative m-auto  my-10">
        <div class="homepagebox" style={position == 0 ? { flexGrow : "4" } : {}}></div>
        <div class="homepagebox" style={position == 1 ? { flexGrow : "4" } : {}}></div>
            <div class="homepagebox" style={position == 2 ? { flexGrow : "4" } : {}}></div>
            <div class="homepagebox boximage3" style={position == 3 ? { flexGrow : "4" } : {}}></div>
             <div class="homepagebox boximage4" style={position == 4 ? { flexGrow : "4" } : {}}></div>
            <div class="homepagebox boximage5" style={position == 5 ? { flexGrow : "4" } : {}}></div>
        </div>


  );
}

export default FlexImage;


