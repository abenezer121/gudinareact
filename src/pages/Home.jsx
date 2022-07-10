


import { React, useState, useEffect, useRef } from "react";

import TimeLine3 from "../components/timeline/TimeLine3";
import TimeLine2 from "../components/timeline/TimeLine2/TimeLine2";
import TimeLine1 from "../components/timeline/TimeLine1";
import Choice from "../components/Filter/Choice/Choice";
import ministry from "../assets/ministry.jpg";
import funeral from "../assets/funeral.JPG";
import gudinatumsa1 from "../assets/gudinatumsa1.JPG";
import gudinatumsa4 from "../assets/gudinatumsa4.png";
import Footer from "../components/Footer";
import HorizontalScroll from 'react-scroll-horizontal'
import years from "./../assets/year.json"
import OwlCarousel from 'react-owl-carousel';

import book1 from "../assets/book1.jpg";
import book2 from "../assets/book2.jpg";
import book3 from "../assets/book3.jpg";
import book4 from "../assets/book4.jpg";
import book5 from "../assets/book5.jpg";
import {
  PhoneIcon,
  ArrowSmRightIcon,
  ArrowDownIcon,
  AcademicCapIcon,
  PlusIcon,
   
                          
} from "@heroicons/react/outline";
 

import { ChipIcon, SupportIcon } from "@heroicons/react/solid";
import Dash from "../components/Carousel/Dash";
import Carousel from "../components/Carousel/Carousel";
import nature from "./../assets/nature.jpg";
import gudinatumsa3 from "./../assets/gudinatumsa1.png";
import { useInView } from "react-intersection-observer";
import logo from "./../assets/logo.png"

