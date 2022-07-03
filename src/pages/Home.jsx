import { React, useState  , useEffect , useRef} from 'react';
import { ArrowLeftIcon, ArrowRightIcon, PlayIcon } from '@heroicons/react/outline';
import nature from "../assets/nature.jpg";
import nature2 from "../assets/nature2.jpg";
import nature3 from "../assets/nature3.jpg";
import TimeLine3 from '../components/timeline/TimeLine3';
import TimeLine2 from '../components/timeline/TimeLine2';
import TimeLine1 from '../components/timeline/TimeLine1';
import Choice from '../components/Filter/Choice/Choice';
import video from '../assets/video.webm';
import Dash from '../components/Carousel/Dash';

const Home = () => { 
    const [position, setPosition] = useState(0);
    const [videoIndex, setVideoIndex] = useState(-1);

    const vidRef = useRef(null);
    const handlePlayVideo = () => {
        setVideoIndex(position);
        vidRef.current.play();
    }
    
    useEffect(() => { 
        let timer = setTimeout(function () {
           handlePosition(1)
        }, 4000);
        return () => {
        clearTimeout(timer)
      }
    })
  
    const handleVideoIndex = () => {
        setVideoIndex(-1)   
    }

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
        <div className='w-full h-[calc(100%-70px)]'>
            <div className='grid md:grid-cols-1 lg:grid-cols-2 h-full'>
                <div className='flex flex-col  h-full '>
                    <div className=' m-auto w-[50%]  '>
                            <h1 className='text-3xl font-bold mt-10 mb-10'> ETHIOPIA: A NEW HORIZON OF HOPE</h1>
                            <p>The wisdom taught us by our Ethiopianess is not to be overcome by temporary obstacles but rather to change the trials we face into opportunities and desirable accidents and achieve victory.</p>
                            <p className='mb-10'>-  H.E. Abiy Ahmed</p>
                      
                    </div>
                </div>
                <div className='relative h-full bg-slate-400'>
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
                </div>
            </div>

            
            {/* about section */}
          
           
            <div className='py-20 '>
                <div className='m-auto w-[20%] border-b-2 border-indigo-200 text-center '>
                    <h1 className='mt-10'>About Brillian</h1>
                    <p className=''>Meet me and my little history</p>
                 </div>
                <div className='grid md:grid-cols-1 lg:grid-cols-3 h-full flex text-left'>
                        <div className='mx-5'>
                            <p className='mt-2'>Photographers tend not to photograph what they can’t see, which is the very reason one should try to attempt it. Otherwise we’re going to go on forever just photographing more faces and more rooms and more places. Photography has to transcend description. It has to go beyond description to bring insight into the subject, or reveal the subject, not as it looks, but how does it feel. The camera would miss it all. There are no bad pictures; that's just how your face looks sometimes. A picture is a secret about a secrets, the more it tells you the less you know, and feel.</p>
                            <p className='mt-2'>He was right. John Loengard, the picture editor at Life, always used to tell me, ”If you want something to look interesting, don’t light all of it.Taking pictures is savoring life intensely, every hundredth of a second. For me, the camera is a sketch book, an instrument of the best intuitions.</p>
                        </div>
                        <div className='mx-5'>
                            <p className='mt-2'>Photography is a magical kind of art that allows people to preserve time and moments, and to describe the world the way they see it and loves.</p>
                            <p className='mt-2'>For me, the subject of the picture is always more important than the picture. A photograph is a click away. A good photographer is a hundred clicks away and a better one, a thousand clicks away for photography love photos and we make.</p>
                            <p className='mt-2'>I am a professional photographer by trade and an amateur photographer by vocation. If only I had thought of a Kodak! I could have flashed that glimpse of the Under-world in a second, and examined for more best and nice photographers.</p>
                            <p className='mt-2'>Women that can work a camera with ease often work men just as effortlessly for both require the same commitment to vanity and manipulations.</p>
                        </div>
                        <div  className='mx-5'>
                            <p className='mt-2'>For the photograph's immobility is somehow the result of a perverse confusion between two concepts: the Real and the Live: by attesting that the object has been real, the photograph surreptitiously induces belief that it is alive for us.</p>
                            <p className='mt-2'>Both those taking snaps and documentary photographers, however, have not understood 'information.' What they produce are memories.</p>
                            <p className='mt-2'>When people look at my pictures I want them to feel the way they do when they want to read a line of a poem twice. Today everything exists to end in a photograph. When I look at my old pictures, all I can see is what I used to be but am no longer. I think What I can see is what I am not.</p>
                        </div>
                </div>
            </div>
             {/* <TimeLine1 /> */}
      <TimeLine2 />
            {/*  <TimeLine3/> */}
            
            {/* the filter goes here */}
            <div className='flex w-full mb-20 '>
                <div className='w-[20%] sm:w-[15%]  '>
                    

                    <div className='mx-2 h-[200px]  w-[100%] mx-2'>
                        <div className='h-[70px] z-10 bg-slate-100 flex items-center sticky top-0 z-50   '>
                            <p className='mx-2'>Filter</p>
                        </div>
                        <div className=' h-[200px] overflow-auto'>
                                <p className=' mt-5'>Refine by</p>
                                <p className='mb-3'>Categories</p>
                                <Choice name='Category 1'/>
                                <Choice name='Category 2' />
                                <Choice name='Category 3' />
                                <Choice name='Category 4' />
                                <Choice name='Category 5' />
                                <Choice name='Category 6' />
                                <Choice name='Category 7' />
                                <Choice name='Category 1'/>
                                <Choice name='Category 2' />
                                <Choice name='Category 3' />
                                <Choice name='Category 4' />
                                <Choice name='Category 5' />
                                <Choice name='Category 6' />
                                <Choice name='Category 7' />
                        </div>
                        
                        
                    </div>
                </div>
                <div className='w-[70%] ml-20'>
                    <div className=" bg-gray-400 rounded-lg shadow-xl  px-6 py-4 w-full">
                        <h3 className="mb-3 font-bold text-gray-800 text-xl">Lorem Ipsum</h3>
                        <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <p>asdfg</p>
            </div>
        </div>
    );
}
export default Home;