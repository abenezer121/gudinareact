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
            <div className='grid grid-cols-1 md:grid-cols-4 mx-20 py-10'>
                <div className='mt-10'>
                    <h1 className='font-semibold text-lg text-[#524b4b]'>Location</h1>
                    <p className='text-white font-medium'>Address- Ethiopia Addis Ababa, Bole Kifle</p>
                    <p className='text-white font-medium'>Ketema Woreda 07 House No.999</p>
                </div>
                <div className='mt-10'>
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
                <div className='mt-10'>
              
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
                <div className='mt-10'>
                
                     <h1 className='font-semibold text-lg text-[#524b4b]'>Other Pages</h1>
                        <Link to="/archive"><p className='text-white font-medium  hover:font-bold'>Archive</p></Link>
                        <Link to="/papers"><p className='text-white font-medium  hover:font-bold'>Papers</p></Link>
                        <Link to="/idiology"><p className='text-white font-medium  hover:font-bold'>Ideology</p></Link>
                        <Link to="/gallery"><p className='text-white font-medium  hover:font-bold'>Gallery</p></Link>
                    
                </div>
                

            </div>
            
                
           
          </div>  
        );
}
export default Footer;