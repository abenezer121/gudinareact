import { React , useState , useEffect , useRef } from 'react'
import Dash from './Dash';
import { ArrowLeftIcon, ArrowRightIcon, PlayIcon } from '@heroicons/react/outline';
import nature from "../../assets/nature.jpg"
import nature2 from "../../assets/nature2.jpg";
import nature3 from "../../assets/nature3.jpg";
import video from '../../assets/video.webm';

const Carousel = (props) => {
    const [position, setPosition] = useState(0);
    const [videoIndex, setVideoIndex] = useState(-1);
    const vidRef = useRef(null);
   

    const handlePlayVideo = () => {
        setVideoIndex(position);
        vidRef.current.play();
    }
    
    useEffect(() => { 
        let timer = setTimeout(function () { handlePosition(1) }, 4000);
        return () => { clearTimeout(timer) }
    })

    //stop playing video
    const handleVideoIndex = () => setVideoIndex(-1) 
    
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
      
    const videoPlayer = () => {
        return (
            <div className="relative w-full h-full">
                 <video ref={vidRef}  className="w-full h-[100%]">
                    <source src={video} type="video/webm" />
                </video>
                {videoIndex == -1 ? 
                    <PlayIcon className="absolute text-white top-0 mt-[45%] ml-[42%]  flex m-auto w-[80px] h-[80px] " onClick={() => {
                     handlePlayVideo() }}>handlePlayVideo </PlayIcon>
                    : ""}
                
            </div>
        )
    }
     const images = [
        <img src={nature} className='w-full h-full'/>,
        videoPlayer(),
        <img src={nature3} className='w-full h-full'/>,
        videoPlayer(),
        <img src={nature2} className='w-full h-full'/>,
        <img src={nature3} className='w-full h-full'/>, 
    ]
    return (
        <>
            {videoIndex == -1 ? images[position] : images[videoIndex]}
            <div className='absolute   bottom-0 right-0 mb-5  mr-10'>
                <div className='flex  '>
                    <Dash color = { position == 0 ? 'bg-white' : 'bg-slate-500'} />
                    <Dash color = { position == 1 ? 'bg-white' : 'bg-slate-500'} />
                    <Dash color = { position == 2 ? 'bg-white' : 'bg-slate-500'} />
                    <Dash color = { position == 3 ? 'bg-white' : 'bg-slate-500'} />  
                    <Dash color = { position == 4 ? 'bg-white' : 'bg-slate-500'} /> 
                    <Dash color = { position == 5 ? 'bg-white' : 'bg-slate-500'} />    
                </div>
            </div>

            <div className='absolute   bottom-0 right-0 mb-10 mr-10 '>
                        <ArrowRightIcon className='h-5 w-5 text-white' onClick={() => { handleVideoIndex(); handlePosition(1); }}></ArrowRightIcon>
                        <ArrowLeftIcon className='h-5 w-5 text-white' onClick={() => { handleVideoIndex(); handlePosition(-1); }}></ArrowLeftIcon>
            </div>
        </>
    );
}

export default Carousel;