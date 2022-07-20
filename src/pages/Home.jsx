


import { React, useState, useEffect, useRef } from "react";

import TimeLine3 from "../components/timeline/TimeLine3";
import ministry from "../assets/image/ministry.jpg";
import funeral from "../assets/image/funeral.JPG";
import gudinatumsa1 from "../assets/image/gudinatumsa1.JPG";
import gudinatumsa4 from "../assets/image/gudinatumsa4.png";
import Footer from "../components/Footer/Footer";
import HorizontalScroll from 'react-scroll-horizontal'
import years from "./../assets/data/year.json"
import OwlCarousel from 'react-owl-carousel';
import {ArrowDownIcon,} from "@heroicons/react/outline";
import nature from "./../assets/image/nature.jpg";
import { useInView } from "react-intersection-observer";
import getYouTubeID from "get-youtube-id";
import homepage1 from "./../assets/image/HomePagePictures/homepage1.jpg";
import homepage2 from "./../assets/image/HomePagePictures/homepage2.jpg";
import homepage3 from "./../assets/image/HomePagePictures/homepage3.jpg";
import homepage4 from "./../assets/image/HomePagePictures/homepage4.jpg";
import homepage5 from "./../assets/image/HomePagePictures/homepage5.jpg";
import homepage6 from "./../assets/image/HomePagePictures/homepage6.jpg";
import homepage7 from "./../assets/image/HomePagePictures/homepage7.jpg";
import HomePageQuote from "../components/Carousel/HomePageQuote";

const TimeLineElement = (props) => {
    return (
         <div className="super-box  flex flex-col items-center justify-center   ">
              <div className="box flex flex-col items-center">
                  <p className="hiddentext text-black">{ props.name}</p>
              </div>
              <div className="icon">
                  <h2 className="text-4xl font-bold  yeartext " style={{ fontFamily: "Odibee Sans"  ,transform: `translateY(${-props.offsetYOther}px) translateX(${-props.offsetXOther}px)`, }}>{props.year}</h2>
              </div>
          
        </div>
      )
}

