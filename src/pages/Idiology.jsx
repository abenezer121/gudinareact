import { React, useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux'
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
              <div className="w-full h-screen flex flex-col items-center bg-[#750085] ">
            <div className="my-auto w-[60%]" >
              <div className=" mx-auto my-10   relative">
                <p  data-aos="fade-up"
                  className="text-lg text-center text-black"
                  style={{
                    transform: `translateY(${offsetYOther}px) translateX(${offsetXOther}px)`,
                  }}
                >
                  The Importance of the Man, Reverend and Martyr Gudina Tumsa
                </p>
                {dash("bg-white")}
                <h3   data-aos="fade-up"
                  className="text-6xl font-bold py-6 text-center text-black "
                  style={{
                   fontFamily: "Odibee Sans" 
                  }}
                >
                  “A man of strong character, physically, mentally and
                </h3>
                <h3   data-aos="fade-up"
                  className="text-6xl font-bold py-6 text-center text-black "
                  style={{
                   fontFamily: "Odibee Sans" 
                  }}
                >
                  {" "}
                  spiritually.” - H.E Emmanuel Abraham
                </h3>
                <h2   data-aos="fade-up" className="text-base  text-black  text-center mt-4">
                  <ReadMore>
                      Gudina Tumsa was an Ethiopian, evangelist and Church leader who lived from 1929-1979. Gudina is one of the most famous figures in the history of
                      Protestant Churches in Ethiopia.During his ministry in the Church Gudina was able to accomplish feats that completely changed the landscape of the 
                      Ethiopian Church.Not only that but, he was able to speak on African and Western Churches as well as the political and economic situation of the world.
                      His influence did not remain just in his lifetime, but still influences this generation and future generations as well.If you have opened this website 
                      then you may ask why should I be interested in Gudina Tumsa?Well, Gudina’s historical life story offers topics of interest such as truth, faith, love, and persecution. 
                  </ReadMore>
                </h2>
              </div>
            </div>
          </div>
         
                  
          <div className="w-full flex flex-col items-center bg-[#750085] pb-20 ">
            <div className="my-auto w-[80%] h-full mx-auto text-center relative bg-[#750085] ">
              <div className=" text-center my-10   relative">
                <p
                  className="text-lg text-center uppercase text-xm text-white font-bold"
                  style={{
                    transform: `translateY(${offsetYOther}px) translateX(${offsetXOther}px)`,
                  }}
                >
                  select topics
                </p>
               
                </div>
                <div className="space-x-3">
                  {
                  idiology.map((item, index) => {
                    
                    return (
                      <Link to="/description" state={{
                        data: JSON.stringify({
                          title: item.title,
                          backToText: "Back To Idiology",
                          backToLink : "/idiology", 
                          quote: item.quote,
                          paragrah: item.paragraph,
                          sideText: "OTHER TOPICS",
                          image : item.image,
                          sideArray: [
                                  "Cost of Discipleship",
                                  "GT on Politics/Economics",
                                  "Holistic Theology"
                          ],
                          pdf : item.pdf,
                        })
                        
                        
                    }}><div data-aos={item.fadeAnimation}>{titleText(item.title)}</div></Link>
                    
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


