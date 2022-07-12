import React, { useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import logo from "./../assets/logo.png";
import { Link } from "react-router-dom";
import QuoteCarousel from "./../components/Carousel/QuoteCarousel";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";

const ReadMore = ( props ) => {

  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
                  {isReadMore ? props.paragraph[0] : props.paragraph.map((item, index) => { return item })}
      <div className="flex flex-col">
        <span
          onClick={toggleReadMore}
          className="read-or-hide uppercase text-sm">
                                  <p className=" mt-10 uppercasetext-black w-[21%] border-2 border-slate-400 font-bold py-2 px-4 ">{isReadMore ? "read more" : "show less"}</p>
          
        </span>
      </div>
    </p>
  );
};
const Page2 = () => {
  const location = useLocation();
      
  return (
    <div className="w-full h-full">
      <div className="flex f-full justify-between items-center w-full py-10">
        <img
          src={logo}
          className="ml-10 text-black"
          style={{ width: "50px", height: "50px" }}
        />
        <Link to="/idiology">
          <div className="flex h-full  items-center uppercase">
            <p className="mr-10 text-center align-center mt-3 font-medium">
              Back To Idiology{" "}
            </p>
            <ArrowLeftIcon className="mr-20 w-5 h-5 font-medium" />
          </div>
        </Link>
      </div>
        <div className="w-full">
                        <div className="w-[90%] md:w-[70%] mx-auto">
                                <div className=" grid grid-cols-1 md:grid-cols-2">
                                        <div className="hidden md:block  w-[30%]">
                                                <p className="text-sm font-medium uppercase">Other Topics</p>
                                                <p className="text-base">UX</p>
                                                <p className="text-base">Visual Design</p>
                                                <p className="text-base">Creative Direction</p>
                                                <p className="text-base">Development</p>
                                                <p className="text-base">3D Illustration</p>
                                        </div>
                                        <div className="w-[100%]">
                                                <h1 className="text-4xl font-medium">Responsibility of a Christian in a Given Society</h1>
                                                  <ReadMore paragraph={[
                                                          <p> Gudina Tumsa’s final writing is about  the Responsibility of a
                                                        Christian in a Given Society. He firmly states that writing a
                                                        Christian’s main responsibility is to serve the Lord Jesus Christ
                                                        and to know God’s will throughout every action in their life “A
                                                        Christian should stay in prayer for guidance, so that he/she knows
                                                        the will of God for any action he/she may take.” (Witness and
                                                        Discipleship Pg.10) Many Chrsitans acknowledge and agree with the
                                                        fact that serving the purpose of the Gospel is our ultimate purpose.
                                                        But Gudina Tumsa also advocated for individuals to serve their
                                                        country to their maximum capability. He believed that a christian
                                                        was born in a specific country to serve and better it. He stated
                                                        “The Christian should invest his / her money, time, knowledge and
                                                        life, as well as anything else he may treasure, in the interest of
                                                        his / her country.” (Pg.7 Wittenss and Discipleship). In general a
                                                        Chrsitan has a responsibility to the Physical/Spiritual and
                                                          God/Country.</p>,
                                                          
                                                       <p>     Gudina Tumsa’s final writing is about  the Responsibility of a
                                                        Christian in a Given Society. He firmly states that writing a
                                                        Christian’s main responsibility is to serve the Lord Jesus Christ
                                                        and to know God’s will throughout every action in their life “A
                                                        Christian should stay in prayer for guidance, so that he/she knows
                                                        the will of God for any action he/she may take.” (Witness and
                                                        Discipleship Pg.10) Many Chrsitans acknowledge and agree with the
                                                        fact that serving the purpose of the Gospel is our ultimate purpose.
                                                        But Gudina Tumsa also advocated for individuals to serve their
                                                        country to their maximum capability. He believed that a christian
                                                        was born in a specific country to serve and better it. He stated
                                                        “The Christian should invest his / her money, time, knowledge and
                                                        life, as well as anything else he may treasure, in the interest of
                                                        his / her country.” (Pg.7 Wittenss and Discipleship). In general a
                                                        Chrsitan has a responsibility to the Physical/Spiritual and
                                                          God/Country.</p>,
                                                          
                                                         <p>   Gudina Tumsa’s final writing is about  the Responsibility of a
                                                        Christian in a Given Society. He firmly states that writing a
                                                        Christian’s main responsibility is to serve the Lord Jesus Christ
                                                        and to know God’s will throughout every action in their life “A
                                                        Christian should stay in prayer for guidance, so that he/she knows
                                                        the will of God for any action he/she may take.” (Witness and
                                                        Discipleship Pg.10) Many Chrsitans acknowledge and agree with the
                                                        fact that serving the purpose of the Gospel is our ultimate purpose.
                                                        But Gudina Tumsa also advocated for individuals to serve their
                                                        country to their maximum capability. He believed that a christian
                                                        was born in a specific country to serve and better it. He stated
                                                        “The Christian should invest his / her money, time, knowledge and
                                                        life, as well as anything else he may treasure, in the interest of
                                                        his / her country.” (Pg.7 Wittenss and Discipleship). In general a
                                                        Chrsitan has a responsibility to the Physical/Spiritual and
                                                          God/Country.</p>,
                                                          

                                                        <p>    Gudina Tumsa’s final writing is about  the Responsibility of a
                                                        Christian in a Given Society. He firmly states that writing a
                                                        Christian’s main responsibility is to serve the Lord Jesus Christ
                                                        and to know God’s will throughout every action in their life “A
                                                        Christian should stay in prayer for guidance, so that he/she knows
                                                        the will of God for any action he/she may take.” (Witness and
                                                        Discipleship Pg.10) Many Chrsitans acknowledge and agree with the
                                                        fact that serving the purpose of the Gospel is our ultimate purpose.
                                                        But Gudina Tumsa also advocated for individuals to serve their
                                                        country to their maximum capability. He believed that a christian
                                                        was born in a specific country to serve and better it. He stated
                                                        “The Christian should invest his / her money, time, knowledge and
                                                        life, as well as anything else he may treasure, in the interest of
                                                        his / her country.” (Pg.7 Wittenss and Discipleship). In general a
                                                        Chrsitan has a responsibility to the Physical/Spiritual and
                                                          God/Country.</p>,
                                                          

                                                       <p>     Gudina Tumsa’s final writing is about  the Responsibility of a
                                                        Christian in a Given Society. He firmly states that writing a
                                                        Christian’s main responsibility is to serve the Lord Jesus Christ
                                                        and to know God’s will throughout every action in their life “A
                                                        Christian should stay in prayer for guidance, so that he/she knows
                                                        the will of God for any action he/she may take.” (Witness and
                                                        Discipleship Pg.10) Many Chrsitans acknowledge and agree with the
                                                        fact that serving the purpose of the Gospel is our ultimate purpose.
                                                        But Gudina Tumsa also advocated for individuals to serve their
                                                        country to their maximum capability. He believed that a christian
                                                        was born in a specific country to serve and better it. He stated
                                                        “The Christian should invest his / her money, time, knowledge and
                                                        life, as well as anything else he may treasure, in the interest of
                                                        his / her country.” (Pg.7 Wittenss and Discipleship). In general a
                                                        Chrsitan has a responsibility to the Physical/Spiritual and
                                                          God/Country.</p>,
                                                          

                                                         <p>   Gudina Tumsa’s final writing is about  the Responsibility of a
                                                        Christian in a Given Society. He firmly states that writing a
                                                        Christian’s main responsibility is to serve the Lord Jesus Christ
                                                        and to know God’s will throughout every action in their life “A
                                                        Christian should stay in prayer for guidance, so that he/she knows
                                                        the will of God for any action he/she may take.” (Witness and
                                                        Discipleship Pg.10) Many Chrsitans acknowledge and agree with the
                                                        fact that serving the purpose of the Gospel is our ultimate purpose.
                                                        But Gudina Tumsa also advocated for individuals to serve their
                                                        country to their maximum capability. He believed that a christian
                                                        was born in a specific country to serve and better it. He stated
                                                        “The Christian should invest his / her money, time, knowledge and
                                                        life, as well as anything else he may treasure, in the interest of
                                                        his / her country.” (Pg.7 Wittenss and Discipleship). In general a
                                                        Chrsitan has a responsibility to the Physical/Spiritual and
                                                          God/Country.</p>,
                                                          

                                                         <p>  Gudina Tumsa’s final writing is about  the Responsibility of a
                                                        Christian in a Given Society. He firmly states that writing a
                                                        Christian’s main responsibility is to serve the Lord Jesus Christ
                                                        and to know God’s will throughout every action in their life “A
                                                        Christian should stay in prayer for guidance, so that he/she knows
                                                        the will of God for any action he/she may take.” (Witness and
                                                        Discipleship Pg.10) Many Chrsitans acknowledge and agree with the
                                                        fact that serving the purpose of the Gospel is our ultimate purpose.
                                                        But Gudina Tumsa also advocated for individuals to serve their
                                                        country to their maximum capability. He believed that a christian
                                                        was born in a specific country to serve and better it. He stated
                                                        “The Christian should invest his / her money, time, knowledge and
                                                        life, as well as anything else he may treasure, in the interest of
                                                        his / her country.” (Pg.7 Wittenss and Discipleship). In general a
                                                        Chrsitan has a responsibility to the Physical/Spiritual and
                                                          God/Country.</p>,
                                                          

                                                        <p>Gudina Tumsa’s final writing is about  the Responsibility of a
                                                        Christian in a Given Society. He firmly states that writing a
                                                        Christian’s main responsibility is to serve the Lord Jesus Christ
                                                        and to know God’s will throughout every action in their life “A
                                                        Christian should stay in prayer for guidance, so that he/she knows
                                                        the will of God for any action he/she may take.” (Witness and
                                                        Discipleship Pg.10) Many Chrsitans acknowledge and agree with the
                                                        fact that serving the purpose of the Gospel is our ultimate purpose.
                                                        But Gudina Tumsa also advocated for individuals to serve their
                                                        country to their maximum capability. He believed that a christian
                                                        was born in a specific country to serve and better it. He stated
                                                        “The Christian should invest his / her money, time, knowledge and
                                                        life, as well as anything else he may treasure, in the interest of
                                                        his / her country.” (Pg.7 Wittenss and Discipleship). In general a
                                                        Chrsitan has a responsibility to the Physical/Spiritual and
                                                        God/Country.</p>
                                                  ]}>
                                                          
                                                        
                                                </ReadMore>
                                        </div>
                                </div>
                        </div>
                  </div>
                          <div className="w-full">
                        <div className="w-[90%] md:w-[70%] mx-auto">
                                <div className=" grid grid-cols-1 md:grid-cols-10 ">
                                        <div className="hidden md:block  col-span-2 ">
                                                <p className="text-3xl mt-16 font-medium uppercase">Quotes</p>
                                                
                                        </div>
                                        <div className="col-span-8">
                                                  <QuoteCarousel quote={[
                                                                "A Christian should stay in prayer for guidance, so that he/she knows the will of God for any action he/she may take.",
                                                                "The Christian should invest his / her money, time, knowledge and life, as well as anything else he may treasure, in the interest of his / her country.",
                                                                "A Christian should stay in prayer for guidance, so that he/she knows the will of God for any action he/she may take.",
                                                ]} />
                                        </div>
                                </div>
                        </div>
        </div>
                


      <Footer />
    </div>
  );
};

export default Page2;