const Home = () => {
  const [text, setText] = useState("INTRODUCTION");
  const { ref: first, inView: firstVisible } = useInView();
  const { ref: second, inView: secondVisible } = useInView();
  const { ref: third, inView: thirdVisible } = useInView();
  const { ref: fourth, inView: fourthVisible } = useInView();


  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setoffsetY] = useState(0);
  const [offsetXOther, setoffXOther] = useState(0);
  const [offsetYOther, setoffYOther] = useState(0);


    
    
  const [value , setValue] = useState(false);
  console.log(years.years)

  useEffect(() => {

      
    if (fourthVisible) {
        setText("TimeLine");
        console.log(fourthVisible)
      console.log(text);
    }
    if (firstVisible) {
      setText("INTRODUCTION");
    } else if (secondVisible) {
      setText("CHILDHOOD");
    } 

    const handleWindowMouseMove = (event) => {
      const x = (window.innerWidth - event.screenX * 3) / 90;
      const y = (window.innerHeight - event.screenY * 3) / 90;
        // setOffsetX(x);
        // setoffsetY(y);

        // setoffXOther(((window.innerWidth - event.screenX * 1) / 90))
        // setoffYOther(((window.innerHeight - event.screenY * 1) / 90))

    };
    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  });
    
    setTimeout(() => { 
        setValue(false)
    },1000)

  const dot = (color) => {
    return (
      <div className={`w-[10px] h-[10px] rounded-full ${color} mt-3`}></div>
    );
  };
  const dash = (color) => {
    return (
      <div
        className={`w-[30px] h-[4px]  -rotate-12  ${color} m-auto mt-4 mb-4`}
      ></div>
    );
  };

    
   
  return (
       <>
          {value == true ? (
              <div className="w-full h-full ">
                    {/* <div className="w-full h-full bg-[#321473] flex itemx-center relative ">
                            <div className="animate-spin w-[200px] h-[200px] m-auto border-2 border-white-600 top-1/2 left-1/2 text-q "> 
                            </div>
                        </div>
                   */}
                          
                          <div className="relative text-left mt-20 text-black w-[80%] m-auto items-center">
                              
                              <HorizontalScroll className="relative text-left mt-20 text-white w-[80%] m-auto items-center">
           <TimeLine3 year={["1992", "1993", "1994"]}
                                  text={["Gudina Tumsa was born in the village of Kambata, in the Kebbi",
                                      "Gudina Tumsa was born in the village of Kambata, in the Kebbi",
                                        "Gudina Tumsa was born in the village of Kambata, in the Kebbi"]}
                                  />
                                    <TimeLine3 year={["1992", "1993", "1994"]}
                                  text={["Gudina Tumsa was born in the village of Kambata, in the Kebbi",
                                      "Gudina Tumsa was born in the village of Kambata, in the Kebbi",
                                        "Gudina Tumsa was born in the village of Kambata, in the Kebbi"]}
                                  />
                                    <TimeLine3 year={["1992", "1993", "1994"]}
                                  text={["Gudina Tumsa was born in the village of Kambata, in the Kebbi",
                                      "Gudina Tumsa was born in the village of Kambata, in the Kebbi",
                                        "Gudina Tumsa was born in the village of Kambata, in the Kebbi"]}
                              />
        </HorizontalScroll>
                            
                </div>
                </div>
                  
             
      ) : (
         <div className="w-full h-full ">
         
          <div
            ref={first}
            className="h-full w-full  flex flex-col text-white bg-[#321473]  "
            >
              {/* {(firstVisible == true ) ?
               <p className="fixed top-1/2 -rotate-90 capitalize text-white">{text}</p>: <p className="fixed top-1/2 -rotate-90 text-black capitalize">{text}</p>} */}
            
            <div className="my-auto">
              <div className=" mx-auto my-10 w-[70%] h-[30%]  relative">
                <div class="absolute bg-opacity-60 z-10 h-full w-full flex items-center justify-center">
                  <div class="flex items-center">
                      <img
                       
                        src={gudinatumsa4}
                       
                      className="absolute right-0  mb-15 "
                      style={{
                        
                        transform: `translateY(${offsetY}px) translateX(${offsetX}px)`,
                      }}
                    />
                    <div className="flex flex-col mr-20  mix-blend-screen">
                        <h3
                          data-aos="fade-up"
                        className="text-8xl font-bold italic text-center text-white  "
                        style={{ fontFamily: "Odibee Sans" }}
                      >
                        Gudina Tumsa
                      </h3>
                        <h2
                          data-aos="fade-up"
                        className="text-6xl  text-slate-300 cursive  text-center mt-[-25px] ml-[200px] "
                        style={{ fontFamily: "Oooh Baby" }}
                      >
                        {" "}
                        Legacy
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <ArrowDownIcon className="w-7 h-7 text-white absolute bottom-0 mb-20 left-1/2 text-center animate-bounce " />
              {/* <div className=" fixed right-0 top-1/2  flex flex-col mr-10">
                {               text == "INTRODUCTION" ? dot("bg-orange-200") : dot("bg-white")}
                             {text == "CHILDHOOD" ? dot("bg-orange-200") : dot("bg-white")}
                                  {text == "EARLY LIFE" ? dot("bg-orange-200") : dot("bg-white")}
                                  {text == "TimeLine" ? dot("bg-orange-200") : dot("bg-white")}
              </div> */}
            </div>
          </div>

          <div
            ref={second}
            className="w-full h-full flex flex-col items-center bg-[#321473]  "
          >
            <div className="my-auto w-[60%]" >
              <div className=" mx-auto my-10   relative">
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
                  className="text-6xl font-bold py-6 text-center text-white "
                  style={{
                   fontFamily: "Odibee Sans" 
                  }}
                >
                  “A man of strong character, physically, mentally and
                </h3>
                <h3   data-aos="fade-up"
                  className="text-6xl font-bold py-6 text-center text-white "
                  style={{
                   fontFamily: "Odibee Sans" 
                  }}
                >
                  {" "}
                  spiritually.” - H.E Emmanuel Abraham
                </h3>
                <h2   data-aos="fade-up" className="text-base  text-slate-400  text-center mt-4">
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

          {/*  */}
          <div  className="text-black bg-white lifeimages">
            <div className=" w-full  flex  relative m-auto text-black bg-white bg-slate-300">
              <div className="mx-auto my-10 w-[100%] md:w-[60%]  relative  ">
                <div className="grid md:grid-cols-1 lg:grid-cols-2 w-full h-full">
                  <div className="mx-20">
                    <h1 className="text-4xl font-bold"   data-aos="fade-up">A Defender of Truth</h1>

                    <h2 className="mt-20">
                      <p   data-aos="fade-up">
                          Gudina accepted the truth at the age of ten, and from the first time that he heard it, he began to defend it.
                          The first instance of Gudina defending the truth, is when he cut down a ritual worship tree and tried to tell
                          his townspeople to accept the Gospel. His defense of this truth continued during his pastoral service in Nekemte when
                          he clashed with a Church elder who practiced infidelity, he defended the truth again when he stood up against covert
                          colonial practices seen in his criticism of certain Western Mission Organizations. He zeal for truth is seen again when
                          he refused a liturgical prayer– A prayer that is read to glorify the Emperor and ensure the continuity of his reign without
                          any consideration for justice– Gudina believed in praying for the nation and its leader, but the prayer he wanted to pray for the emperor
                          was one of repentance on behalf of those facing injustice. The biggest stance for the truth that Gudina took was when he refused to deny
                          that the Derg–A socialist Ethiopian regime– was oppressing human and religious rights. This was his last and most notable defense of the truth.
                          This stance made him lose his freedom, family and even his life. Gudina’s fervor for defending the truth made him a martyr for Christ
                      </p>
                    </h2>
                  </div>

                  <div
                    className=""
                    style={{
                      transform: `translateY(${offsetYOther}px) translateX(${offsetXOther}px)`,
                    }}
                  >
                    <iframe
                      //
                      width="100%"
                      height="350"
                      src={`https://www.youtube.com/embed/${getYouTubeID(
                        "https://www.youtube.com/watch?v=tIzP_D8-Y28"
                      )}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Embedded youtube"
                    />
                  </div>
                </div>
                                  </div>
                                 
              
            </div>
            <div className=" w-full  flex  relative m-auto text-black bg-white ">
              <div className="mx-auto my-10 w-[100%] md:w-[60%]   relative">
                <div className="grid md:grid-cols-1 lg:grid-cols-2 w-full h-full">
                  <img
                    src={gudinatumsa1}
                    className="mx-auto w-[70%] h-[400px] "
                    alt="nature"
                    style={{
                      transform: `translateY(${offsetYOther}px) translateX(${offsetXOther}px)`,
                    }}
                  />
                  <div className="mx-20 mt-3">
                    <h1 className="text-4xl font-bold "   data-aos="fade-up">Unconditional Faith</h1>

                    <h2 className="text-left mt-20"   data-aos="fade-up">
                      <ReadMore>
                        Whether you are a Chrisitian or not, Gudina's story can resonate with you. For believers his story demonstrates the ultimate form of faithfulness in sacrificing himself for his Lord. For nonbelievers his actions of fighting against injustice, racism, colonialism and all forms of oppressive man made structures.  You cannot help but be astonished at his unconditional faith regardless of all the challenges in his life. To list a few things that Gudina had to sacrifice and persevere through to keep the faith: as a young boy at the age of ten he had to flee his home due to family opposition, having to starve and work as a domestic servant, denying a comfortable life as a medical doctor to become an evangelist, losing two children, and he continued his unconditional faithfulness even when God predestined him for martyrdom. People of all faiths can relate to Gudina, and follow his example of dedication–that dedication went to the point of death. 
                        Gudina was not only a faithful Chrisitan in his death but also in his life. As a teenager he began preaching in the marketplace. He would take his trumpet, stand by a hill near by the bustling market and play. People were drawn to his ability and an instrument they had never seen before. Once the market people gathered around him, he would set down his trumpet, tell the people to be seated and begin witnessing the Gospel of Jesus Christ. In his life he served in the Church as a missionary, evangelist, theologian and Church leader. The international recognition Gudina received in 2004 posthumously is a testament to his unconditional faithfulness. He was awarded the Christus Lux Mundi Award–the witness and service of persons who have manifested the light of Christ during a long and distinguished career either, in the pastoral office or a lay person– by the Luther Seminary in St.Paul Minnesota.

                      </ReadMore>
                    </h2>
                  </div>
                </div>
              </div>
              </div>
              
              <div  className="w-full h-[20%]">
                    <OwlCarousel className='owl-carousel   space-x-4 overflow-hidden'  margin={10} loop autoplay = {true} autoplayTimeout = {3000} >
                        <div className='h-[500px] '>  <img src={homepage1} alt='book1' className=""  /></div>
                        <div className='h-[400px]'> <img src={homepage2} alt='book2' className="" /> </div>
                        <div className='h-[400px]'> <img src={homepage3} alt='book3' className="" /></div>
                        <div className='h-[400px]'> <img src={homepage4} alt='book3' className="" /></div>
                        <div className='h-[400px]'> <img src={homepage5} alt='book3' className="" /></div>
                        <div className='h-[400px]'> <img src={homepage6} alt='book3' className="" /></div>
                        <div className='h-[400px]'> <img src={homepage7} alt='book3' className="" /></div>
                    </OwlCarousel>
            </div> 
            <div className=" w-full  flex text-black bg-white relative m-auto">
              <div className="mx-auto my-10 w-[100%] md:w-[60%]   relative">
                <div className="grid md:grid-cols-1 lg:grid-cols-2 w-full h-full">
                  <div className="mx-20">
                    <h1 className="text-4xl font-bold"   data-aos="fade-up">
                      Everlasting Love
                    </h1>

                    <h2 className="mt-20"   data-aos="fade-up">
                      <ReadMore>
                        Gudina’s story consists of many loves such as Christ, the Church, the Nation, his wife and family. His greatest love was the Lord Jesus Christ, it is the love that saved him from eternal damnation.The love of the gospel is what made Gudina into the man that many admire today. Allow us to paint a picture of what Gudina’s life would have been, had he not accepted the love of Christ into his heart: Gudina was born in a rural village, and grew up as an unbelieving, uneducated, farmer. Had he stayed there, Gudina would have become a Witch Doctor following in the footsteps of his uncle, bringing souls unto eternal damnation. But the love of the gospel turned him into the opposite and saved him from all this and more. It made him a great man, who lived to serve a purpose greater than himself. The Gospel took him out of his rural village and sent him around the world. Just as Chrsit commanded in (Acts 1:8) “But you will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth.”  

                        The love he had for his Church was tied to the love he had for his country. What he wished for the Church he also wished for his nation. Whether that be, peace, unity, self-reliance, prosperity and service to the people. His love for his family was extraordinary. The Second most important love in his life was his wife. This love was an embodiment of Ephesians 5:22-23–where Paul compares the union of husband and wife to that of Christ and the Church– Their marriage was unique in how Gudina, respected Tsheay, how he consulted her on all decisions– becoming a minister based on her recommendation– and how she sacrificed to help him in his ministry. Their marriage was one that was purposeful and that purpose was to serve Christ. His love for his family was just as unique for his time as he spent time with his Children and was willing as a youngman to take the burden of raising his orphaned siblings.
                        Throughout Gudina’s life his love for Christ developed into his theological understanding and that theology is one of “love and justice”. A theology of love and justice in one that grants freedom to people from evil spirits and injustices; this is noticed in Gudina’s 1971 Tokyo address when he writes, “People are tormented with fear of spirits, and they want to accept the new religion of love and justice.” (Witness and Discipleship Pg.137)

                      </ReadMore>
                    </h2>
                  </div>
                  <img
                    src={ministry}
                    className="w-[90%] h-[600px] "
                    alt="nature"
                    style={{
                      transform: `translateY(${offsetYOther}px) translateX(${offsetXOther}px)`,
                    }}
                  />
                </div>
              </div>
            </div>

            <div className=" w-full  flex text-black bg-white relative m-auto ">
              <div className="mx-auto my-10 w-[60%]   relative">
                <div className="grid md:grid-cols-1 lg:grid-cols-2 w-full h-full">
                  <img
                    src={funeral}
                    className="w-[90%] h-[600px] "
                    alt="nature"
                    style={{
                      transform: `translateY(${offsetYOther}px) translateX(${offsetXOther}px)`,
                    }}
                  />
                  <div className="mx-20 mt-3">
                    <h1 className="text-4xl font-bold"   data-aos="fade-up">Persecution From Beginning to End</h1>

                    <h2 className="text-left mt-20"   data-aos="fade-up">
                      <ReadMore>
                          The theme of Gudina Tumsa’s life can be described as persecution due to his faith. Gudina’s
                          life can be compared to that of the early Chrisitans, the Bible verse that can describe his journey of faith is found in Romans 8:26,
                          “For your sake we face death all day long; we are considered as sheep to be slaughtered.” Gudina began facing persecution the moment he
                          accepted Christ into his life. Living in a non-christian environment his new found faith was not welcomed by his family. The first instance
                          of persecution in his life came when he had to run away from his home– around the age of 10– to save himself. The second instance of Gudina facing persecution,
                          is found in the part of his life where his own Church that he was pastoring turned against him, and removed him from pastorship. In that same time span someone
                          was sent to assassinate Gudina for unknown reasons (most likely because of the disagreement he had with a wealthier member of the congregation).
                          He faced persecution in the form of racism, during his time in the US and his notable visit to South Africa in the early 1970’s; where he refused
                          to submit to the laws of apparthied. Gudina’s faith began and ended with persecution,  for the sake of the Gospel that he protected, was faithful
                          to and loved. He was arrested multiple times, spied on in his day to day life and most of all in the end he walked silently like a lamb and was
                          slaughtered giving his life to Christ and concluding his time of persecution faithfully.
                      </ReadMore>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            </div>
          {/* <div className="h-full w-[70%] mx-auto ">
                   <img className='w-full h-full object-cover mix-blend-overlay' src={nature} alt="/" />
                </div> */}
            <HomePageQuote />

            <div
            ref={fourth}
            className="w-full h-full flex flex-col items-center  bg-[#321473]  "
          >
            <div className="my-auto w-[100%]">
                <div className=" mx-auto my-10   ">
                   <p
                  className="text-lg text-center uppercase text-white"
                  style={{
                    transform: `translateY(${offsetYOther}px) translateX(${offsetXOther}px)`,
                    }}
                      data-aos="fade-up"
                >
                  TimeLine
                </p>
                {dash("bg-white")}
                <h3
                    className="text-2xl py-6 text-center text-white "
                      data-aos="fade-up"
                  style={{
                 
                  }}
                >
                  Along The Way Since 1929
                </h3>
                  {/* <div className=" w-[100%] md:w-[100%] m-auto  grid   grid-cols-1 md:grid-cols-3  " > */}
                         {/* <div className="text-center">
                          <div className = 'bg-white rounded-xl shadow-2xl w-[55%] m-auto'>
                        <div className='p-8'>
                            <PhoneIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                            <h2 className ='font-bold text-2xl my-6'>July 1979</h2>
                            <p className = 'text-grey-600 text-xl'>After his second arrest knowing that the end was near Gudina Tumsa produced a document, “On the Role of a Chiristian in a Given Society”, his last will and testament</p>
                        </div>
                      
                    </div>
                    </div> */}
                    <div className=" w-[90%] ml-[150px] md:w-[90%] m-auto  grid   grid-cols-3 md:grid-cols-6   " >
                      
                          {
                            years.years.map((item, index) => { 
                                return <TimeLineElement    data-aos="fade-up" name={item.text} year={item.year} offsetXOther ={offsetXOther} offsetYOther = {offsetYOther} />
                              
                            })
                          }
          
                    </div>
                    {/* <div className="text-center">
                          <div className = 'bg-white rounded-xl shadow-2xl w-[55%] m-auto'>
                        <div className='p-8'>
                            <PhoneIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                            <h2 className ='font-bold text-2xl my-6'>June 1 1979</h2>
                            <p className = 'text-grey-600 text-xl'>October 11, 1978 First arrest</p>
                        </div>
                      
                    </div>
                    </div> */}
                  {/* </div> */}
                 
               
              </div>
            </div>
          </div>
             <Footer/>
          
        </div>
      )}
    </>
  );
};

 
// {"text": "After his second arrest knowing that the end was near Gudina Tumsa produced a document, “On the Role of a Chiristian in a Given Society”, his last will and testament",
// "year": "July 1979"} , 
// {"text": "October 11, 1978 First arrest",
// "year":  "June 1 1979"},
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
export default Home;
