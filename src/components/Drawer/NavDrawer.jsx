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

import logo from "./../../assets/image/other/logo.png"
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
                            <div className='text-center  my-[10%]  w-full '>
                                    
                                        <Link to='/'><h1 className='text-black text-center text-6xl font-bold  text-sm ' onClick={() => { props.setContact(false);  dispatch(home());  }}  > <span className=''>Home</span></h1></Link>
                                        <Link to='/idiology'> <h1 className='text-black text-center text-6xl font-bold  text-sm ' onClick={() => { props.setContact(false); dispatch(_idiology());  }}><span className=''> His Ideology</span> </h1></Link>
                                        <Link to='/relationtoothers'><h1 className=' text-black text-center text-6xl font-bold  text-sm ' onClick={() => { props.setContact(false); dispatch(relationtoothers());  }}  > <span className=''>In Relation to other</span></h1></Link>
                                        <Link to='/papers'><h1 className=' text-black text-center text-6xl font-bold  text-sm ' onClick={() => { props.setContact(false);  dispatch(papers());  }} > <span className=''>Papers</span></h1></Link>
                                        <Link to='/archive'><h1 className=' text-black text-center text-6xl font-bold  text-sm ' onClick={() => { props.setContact(false); dispatch(archive()); }}  > <span className=''>Archive</span></h1></Link>
                                        <Link to='/gallery'><h1 className=' text-black text-center text-6xl font-bold  text-sm ' onClick={() => { props.setContact(false);  dispatch(gallery());  }}><span className=''>Gallery</span></h1></Link>
                                        <h1 className=' text-black text-center text-6xl font-bold  text-sm ' onClick={() => setContactVisible(true)}><span className=''>Contact Us</span></h1>
                        
                                    </div>
                            </div>
                        </div>
                        </div>

                </Drawer>
        </> 
     
    )
}
export default NavDrawer;