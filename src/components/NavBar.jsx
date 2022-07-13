import React, { useState, useEffect } from 'react';

import { SearchIcon , MenuIcon, XIcon , ArrowsExpandIcon } from "@heroicons/react/outline";
import { useSelector , useDispatch} from 'react-redux'
import logo from "./../assets/logo.png"
import { Link } from 'react-router-dom';
import {Button , Modal} from "antd"
import ModalContact from "./ModalContact"


 function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const [nav, setNav] = useState(false);
  const [search , setSearch] = useState(false)
  const handleClick = () => setNav(!nav)
  const searchClick = () => setSearch(!search)
  const navState = useSelector(state => state.navigation)
  const dispatch = useDispatch()
  const [contactVisible, setContactVisible] = useState(false);
  const handleContactVisible = () => setContactVisible(false);
  const handleScroll = debounce(() => {
      const currentScrollPos = window.pageYOffset;
        
      setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);

  const navbarStyles = {
    position: 'fixed',
    height: '60px',
    width: '100%',

    textAlign: 'center',
    transition: 'top 0.6s'
  }

  return (
    <div className='w-full overflow-hidden'>
      

      <ModalContact visible={contactVisible} setContact = {()=>{handleContactVisible()}} />
        <div style={{ ...navbarStyles, top: visible ? '0' : '-60px' }} className='w-full h-[80px]  z-10 bg-transparent fixed top-0 text-white pt-11'>
            <div className='px-3 w-full flex justify-between items-center w-full h-full'>
              <div className='px-3 w-full flex justify-between items-center w-full h-full'>
                  <div className='flex items-center '>
                      <img src={logo} className="w-10 h-10"/>   
                  </div>
                  <div className='flex items-center h-full'>
                    <ul className='hidden md:flex space-x-4'>
                      <Link to='/'><li  className={ 'text-white font-bold hover:text-white text-sm uppercase '} > Home</li></Link>
                      <Link to='/idiology'> <li className={'text-white font-bold hover:text-white text-sm uppercase'}> His Idiology</li></Link>
                      <Link to='/relationtoothers'><li className={ 'text-white font-bold hover:text-white text-sm uppercase' } >In Relation to other</li></Link>
                      <Link to='/papers'><li className={ 'text-white font-bold hover:text-white text-sm uppercase' } >Papers</li></Link>
                      <Link to='/archive'><li className={'text-white font-bold hover:text-white text-sm uppercase'} >Archive</li></Link>
                      <Link to='/gallery'><li className={'text-white font-bold hover:text-white text-sm uppercase'} >Gallery</li></Link>
 
                    </ul>
                                <div onClick={handleClick} className='md:hidden'>
                                {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
                            </div>
                            </div>
                            <div className='hidden md:flex'>
                                <p className={ 'text-black  text-sm  mr-5 uppercase  px-4  py-2 bg-white  hover:bg-black'} onClick={() => setContactVisible(true)}>Contact</p>
                            </div>
                        
                    </div> 
                    
                    </div>
              <ul className={!nav ? 'hidden' : 'absolute bg-slate-100 bg-opacity-100 shadow-xl w-full px-8'}>
                      <Link to='/'><li className={ 'text-xl text-gray-500 py-3 border-b-2 border-black-500'} > Home</li></Link>
                      <Link to='/idiology'> <li className={'text-xl text-gray-500 py-3 border-b-2 border-black-500'}> His Idiology</li></Link>
                      <Link to='/relationtoothers'><li className={ 'text-xl text-gray-500 py-3 border-b-2 border-black-500'} >In Relation to other</li></Link>
                      <Link to='/papers'><li className={ 'text-xl text-gray-500 py-3 border-b-2 border-black-500' } >Papers</li></Link>
                      <Link to='/archive'><li className={'text-xl text-gray-500 py-3 border-b-2 border-black-500'} >Archive</li></Link>
                        
                    
              </ul>
                        
                      
          </div>
    </div>
    
    
  );
};

export default Navbar;









