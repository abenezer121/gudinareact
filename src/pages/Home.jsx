import { React, useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import "./../assets/css/homepagegallery.css";
import Footer from "../components/Footer/Footer";
import years from "./../assets/data/year.json";
import getYouTubeID from "get-youtube-id";
import HomeIntro from "./Home/HomeIntro";
import HomePageQuote from "../components/Carousel/HomePageQuote";
import TimeLineElement from "../components/timeline/TimeLineElement";
import Intro from "./Intro";
import { motion } from "framer-motion";
import "./../assets/css/style.css";
import { getBlogData } from "../helper/api";
import ministry from "../assets/image/HomePagePictures/ministry.jpg";
import funeral from "../assets/image/HomePagePictures/homepage5.jpg";
import homepage6 from "../assets/image/HomePagePictures/homepage6.jpg";
import gudinatumsa1 from "../assets/image/HomePagePictures/gudinatumsa1.png";
import homepagecover from "../assets/image/other/qw.png";
import { Link } from 'react-router-dom';
import { BeakerIcon , NewspaperIcon } from '@heroicons/react/solid'
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

const Home = () => {
  const [text, setText] = useState("INTRODUCTION");
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setoffsetY] = useState(0);
  const [offsetXOther, setoffXOther] = useState(0);
  const [offsetYOther, setoffYOther] = useState(0);
  const [value, setValue] = useState(true);
  const [blogdata, setBlogData] = useState([]);
  const [visitNews , setVisitNews] = useState(false);

  const navigation = useSelector((state) => state.navigation);

  const handleNewsView = () => { 
    setVisitNews(!visitNews);
  }
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerPadding: "60px",
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    OnHover: false,
  };
  const pageVariant = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: "100%",
    },
  };

  const pageTransition = {
    duration: 0.5,
  };

  useEffect(() => {
    // window.scrollTo(0, 0);
    getBlogData().then((res) => {
      let _onlineCategory = [];
      for (let i = 0; i < res.length; i++) {
        _onlineCategory.push(res[i]);
      }

      setBlogData(_onlineCategory);
    });
  }, []);

  const dash = (color) => {
    return (
      <div
        className={`w-[30px] h-[4px]  -rotate-12  ${color} m-auto mt-4 mb-4`}
      ></div>
    );
  };

  return (
    <>
      {navigation.navLocation == "INTRO" ? (
        <Intro />
      ) : (
        <motion.div
          className="w-full h-screen"
          initial="out"
          animate="in"
          exit="out"
          variants={pageVariant}
          transition={pageTransition}
        >
            <div className="w-full h-full ">
              {visitNews ?
              
                blogdata.length > 0 ? 
                  <div class="flex flex-col w-[40%] md:w-[30%] h-[40%] rounded overflow-hidden bg-white shadow-lg absolute bottom-0 mb-[1%]">
              {!(
                blogdata[0].video == undefined ||
                blogdata[0].video == null ||
                blogdata[0].video == ""
              ) ? (
                <div class="rounded overflow-hidden mb-8">
                  <iframe
                    width="100%"
                    height="200"
                    src={`https://www.youtube.com/embed/${getYouTubeID(
                      blogdata[0].video
                    )}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                  />
                </div>
              ) : (
                <div className=""></div>
              )}
              <div class="px-6 py-4 h-[30%] overflow-y-auto">
                <div>
                  <h3>
                    <a
                      href="javascript:void(0)"
                      class="
                                            font-semibold
                                            text-xl
                                            sm:text-2xl
                                            lg:text-xl
                                            xl:text-xl
                                            mb-4
                                            inline-block
                                            text-dark
                                            hover:text-primary
                                            "
                    >
                      {blogdata[0].title}
                    </a>
                  </h3>
                  <p class="text-base text-body-color">{blogdata[0].content}</p>
                  {blogdata[0].link == undefined ||
                  blogdata[0].link == null ||
                  blogdata[0].link == "" ? (
                    <div></div>
                  ) : (
                    <a href={blogdata[0].link}>Visit Link</a>
                  )}
                </div>
                    </div>
                    
                    <Link to='/news'><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded"> View All News </button></Link>
            </div>
                : ("")
              
                : 
                  <div className="flex items-center absolute bottom-0 mb-[1%] w-full">
                  <NewspaperIcon className=" w-14 mr-[1%] ml-[1%]"/>
                  <div class="px-[1%] pt-[0.5%]  rounded overflow-hidden  shadow-lg bg-white  hover:text-blue-700 "  onClick={()=>{ handleNewsView()}}>
                    
                        <p className="font-bold">Click View Recent News</p>
                  </div>
                        
                </div>}
              
            
            <HomeIntro />
            <div className="flex flex-col">
              <div className="w-full h-full flex flex-col items-center bg-[#321473] ">
                <div className="my-auto w-[60%]">
                  <div className=" mx-auto my-10   relative">
                    <p
                      data-aos="fade-up"
                      className="text-lg text-center text-white"
                      style={{
                        transform: `translateY(${offsetYOther}px) translateX(${offsetXOther}px)`,
                      }}
                    >
                      The Importance of the Man, Reverend and Martyr Gudina
                      Tumsa
                    </p>
                    {dash("bg-white")}
                    <h3
                      data-aos="fade-up"
                      className="text-4xl md:text-6xl font-bold py-6 text-center text-white "
                      style={{
                        fontFamily: "Odibee Sans",
                      }}
                    >
                      “A man of strong character, physically, mentally and
                    </h3>
                    <h3
                      data-aos="fade-up"
                      className="text-4xl md:text-6xl font-bold py-6 text-center text-white "
                      style={{
                        fontFamily: "Odibee Sans",
                      }}
                    >
                      {" "}
                      spiritually.” - H.E Emmanuel Abraham
                    </h3>
                    <h2
                      data-aos="fade-up"
                      className="text-base  text-slate-400  text-center mt-4"
                    >
                      <p className="mb-[100px]">
                        Gudina Tumsa was an Ethiopian, evangelist and Church
                        leader who lived from 1929-1979. Gudina is one of the
                        most famous figures in the history of Protestant
                        Churches in Ethiopia.During his ministry in the Church
                        Gudina was able to accomplish feats that completely
                        changed the landscape of the Ethiopian Church.Not only
                        that but, he was able to speak on African and Western
                        Churches as well as the political and economic situation
                        of the world. His influence did not remain just in his
                        lifetime, but still influences this generation and
                        future generations as well.If you have opened this
                        website then you may ask why should I be interested in
                        Gudina Tumsa?Well, Gudina’s historical life story offers
                        topics of interest such as truth, faith, love, and
                        persecution. 
                      </p>
                    </h2>
                  </div>
                </div>
              </div>

              {/*  */}
              <div className="text-black flex flex-col  ">
                <div className=" w-full  flex  relative m-auto text-black ">
                  <div className="mx-auto my-10 w-[100%] md:w-[70%]  relative  ">
                    <div className="grid md:grid-cols-1 lg:grid-cols-2 w-full h-full">
                      <div className="mx-20">
                        <div data-aos="fade-up" data-aos-delay="600">
                          <h1 className="text-4xl font-bold" data-aos="fade-up">
                            Life of Rev. Gudina
                          </h1>

                          <h2 className="mt-20">
                            <p
                              className=""
                              data-aos="fade-up"
                              style={{
                                fontFamily: "montserrat",
                              }}
                            >
                              This is Gudina Tumsa’s life story, from a new
                              perspective. Told by his oldest and youngest
                              daughter.
                            </p>
                            <p
                              className=""
                              data-aos="fade-up"
                              style={{
                                fontFamily: "montserrat",
                              }}
                            >
                              From Beginning to End
                            </p>
                          </h2>
                        </div>
                        <div
                          className="mt-10"
                          data-aos="fade-up"
                          data-aos-delay="1000"
                        ></div>
                      </div>

                      <div
                        className=""
                        style={{
                          transform: `translateY(${offsetYOther}px) translateX(${offsetXOther}px)`,
                        }}
                      >
                        <div data-aos="fade-up">
                          <iframe
                            width="100%"
                            height="350"
                            src={`https://www.youtube.com/embed/${getYouTubeID(
                              "https://www.youtube.com/watch?v=XCu4EK-G680"
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
                </div>

                <div className=" w-full  flex  relative m-auto text-black bg-white ">
                  <div className="mx-auto my-10 w-[100%] md:w-[60%]   relative">
                    <div className="grid md:grid-cols-1 lg:grid-cols-2 w-full h-full">
                      <div data-aos="fade-up">
                        <img
                          src={gudinatumsa1}
                          className="w-[100%] md:w-[70%] h-[400px] md:ml-[15%]"
                          alt="nature"
                          style={{
                            transform: `translateY(${offsetYOther}px) translateX(${offsetXOther}px)`,
                          }}
                        />
                      </div>

                      <div className="mx-20 mt-3">
                        <h1 className="text-4xl font-bold " data-aos="fade-up">
                          A Defender of Truth
                        </h1>

                        <h2 className="text-left mt-20" data-aos="fade-up">
                          <ReadMore>
                            Gudina accepted the truth at the age of ten, and
                            from the first time that he heard it, he began to
                            defend it. The first instance of Gudina defending
                            the truth, is when he cut down a ritual worship tree
                            and tried to tell his townspeople to accept the
                            Gospel. His defense of this truth continued during
                            his pastoral service in Nekemte when he clashed with
                            a Church elder who practiced infidelity, he defended
                            the truth again when he stood up against covert
                            colonial practices seen in his criticism of certain
                            Western Mission Organizations. He zeal for truth is
                            seen again when he refused a liturgical prayer– A
                            prayer that is read to glorify the Emperor and
                            ensure the continuity of his reign without any
                            consideration for justice– Gudina believed in
                            praying for the nation and its leader, but the
                            prayer he wanted to pray for the emperor was one of
                            repentance on behalf of those facing injustice. The
                            biggest stance for the truth that Gudina took was
                            when he refused to deny that the Derg–A socialist
                            Ethiopian regime– was oppressing human and religious
                            rights. This was his last and most notable defense
                            of the truth. This stance made him lose his freedom,
                            family and even his life. Gudina’s fervor for
                            defending the truth made him a martyr for Christ.
                          </ReadMore>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" w-full  flex text-black bg-white relative m-auto">
                  <div className="mx-auto my-10 w-[100%] md:w-[60%]   relative">
                    <div className="grid md:grid-cols-1 lg:grid-cols-2 w-full h-full">
                      <div className="mx-20">
                        <h1 className="text-4xl font-bold" data-aos="fade-up">
                          Unconditional Faith
                        </h1>

                        <h2 className="mt-20" data-aos="fade-up">
                          <ReadMore>
                            Whether you are a Chrisitian or not, Gudina's story
                            can resonate with you. For believers his story
                            demonstrates the ultimate form of faithfulness in
                            sacrificing himself for his Lord. For nonbelievers
                            his actions of fighting against injustice, racism,
                            colonialism and all forms of oppressive man made
                            structures.  You cannot help but be astonished at
                            his unconditional faith regardless of all the
                            challenges in his life. To list a few things that
                            Gudina had to sacrifice and persevere through to
                            keep the faith: as a young boy at the age of ten he
                            had to flee his home due to family opposition,
                            having to starve and work as a domestic servant,
                            denying a comfortable life as a medical doctor to
                            become an evangelist, losing two children, and he
                            continued his unconditional faithfulness even when
                            God predestined him for martyrdom. People of all
                            faiths can relate to Gudina, and follow his example
                            of dedication–that dedication went to the point of
                            death.  Gudina was not only a faithful Chrisitan in
                            his death but also in his life. As a teenager he
                            began preaching in the marketplace. He would take
                            his trumpet, stand by a hill near by the bustling
                            market and play. People were drawn to his ability
                            and an instrument they had never seen before. Once
                            the market people gathered around him, he would set
                            down his trumpet, tell the people to be seated and
                            begin witnessing the Gospel of Jesus Christ. In his
                            life he served in the Church as a missionary,
                            evangelist, theologian and Church leader. The
                            international recognition Gudina received in 2004
                            posthumously is a testament to his unconditional
                            faithfulness. He was awarded the Christus Lux Mundi
                            Award–the witness and service of persons who have
                            manifested the light of Christ during a long and
                            distinguished career either, in the pastoral office
                            or a lay person– by the Luther Seminary in St.Paul
                            Minnesota.
                          </ReadMore>
                        </h2>
                      </div>
                      <div data-aos="fade-up">
                        {" "}
                        <img
                          src={ministry}
                          className="w-[100%] md:w-[70%]  h-[400px] "
                          alt="nature"
                          style={{
                            transform: `translateY(${offsetYOther}px) translateX(${offsetXOther}px)`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" w-full  md:flex  relative m-auto text-black bg-white  ">
                  <div className=" my-10 w-[100%] md:w-[100%]   relative">
                    {/* <FlexImage /> */}
                    <div data-aos="fade-up">
                      <img src={homepagecover} />
                    </div>
                  </div>
                </div>
                <div className=" w-full  flex text-black bg-white relative m-auto ">
                  <div className="mx-auto my-10 w-[100%] md:w-[60%]   relative">
                    <div className="grid md:grid-cols-1 lg:grid-cols-2 w-full h-full">
                      <div data-aos="fade-up" className="hidden md:flex">
                        <img
                          src={funeral}
                          className="w-[100%] md:w-[70%]  h-[600px] md:ml-[15%] "
                          alt="nature"
                          style={{
                            transform: `translateY(${offsetYOther}px) translateX(${offsetXOther}px)`,
                          }}
                        />
                      </div>

                      <div className="mx-20 mt-3">
                        <h1 className="text-4xl font-bold" data-aos="fade-up">
                          Everlasting Love
                        </h1>

                        <h2 className="text-left mt-20" data-aos="fade-up">
                          <ReadMore>
                            The theme of Gudina Tumsa’s life can be described as
                            persecution due to his faith. Gudina’s life can be
                            compared to that of the early Chrisitans, the Bible
                            verse that can describe his journey of faith is
                            found in Romans 8:26, “For your sake we face death
                            all day long; we are considered as sheep to be
                            slaughtered.” Gudina began facing persecution the
                            moment he accepted Christ into his life. Living in a
                            non-christian environment his new found faith was
                            not welcomed by his family. The first instance of
                            persecution in his life came when he had to run away
                            from his home– around the age of 10– to save
                            himself. The second instance of Gudina facing
                            persecution, is found in the part of his life where
                            his own Church that he was pastoring turned against
                            him, and removed him from pastorship. In that same
                            time span someone was sent to assassinate Gudina for
                            unknown reasons (most likely because of the
                            disagreement he had with a wealthier member of the
                            congregation). He faced persecution in the form of
                            racism, during his time in the US and his notable
                            visit to South Africa in the early 1970’s; where he
                            refused to submit to the laws of apparthied.
                            Gudina’s faith began and ended with persecution, 
                            for the sake of the Gospel that he protected, was
                            faithful to and loved. He was arrested multiple
                            times, spied on in his day to day life and most of
                            all in the end he walked silently like a lamb and
                            was slaughtered giving his life to Christ and
                            concluding his time of persecution faithfully.
                          </ReadMore>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="  w-full  flex text-black bg-white relative m-auto ">
                  <div className="mx-auto my-10 w-[100%] md:w-[60%]   relative">
                    <div className="grid md:grid-cols-1 lg:grid-cols-2 w-full h-full">
                      <div className="mx-20 mt-3">
                        <h1 className="text-4xl font-bold " data-aos="fade-up">
                          Persecution From Beginning to End
                        </h1>

                        <h2 className="text-left mt-20" data-aos="fade-up">
                          <ReadMore>
                            The theme of Gudina Tumsa’s life can be described as
                            persecution due to his faith. Gudina’s life can be
                            compared to that of the early Chrisitans, the Bible
                            verse that can describe his journey of faith is
                            found in Romans 8:26, “For your sake we face death
                            all day long; we are considered as sheep to be
                            slaughtered.” Gudina began facing persecution the
                            moment he accepted Christ into his life. Living in a
                            non-christian environment his new found faith was
                            not welcomed by his family. The first instance of
                            persecution in his life came when he had to run away
                            from his home– around the age of 10– to save
                            himself. The second instance of Gudina facing
                            persecution, is found in the part of his life where
                            his own Church that he was pastoring turned against
                            him, and removed him from pastorship. In that same
                            time span someone was sent to assassinate Gudina for
                            unknown reasons (most likely because of the
                            disagreement he had with a wealthier member of the
                            congregation). He faced persecution in the form of
                            racism, during his time in the US and his notable
                            visit to South Africa in the early 1970’s; where he
                            refused to submit to the laws of apparthied.
                            Gudina’s faith began and ended with persecution, 
                            for the sake of the Gospel that he protected, was
                            faithful to and loved. He was arrested multiple
                            times, spied on in his day to day life and most of
                            all in the end he walked silently like a lamb and
                            was slaughtered giving his life to Christ and
                            concluding his time of persecution faithfully.
                          </ReadMore>
                        </h2>
                      </div>
                      <div data-aos="fade-up">
                        {" "}
                        <img
                          src={homepage6}
                          className="mx-auto w-[100%] md:w-[90%]  h-[400px] "
                          alt="nature"
                          style={{
                            transform: `translateY(${offsetYOther}px) translateX(${offsetXOther}px)`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <HomePageQuote
              quotes={[
                "“Gudina Tumsa is “our St.Paul.” He and his wife “showed our people Jesus Christ  they shared our hunger and suffering.” -Rev. Girma Kassa”",
                "“Gudina was not afraid of anything.” -Tsheay Tolesa”",
                "“On 28 July 1979 Gudina Tumsa was abducted and killed by strangulation. His murder brought to an end the possiblity of creative and visionary theological reflection in the church.” - Øyvind M. Eide ",
              ]}
            />

            <div className="flex flex-col">
              <div className="w-full h-full flex flex-col items-center  bg-[#321473]">
                <div className="my-auto w-[100%]">
                  <div className=" mx-auto  my-10 w-[90%]  ">
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
                      style={{}}
                    >
                      Gudina Tumsa from 1929-1979
                    </h3>
                    <div className="ml-[40px] md:ml-[80px]">
                      <div className=" w-full   grid   grid-cols-2 md:grid-cols-6  gap-y-4  ">
                        {years.years.map((item, index) => {
                          return (
                            <TimeLineElement
                              data-aos="fade-up"
                              name={item.text}
                              year={item.year}
                              offsetXOther={offsetXOther}
                              offsetYOther={offsetYOther}
                            />
                          );
                        })}
                      </div>
                    </div>
                    <div className="w-[60%]  mx-auto ">
                      <div className="grid grid-cols-1 md:grid-cols-2 mt-20">
                        <div className="ml-[3%]">
                          <p className="text-white text-3xl font-bold border-b-[2px] pb-6">
                            June 1, 1979
                          </p>
                          <p className="text-white text-xl">
                            Second arrest, with his sixteen year old Lensa
                            Gudina
                          </p>
                        </div>
                        <div className="md:ml-[70px]">
                          <p className="text-white text-3xl font-bold border-b-[2px] pb-6">
                            June 1, 1979
                          </p>
                          <p className="text-white text-xl">
                            Kidnapped and Murdered by Derg Regime burial on the
                            grounds of the Old Palace
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Home;
