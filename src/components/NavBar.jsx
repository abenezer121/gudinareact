import React, { useState, useEffect } from 'react';

import { SearchIcon , MenuIcon, XIcon , ArrowsExpandIcon } from "@heroicons/react/outline";
import { useSelector , useDispatch} from 'react-redux'
import logo from "./../assets/logo.png"
import { Link } from 'react-router-dom';


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
    
     <div style={{ ...navbarStyles, top: visible ? '0' : '-60px' }} className='w-full h-[80px]  z-10 bg-transparent fixed top-0 text-white'>
 
            
            <div className='px-3 w-full flex justify-between items-center w-full h-full'>
            <div className='px-3 w-full flex justify-between items-center w-full h-full'>
                <div className='flex items-center '>
                    <img src={logo} className="w-10 h-10"/>
                    
                </div>
                <div className='flex items-center h-full'>
            <ul className='hidden md:flex space-x-4'>
              <Link to='/'><li className={ 'text-black-800 text-sm uppercase '} > Home</li></Link>
              <Link to='/idiology'> <li className={'text-black-800 text-sm uppercase'}> His Idiology</li></Link>
                <li className={ 'text-black-800 text-sm uppercase' } >In Relation to other</li>
              <Link to='/papers'><li className={ 'text-black-800 text-sm uppercase' } >Papers</li></Link>
              <Link to='/archive'><li className={'text-black-800 text-sm uppercase'} >Archive</li></Link>
              {/* <Link to='/gallery'><li className={'text-black-800 text-sm uppercase'} >Gallery</li></Link> */}
             
              
                            
                 
                            
                            
                     
                            
                        
                        </ul>
                         <div onClick={handleClick} className='md:hidden'>
                        {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
                    </div>
                    </div>
                    <div className='hidden md:flex'>
                        <p className={ 'text-black-800 text-sm  mr-5 uppercase'}>Contact</p>
                    </div>
                
            </div> 
             
            </div>
      <ul className={!nav ? 'hidden' : 'absolute bg-slate-100 bg-opacity-100 shadow-xl w-full px-8'}>
               <Link to='/'><li className={ 'text-xl text-gray-500 py-3 border-b-2 border-black-500'} > Home</li></Link>
              <Link to='/idiology'> <li className={'text-xl text-gray-500 py-3 border-b-2 border-black-500'}> His Idiology</li></Link>
                <li className={ 'text-xl text-gray-500 py-3 border-b-2 border-black-500'} >In Relation to other</li>
              <Link to='/papers'><li className={ 'text-xl text-gray-500 py-3 border-b-2 border-black-500' } >Papers</li></Link>
              <Link to='/archive'><li className={'text-xl text-gray-500 py-3 border-b-2 border-black-500'} >Archive</li></Link>
                
                {/* <li className={navState.navLocation == "HOME" ? 'text-xl text-black-500 py-3 border-b-2 border-black-500 font-bold' : 'text-xl text-gray-500 py-3 border-b-2 border-black-500'} onClick = {()=>{ handleClick(); }}> Home</li>
                <li className={navState.navLocation == "ARTICLE" ? 'text-xl text-black-500 py-3 border-b-2 border-black-500 font-bold' : 'text-xl text-gray-500 py-3 border-b-2 border-black-500'} onClick = {()=>{ handleClick(); }}> Article</li>
                <li className={navState.navLocation == "BOOK" ? 'text-xl text-black-500 py-3 border-b-2 border-black-500 font-bold' : 'text-xl text-gray-500 py-3 border-b-2 border-black-500'} onClick = {()=>{ handleClick(); }}>Books</li>
                <li className={navState.navLocation == "QUESTION" ? 'text-xl text-black-500 py-3 border-b-2 border-black-500 font-bold' : 'text-xl text-gray-500 py-3 border-b-2 border-black-500'} onClick = {()=>{ handleClick(); }}>Questions</li>
                <li className={navState.navLocation == "ABOUT" ? 'text-xl text-black-500 py-3 border-b-2 border-black-500 font-bold' : 'text-xl text-gray-500 py-3 border-b-2 border-black-500'} onClick = {()=>{ handleClick(); }}>About</li>
                <li className={navState.navLocation == "DONATION" ? 'text-xl text-black-500 py-3 border-b-2 border-black-500 font-bold' : 'text-xl text-gray-500 py-3 border-b-2 border-black-500'} onClick = {()=>{ handleClick(); }}>Donate</li> 
           */}
      </ul>
                
              
        </div>
    
  );
};

export default Navbar;







        