import { React, useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { ArrowDownIcon, ArrowRightIcon } from "@heroicons/react/outline";
import { useInView } from "react-intersection-observer";
import { Link } from 'react-router-dom';
import Footer from "../components/Footer/Footer";
import { idiology } from "./../assets/data/idiologydata/index"
import { _idiology } from "../redux/actions/navigation";
const  titleText = (text) => {
    return (
        
        <p className=" ideologyText text-black text-3xl sm:text-6xl mx-10 font-bold my-3 mt-[60px]">{text.split(" ").map(word => {
          return <span>{`${word} `}</span>;
        })}</p>
    )
}


const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 500) : text}
      <div className="flex flex-col">
        <span
          onClick={toggleReadMore}
          className="read-or-hide uppercase text-sm"
        >
          <p className="mt-10 uppercase">
            {isReadMore ? "+ read more" : "- show less"}
          </p>
        </span>
      </div>
    </p>
  );
};

 const dash = (color) => {
    return (
      <div
        className={`w-[30px] h-[4px]  -rotate-12  ${color} m-auto mt-4 mb-4`}
      ></div>
    );
  };

const Idiology = () => {
  const [text, setText] = useState("IDIOLOGIES");
  const { ref: first, inView: firstVisible } = useInView();
  const { ref: second, inView: secondVisible } = useInView();
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setoffsetY] = useState(0);
  const [offsetXOther, setoffXOther] = useState(0);
  const [offsetYOther, setoffYOther] = useState(0);
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [value, setValue] = useState(false);

  const dispatch = useDispatch()
  
    useEffect(() => {
      window.scrollTo(0, 0);
      dispatch(_idiology())
    }, []);
  

  return (
    <>
      {value == true ? (
        <div className="w-full h-full  ">
     
        </div>
      ) : (
          <div className="w-full h-full">
            <div className="flex flex-col">
            <div className="w-full h-full flex flex-col items-center bg-[#750085] pt-[10%] ">
            <div className="my-auto w-[60%]" >
              <div className=" mx-auto my-[130px]   relative">
                <p  data-aos="fade-up"
                  className="text-lg text-center text-white"
                  style={{
                    transform: `translateY(${offsetYOther}px) translateX(${offsetXOther}px)`,
                  }}
                >
                  The Importance of the Man, Reverend and Martyr Gudina Tumsa
                </p>
                {dash("bg-white")}
                <h3   data-aos="fade-up"
                  className="text-4xl md:text-6xl font-bold py-6 text-center text-white "
                  style={{
                   fontFamily: "Odibee Sans" 
                  }}
                >
                  His Theology and Ideology
                </h3>
                {/* <h3   data-aos="fade-up"
                  className="text-4xl md:text-6xl font-bold py-6 text-center text-white "
                  style={{
                   fontFamily: "Odibee Sans" 
                  }}
                >
                  {" "}
                  spiritually.” - H.E Emmanuel Abraham
                </h3> */}
                <h2   data-aos="fade-up" className="text-base  text-slate-400  text-center mt-4">
                  <p>
                        This section was inspired by the writing of Gudina Tumsa from his compiled writings—Witness and Discipleship. The section is meant to analyze Gudina’s
                        thought pattern, make it contextual to the present day and use his deep insight to minister to the future. Gudina’s thought is based on his theology but
                        his theology ministers in a holistic way to the world and with the issues that mankind faces today. We hope that those who read can find new insight and
                        solutions to build a modern and integral society
                  </p>
                </h2>
              </div>
            </div>
          </div>
                  
          <div className="w-full flex flex-col items-center bg-[#750085] pb-20  ">
            <div className="my-auto w-[80%] h-full mx-auto text-center relative bg-[#750085] ">
                  <div className=" text-center my-10   relative">
                    <ArrowDownIcon className="w-7 h-7 text-white absolute bottom-0 mb-20 left-1/2 text-center animate-bounce " />
                <p
                  className="text-lg text-center uppercase text-xm text-white font-bold mt-[100px] mb-[0px] md:mt-[1px]"
                  style={{
                    transform: `translateY(${offsetYOther}px) translateX(${offsetXOther}px)`,
                  }}
                >
                  select topics
                </p>
               
                  </div>
                   <ArrowDownIcon className="w-7 h-7 text-white absolute bottom-0 mb-20 left-1/2 text-center animate-bounce " />
                <div className="space-x-3">
                  {
                  idiology.map((item, index) => {
                    
                    return (
                      <Link to="/description" state={{
                        data: JSON.stringify({
                          title: item.title,
                          backToText: "Back To Ideology",
                          backToLink : "/idiology", 
                          quote: item.quote,
                          position : index,
                          paragrah: item.paragraph,
                          sideText: "PDF",
                          image: item.image,
                          youtube : item.youtube,
                          sideArray: [
                                  "Cost of Discipleship",
                                  "GT on Politics/Economics",
                                  "Holistic Theology"
                          ],
                          pdf : item.pdf,
                        })
                        
                        
                      }}><div data-aos={item.fadeAnimation} onClick={() => {
                          
                          localStorage.setItem('position', index);
                    }}>{titleText(item.title)}</div></Link>
                    
                    )
                  })
                }
                </div>
                   
              
                                  
            
            </div>
            </div>
            <Footer/>
            </div>
             
        </div>
      )}
    </>
  );
};




export default Idiology;