import YouTube from "react-youtube";
import getYouTubeID from "get-youtube-id";

    const TimeLineElement = (props) => {
    return (
         <div className="super-box  flex flex-col items-center justify-center text-white  ">
              <div className="box flex flex-col items-center">
                  <p className="hiddentext ">{ props.name}</p>
              </div>
              <div className="icon">
                  <h2 className="text-4xl font-bold yeartext text-white " style={{ fontFamily: "Odibee Sans"  ,transform: `translateY(${-props.offsetYOther}px) translateX(${-props.offsetXOther}px)`, }}>{props.year}</h2>
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
              {(firstVisible == true ) ?
               <p className="fixed top-1/2 -rotate-90 capitalize text-white">{text}</p>: <p className="fixed top-1/2 -rotate-90 text-black capitalize">{text}</p>}
            
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
              <div className=" fixed right-0 top-1/2  flex flex-col mr-10">
                {               text == "INTRODUCTION" ? dot("bg-orange-200") : dot("bg-white")}
                             {text == "CHILDHOOD" ? dot("bg-orange-200") : dot("bg-white")}
                                  {text == "EARLY LIFE" ? dot("bg-orange-200") : dot("bg-white")}
                                  {text == "TimeLine" ? dot("bg-orange-200") : dot("bg-white")}
              </div>
            </div>
          </div>

          <div
            ref={second}
            className="w-full h-full flex flex-col items-center bg-[#321473]  "
          >
            <div className="my-auto w-[60%]" >
              <div className=" mx-auto my-10   relative">
                <p  data-aos="fade-up"
                  className="text-lg text-center"
                  style={{
                    transform: `translateY(${offsetYOther}px) translateX(${offsetXOther}px)`,
                  }}
                >
                  Gudina's ChildHood
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
                    Gudina Tumsa was born in 1929 in Bodji Wollega, Ethiopia. He
                    was born to Mrs.Nassissie Chiracho and Mr. Tumsa Silga.
                    Prior to Gudina Tumsa’s birth his mother had six children,
                    sadly all of them died. Thus, when Gudina the “seventh
                    child” was born she called him Gudina an Oromo word which
                    means “growth”, because she wanted him to survive. It is
                    ironic how Gudina’s name became his character, as H.E
                    Emmanuel Abraham described him The ironic part about his
                    name didn’t stop at his character but was seen in his height
                    as he grew to be two meters tall or 6 foot 7 inches. Gudina
                    was also the first in his family to get an education, and he
                    went on to lead an exceptional life. It is not an
                    exaggeration to say Gudina’s name was a prophetic utterance
                    as growth became the defining theme of his life
                  </ReadMore>
                </h2>
              </div>
            </div>
          </div>

          {/*  */}
          <div  className="text-black bg-white lifeimages">
            <div className=" w-full  flex  relative m-auto text-black bg-white bg-slate-300">
              <div className="mx-auto my-10 w-[60%]  relative  ">
                <div className="grid md:grid-cols-1 lg:grid-cols-2 w-full h-full">
                  <div className="mx-20">
                    <h1 className="text-4xl font-bold"   data-aos="fade-up">Life of Gudina Tumsa</h1>

                    <h2 className="mt-20">
                      <p   data-aos="fade-up">
                        Gudina Tumsa was a great man of prayer, through his
                        prayers he was able to discern what God’s will was for
                        him. In 1955 he was offered a promotion in the Teferi
                        Mekonen hospital but he chose to resign from his job as
                        a dresser and take theological training and serve as a
                        pastor as he believed it was God’s calling for him.
                        Because of this Gudina moved back to Nedjo and he joined
                        what was known as the second pastoral course in 1955.
                      </p>
                    </h2>
                  </div>

                  <div
                    className=" "
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
              <div className="mx-auto my-10 w-[60%]   relative">
                <div className="grid md:grid-cols-1 lg:grid-cols-2 w-full h-full">
                  <img
                    src={gudinatumsa1}
                    className="w-[90%] h-[600px] "
                    alt="nature"
                    style={{
                      transform: `translateY(${offsetYOther}px) translateX(${offsetXOther}px)`,
                    }}
                  />
                  <div className="mx-20 mt-3">
                    <h1 className="text-4xl font-bold "   data-aos="fade-up">Early Life</h1>

                    <h2 className="text-left mt-20"   data-aos="fade-up">
                      <ReadMore>
                        Gudina’s family were uneducated farmers who followed
                        traditional Oromo religion. Gudina’s family worshiped
                        “Waqaa Guracha,” a pagan God. Gudina himself was
                        expected as the eldest to follow in his uncle’s
                        footsteps and become the village qallu (witch doctor).
                        In his early life Gudina despised his uncle’s lifestyle.
                        The qallu uncle was a pedophile who accepted young girls
                        as payment for the services he gave to their parents.
                        Growing up Gudina witnessed the demonic acts committed
                        by his uncle and could not come to peace with the
                        horrible things he had seen. When Gudina was around the
                        age of 10 he began attending school in his village where
                        he heard the gospel of Jesus Christ from his teachers.
                        Through this Gudina Tumsa accepted the gospel of Jesus
                        Christ and began to believe in the liberating power of
                        the gospel from evil spirits. After accepting Jesus
                        Christ as his Lord and Savior, Gudina Tumsa went to his
                        uncle’s home and cut down the ritual "Hommi Tree'' The
                        tree was fabled to host the spirit that possessed his
                        uncle. After this Gudina took the persecution of his
                        family and the people in his village but his new found
                        faith in Christ urged him to preach the power that
                        liberated him to them. As Gudina completed his 4th grade
                        education his teacher Negessa Fayissa urged him to
                        continue his education in Nedjo Town which was 33km.
                        There he was admitted to a boarding school where two
                        missionaries nurtured his spiritual life. Gudina Tumsa
                        was filled with such Holy Zeal that every weekend he
                        would go into town and preach the gospel to the
                        townspeople. He stayed in Nedjo from the 4th to the 6th
                        grade and later moved to Nekemte which is 184 km away
                        from Nedjo town to continue his education. There he had
                        little support so he began working at the Teferi Mekonen
                        hospital as a gardener and later as a translator for the
                        missionary doctors and nurses. He was then admitted into
                        the nursing school at the Teferi Mekonnen Hospital where
                        he was trained and graduated as a dresser in 1952. As a
                        trainee at the hospital Gudina Tumsa met his spouse
                        Tsehay Tolessa and they were married in 1951.
                      </ReadMore>
                    </h2>
                  </div>
                </div>
              </div>
              </div>
              
              <div  className="w-full h-[20%]">
                    <OwlCarousel className='owl-carousel overflow-hidden'  margin={10} >
                        <div className='h-[500px] '>  <img src={book1} alt='book1' className="ml-[40px] mr-[20px]"  /></div>
                        <div className='h-[400px]'> <img src={book1} alt='book2' className="ml-[60px] " /> </div>
                        <div className='h-[400px]'> <img src={book1} alt='book3' className="ml-[80px]" /></div>
                        <div className='h-[400px]'> <img src={book1} alt='book3' className="ml-[100px]" /></div>
                        <div className='h-[400px]'> <img src={book1} alt='book3' className="ml-[120px]" /></div>
                    </OwlCarousel>
            </div> 
            <div className=" w-full  flex text-black bg-white relative m-auto">
              <div className="mx-auto my-10 w-[60%]   relative">
                <div className="grid md:grid-cols-1 lg:grid-cols-2 w-full h-full">
                  <div className="mx-20">
                    <h1 className="text-4xl font-bold"   data-aos="fade-up">
                      Beginning of Ministry
                    </h1>

                    <h2 className="mt-20"   data-aos="fade-up">
                      <ReadMore>
                        Gudina Tumsa was a great man of prayer, through his
                        prayers he was able to discern what God’s will was for
                        him. In 1955 he was offered a promotion in the Teferi
                        Mekonen hospital but he chose to resign from his job as
                        a dresser and take theological training and serve as a
                        pastor as he believed it was God’s calling for him.
                        Because of this Gudina moved back to Nedjo and he joined
                        what was known as the second pastoral course in 1955.
                        During his time in Nedjo Gudina Tumsa developed two
                        habits: reading theological books and reflecting on the
                        factors that negatively affect the lives of people.
                        Gudina Tumsa would also serve in a Nekmete congregation
                        as the first Ethiopian Pastor. During his time of
                        shepherding the Nekemte congregation he would walk on
                        foot or ride a mule to visit places of preaching,
                        encourage the churches and he was also known for
                        advocating for the common people to educate themselves.
                        While serving in Nekemte Gudina Tumsa and an influential
                        member in the Nekemte congregation got into a quarrel on
                        Christian ethics. Soon it was evident that Gudina Tumsa
                        was alone in his opinion, then the ECMY sent Gudina
                        Tumsa to minister in Kambata, Gudina accepted the
                        assignment and left his Children behind to go and serve.
                        There Gudina found a lot of success and was able to
                        accomplish many things. The people of that area loved
                        Gudina as he was humble and when he went around to
                        minister he would not separate himself from the people.
                        Gudina during his time there was described by some as a
                        strong preacher and teacher and for this reason some
                        referred to him as their Billy Graham. When Gudina was
                        ousted from the Nekemte congregation one foriegn
                        missionary had sided with Gudina’s opinion. Gudina’s
                        stance and unfearful approach left an impression on this
                        missionary, that impression led to the missionary
                        petitioning the ECMY to send Gudina to the US to get an
                        education. After his service in Kambata Gudina was
                        offered the opportunity to further his education in the
                        US. After much prayer, especially with his wife, Gudina
                        left his five children and went to the United States to
                        study and receive a master’s of divinity degree. After
                        three years of education in the U.S he returned to
                        Ethiopia and was appointed as the General Secretary of
                        the ECMY. (1966-1979).
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
                    <h1 className="text-4xl font-bold"   data-aos="fade-up">Death</h1>

                    <h2 className="text-left mt-20"   data-aos="fade-up">
                      <ReadMore>
                        Prior to his death Gudina Tumsa was arrested twice by
                        the Derg government on no charges or crimes committed.
                        The Derg government arrested Gudina Tumsa, because they
                        feared that his challenges would hurt their
                        international image. They started by inviting him to
                        join the government on a good will tour in Europe. To
                        show the world that the Derg was not violating human
                        rights and persecuting religious groups. Gudina refused
                        and chose to speak the truth. He was then arrested the
                        first time on October 11, 1978 and the second time  on
                        June 1, 1979. The second arrest was probably the hardest
                        arrest for Gudina as his child Lensa was arrested with
                        him. The Derg threatned him, through his daughter
                        telling him “we will torture her infront of you.” But
                        Gudina was not phased by it and replied “crucify her
                        infront of me if you want I am not going to change the
                        truth”. After his release Gudina was offered an
                        opportunity to flee out of the country he refused this
                        opportunity, Gudina’s response was something along the
                        lines of “How can I leave my church and my country at
                        this crucial time?” His final arrest was on July 28th,
                        1979, after finishing a Bible Study in the Urael Mekane
                        Yesus Church Gudina Tumsa and his wife were returning
                        home. On their way home their car was stopped by heavily
                        armed men, he was removed from the vehicle and walked
                        silently away with the men. He was then taken to the Old
                        Palace where Mengistu Hailemariam and his comrades were
                        having a party. There he was stripped of his clothes and
                        strangled to death, thus becoming a martyr for the
                        gospel of Jesus Chirst. For 13 years no one knew the
                        whereabouts of Gudina Tumsa, and his family lived in the
                        hope that he was still alive. But in 1992 after the Derg
                        government had fallen his body was found buried in the
                        Old Palace of Ethiopia. 
                      </ReadMore>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            </div>

            <div className="w-full h-[25%] mb-20 flex items-center  relative  "   data-aos="fade-up">
              <div className="h-full w-[70%] mx-auto bg-gray-900/90 ">
                   <img className='w-full h-full object-cover mix-blend-overlay' src={nature} alt="/" />
                </div>
                <div className="absolute ml-[20%] md:ml-[20%] lg:ml-[35%] ">
                     <h3
                        className="text-4xl font-bold  text-center text-white "
                        style={{
                        fontFamily: "Odibee Sans"}}>
                                  “A man of strong character, physically, mentally and
                    </h3>
                    <h3
                        className="text-4xl font-bold  text-center text-white "
                        style={{
                        fontFamily: "Odibee Sans"  }}>
                        {" "}
                        spiritually.” - H.E Emmanuel Abraham
                    </h3>
                </div>
             
            </div>

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
