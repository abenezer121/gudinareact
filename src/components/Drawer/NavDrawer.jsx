import React, { useEffect, useState } from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaYoutube
    
} from 'react-icons/fa'
import { Drawer} from "antd"

import './../../assets/css/cursor.css'


import styled from "styled-components";
import { SearchIcon , MenuIcon, XIcon , ArrowsExpandIcon } from "@heroicons/react/outline";
import { useSelector, useDispatch } from 'react-redux'

import logo from "./../../assets/image/logo.png"
import { Link } from 'react-router-dom';
import {Button , Modal} from "antd"
import ModalContact from '../ModalContact/ModalContact';
import {home , _idiology , relationtoothers , papers , archive , gallery} from "./../../redux/actions/navigation"


const NavDrawer = (props) => { 
    const [position, setPosition] = useState({ x: 0, y: 0 });
    
    const dispatch = useDispatch()
      const [contactVisible, setContactVisible] = useState(false);
  const handleContactVisible = () => setContactVisible(false);
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
        <>
                <ModalContact visible={contactVisible} setContact = {()=>{handleContactVisible()}} />
                <Drawer
                        visible={props.visible}
                        closeIcon={<div className='w-full'> <XIcon className='absolute right-10 mt-2 text-black font-bold w-10 h-10' onClick={() => props.setContact(false)}/></div>}
                        onClose={() => props.setContact(false)}
                        width="100vw"
                    
                        style={{
                            height : "100%"
                        }}
                        

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
                                    
                                        <Link to='/'><p className=' text-black text-center text-4xl font-bold  text-sm ' onClick={() => { props.setContact(false);  dispatch(home());  }}  > <span className='hover:border-b-2'>Home</span></p></Link>
                                        <Link to='/idiology'> <p className=' text-black text-center text-4xl font-bold  text-sm ' onClick={() => { props.setContact(false); dispatch(_idiology());  }}><span className='hover:border-b-2 hover:border-green-200'> His Ideology</span> </p></Link>
                                        <Link to='/relationtoothers'><p className=' text-black text-center text-4xl font-bold  text-sm ' onClick={() => { props.setContact(false); dispatch(relationtoothers());  }}  > <span className='hover:border-b-2'>In Relation to other</span></p></Link>
                                        <Link to='/papers'><p className=' text-black text-center text-4xl font-bold  text-sm ' onClick={() => { props.setContact(false);  dispatch(papers());  }} > <span className='hover:border-b-2'>Papers</span></p></Link>
                                        <Link to='/archive'><p className=' text-black text-center text-4xl font-bold  text-sm ' onClick={() => { props.setContact(false); dispatch(archive()); }}  > <span className='hover:border-b-2'>Archive</span></p></Link>
                                        <Link to='/gallery'><p className=' text-black text-center text-4xl font-bold  text-sm ' onClick={() => { props.setContact(false);  dispatch(gallery());  }}><span className='hover:border-b-2'>Gallery</span></p></Link>
                                        <p className=' text-black text-center text-4xl font-bold  text-sm ' onClick={() => setContactVisible(true)}><span className='hover:border-b-2'>Contact Us</span></p>
                        
                                    </div>
                        
                            
                            
                        
                            </div>
                        </div>
                        </div>
                    
                </Drawer>
        </>
     
    )
}
export default NavDrawer;