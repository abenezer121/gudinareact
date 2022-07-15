import React from 'react';
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaYoutube
    
} from 'react-icons/fa'
import { idiology } from "./../../assets/data/idiologydata/index"
import { relationData } from './../../assets/data/relationdata/index'
import {Link} from "react-router-dom"
const Footer = () => {
    return (
        <div className='w-full bg-[#1e2025] relative py-10 '>
            <div className='grid grid-cols-2 md:grid-cols-4 mx-20 py-10'>
                <div>
                    <h1 className='font-semibold text-lg text-[#524b4b]'>Location</h1>
                    
                    <p className='text-white font-medium'>Address- Ethiopia Addis Ababa, Bole Kifle</p>
                        <p className='text-white font-medium'>Ketema Woreda 07 House No.999</p>
                </div>
                <div>
                    
                     <h1 className='font-semibold text-lg text-[#524b4b]'>Relation To Others</h1>
                    {
                           
                                relationData.map((item, index) => { 

                                    return (
                                        <Link to="/description" state={{
                                            data: JSON.stringify({
                                                title: item.title,
                                                backToLink: "/relationtoothers",
                                                backToText: "Back To Relations",
                                                quote: item.quote,
                                                paragrah: item.paragraph,
                                                sideText: "OTHER PEOPLE",
                                                sideArray: [
                                                    "Prime minster Dr Abiy",
                                                    "Dietrich Bonhoeffer",
                                                    "martin luther king"
                                                ]
                                            })
                                                
                                        }}>
                                            <p className='text-white  hover:font-bold'>{item.title}</p>
                                                            
                                        </Link>
                                    )
                                })
                            
                    }

                </div>
                <div>
              
                    <h1 className='font-semibold text-lg text-[#524b4b]'>Ideology</h1>
                        {
                        idiology.map((item, index) => {
                                
                                if (index < 6) {
                                    return (
                                    <Link to="/description" state={{
                                        data: JSON.stringify({
                                        title: item.title,
                                        backToText: "Back To Idiology",
                                        backToLink : "/idiology", 
                                        quote: item.quote,
                                        paragrah: item.paragraph,
                                        sideText: "OTHER TOPICS",
                                        sideArray: [
                                                "Cost of Discipleship",
                                                "GT on Politics/Economics",
                                                "Holistic Theology"
                                            ]
                                        })
                                        
                                        
                                        }}><p className='text-white  hover:font-bold'>{item.title}</p></Link>
                                
                                    )
                                } else {
                                    return ("")
                                }
                    
                  })
                }
                    
                  
                </div>
                <div>
                
                     <h1 className='font-semibold text-lg text-[#524b4b]'>Other site</h1>
                    <p className='text-white font-medium'>Press Releases</p>
                    <p className='text-white font-medium'>About Sony</p>
                    <p className='text-white font-medium'>Product Support</p>
                    <p className='text-white font-medium'>Product Manual</p>
                </div>
                

            </div>
            
                
           
          </div>  
        );
}
export default Footer;