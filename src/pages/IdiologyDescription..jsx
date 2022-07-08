import React from "react";
import {
  ArrowLeftIcon
} from "@heroicons/react/outline";
import logo from "./../assets/logo.png";
import { Link } from 'react-router-dom';
import QuoteCarousel from "./../components/Carousel/QuoteCarousel";
import {useLocation} from 'react-router-dom';
import Footer from "../components/Footer";
const IdiologyDescription = (props) => { 
    const location = useLocation()
    return (
        <div className="w-full h-full">
            <div className="flex f-full justify-between items-center w-full py-10">
                <img src={logo} className="ml-10 text-black" style={{ width : "50px" , height : "50px"}} />
                <Link to="/idiology">
                         <div className="flex h-full  items-center uppercase"><p className="mr-10 text-center align-center mt-3 font-medium">Back To Idiology </p><ArrowLeftIcon className="mr-20 w-5 h-5 font-medium" /></div>
                </Link>
            </div>
            <div className="w-full">
                <div className="w-[35%] mt-[100px] mx-auto md:mr-[400px]">
                    <h1 className="text-4xl font-medium">{ location.state.ti}</h1>
                    <p className="text-base">
                        Gudina Tumsa’s final writing is about  the Responsibility of a Christian in a Given Society. He firmly states that writing a Christian’s main responsibility is to serve the Lord Jesus Christ and to know God’s will throughout every action in their life “A Christian should stay in prayer for guidance, so that he/she knows the will of God for any action he/she may take.” (Witness and Discipleship Pg.10) Many Chrsitans acknowledge and agree with the fact that serving the purpose of the Gospel is our ultimate purpose. But Gudina Tumsa also advocated for individuals to serve their country to their maximum capability. He believed that a christian was born in a specific country to serve and better it. He stated “The Christian should invest his / her money, time, knowledge and life, as well as anything else he may treasure, in the interest of his / her country.” (Pg.7 Wittenss and Discipleship). In general a Chrsitan has a responsibility to the Physical/Spiritual and God/Country.</p>
                </div>
            </div>
            <QuoteCarousel quote={[
                "We have not been given a choice as to where we should be born we believe that God has placed us where we are to do His will.",
                "In my opinion a Christian has to make a choice only when he's faced with the demand not to confess Christ as Lord, and when he / she is denied the right to teach in his name.",
                "To be a Christian is not to be a hero to make a history for oneself. A Christian goes as a lamb to be slaughtered only when he / she knows that it is in the complete Accord with the will of God who has called him to his service."

            ]} />
           	  <div className="w-full">
                <div className="w-[30%] mt-[100px] mx-auto">
                    <p className="text-base">
                        Prior to his abduction and death Gudina Tumsa wrote what many call his last will and testament which he titled “The Role of a Chiristian in a Given Society.” In this document he gives a testament to his understanding of the faith as it pertains to a Chirsitans life. This article written by him defines Gudina Tumsa as a whole, his life, faith and works from the beginning to the end. He discusses how a Christian should always put God first, serve their country and most importantly he writes about martyrdom, which he knew was the fate that was ahead of him, “Gudina was not a man without fear. He would not have liked to be made a hero. He always said he was afirad of torture. ‘If that would only pass me by’, he said. But he saw that the cup was on the table and he accepted to drink it.” (Church and Society Pg.113). We must understand that Gudina’s understanding of a Christian’s role came from the Bible and his life experiences/sacrifices that he made for the Gospel.
                     </p>
                </div>
            </div>

  <div className="w-full">
                <div className="w-[30%] mt-[100px] mx-auto">
                    <p className="text-base">
                         Gudina Tumsa himself was a responsible Christian, and the evidence for this lies in the fact that he chose to follow the will of God unto the point of death as can be seen when Qes.Iteffa Gobena writes what Gudina said to him as they were walking out of the ECMY Head Office: “You boys, do you know that one day this Derg will kill me on a road side such as this, and will get rid of me?” (Church and Society Pg.222). But his Chrisitan responsibility is not only seen in his obedience to death, but in his obedience throughout every part of his life. Some examples are; Gudina was willing to leave the medical field- assured comfortability- for a life of following Christ, he was willing to leave his wife and children to get the education God wanted him to get in the United States, he was willing to lead the Church God had established in a way that God had ordained and he was willing to stand for what the Bible commanded him to stand for. An example of Gudina following the commands of the Bible is when he refused to conform like many others did around him, “Once when asked whether there was religious persecution in Ethiopia, the Catholics, the Orthodox and Muslims said “No!”, where as GT had said: “I cannot deny the fact that Christians are being persecuted.” (Life and Ministry Pg.170). The responsibility that Gudina Tumsa developed in his Chirstian life can be accredited to two specific things: his life of prayer and his habit of reading the word of God. His prayer life is something that many have given testament to as it is how he made every single decision and it led him in the right direction. Paul Hoffmann describes Gudina’s prayer life in this way, “Prayer- and in this he was by no means unique- played an important part in Gudina’s own personal life.” (Life and Ministry Pg.16). Gudina’s deep understanding of the Bible is what shaped the principles of his life and is clearly seen in his writings. Gudina as a Chirstian dedicated his entire life to the will of the Lord, everything he wrote on a Christians responsibility was a responsibility that he practiced, he obeyed the government as an authority placed by God, he never denied the Gospel, fought and died to protect the freedom of the Gospel and he remained in prayer to know the will of God at every point in his life. In other words we can say Reverend Gudina Tumsa talked the talk and walked the walk. 
                    </p>
                </div>
            </div>


           
	<Footer/>
	
        </div>
    );
}   

export default IdiologyDescription;