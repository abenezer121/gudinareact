import React, { useEffect, useState } from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaYoutube
    
} from 'react-icons/fa'
import {Button , Modal} from "antd"

import './cursor.css'
const ModalContact = (props) => { 
   const [position, setPosition] = useState({x: 0, y: 0});

   useEffect(() => {
       addEventListeners();
       return () => removeEventListeners();
   }, []);

   const addEventListeners = () => {
       document.addEventListener("mousemove", onMouseMove);
   };

   const removeEventListeners = () => {
       document.removeEventListener("mousemove", onMouseMove);
   };

   const onMouseMove = (e) => {
       setPosition({x: e.clientX, y: e.clientY});
   };
    return (
    <Modal
        
            visible={props.visible}
            onOk={() => props.setContact(false)}
            onCancel={() => props.setContact(false)}
            width="94%"
            
            style={{
            
            position: "absolute",
            top:   "50px",
            left: "50px",
            height : "600px"
        
            }}
            footer={null}
        
        >
            <div>
            <div className='w-[80%] mx-auto relative '>
                   <div className="cursor"
           style={{
               left: `${position.x}px`,
               top: `${position.y}px`
           }}/>
                <div className='flex flex-col w-full'>
                <div className='text-center  mt-60  w-full'>
                    <p className='text-center text-2xl'>Contact us</p>
                    <p className='text-center text-7xl font-bold '>hello@Gt Legacy.com</p>
                </div>
                
                
                <div className='mt-60 mb-20 mx-auto'>
                    <p className=' text-center text-sm font-medium uppercase'>social</p>
                    <div className='mx-auto text-center  flex  space-x-5 '>
                    
                    <a href="https://yourLink.com" target="_blank" rel="noopener noreferrer"><FaFacebook className='text-2xl hover:text-3xl' /></a>
                    <a href="https://yourLink.com" target="_blank" rel="noopener noreferrer"><FaInstagram className='text-2xl hover:text-3xl' /></a>
                    <a href="https://yourLink.com" target="_blank" rel="noopener noreferrer"><FaTwitter className='text-2xl hover:text-3xl' /></a>
                    <a href="https://yourLink.com" target="_blank" rel="noopener noreferrer"><FaYoutube className='text-2xl hover:text-3xl'/></a>
                        
                        
                        
                    </div>
                </div>
                </div>
            </div>
            </div>
         
      </Modal>
    )
}
export default ModalContact;