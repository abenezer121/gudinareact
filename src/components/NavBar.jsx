import React , {useState} from 'react'
import { SearchIcon , MenuIcon, XIcon , ArrowsExpandIcon } from "@heroicons/react/outline";
import { useSelector , useDispatch} from 'react-redux'

import { Link } from 'react-router-dom';


const NavBar = () => {

    
    const [nav, setNav] = useState(false);
    const [search , setSearch] = useState(false)
    const handleClick = () => setNav(!nav)
    const searchClick = () => setSearch(!search)
    const navState = useSelector(state => state.navigation)
    const dispatch = useDispatch()

    return (
        <div className='w-full h-[70px] z-10 bg-slate-100 fixed top-0 z-50 shadow-sm  drop-shadow-lg'>
            
            
            <div className='px-3 w-full flex justify-between items-center w-full h-full'>
            <div className='px-3 w-full flex justify-between items-center w-full h-full'>
                <div className='flex items-center '>
                    <ArrowsExpandIcon className='w-10' />
                    <p className='pl-2 text-3xl font-bold mr-4 sm:text-4xl'>Chokma.</p>
                </div>
                <div className='flex items-center h-full'>
                    <ul className='hidden md:flex space-x-4'>
                        <li className={navState.navLocation == "HOME" ? 'text-black-800 font-bold' : 'text-gray-500'} > Home</li>
                        <li className={navState.navLocation == "ARTICLE" ? 'text-black-800 font-bold' : 'text-gray-500'}> Article</li>
                        <li className={navState.navLocation == "BOOK" ? 'text-black-800 font-bold' : 'text-gray-500'} >Books</li>
                        <li className={navState.navLocation == "QUESTION" ? 'text-black-800 font-bold' : 'text-gray-500'} >Questions</li>
                        <li className={navState.navLocation == "ABOUT" ? 'text-black-800 font-bold' : 'text-gray-500'} >About</li>
                        <li className={navState.navLocation == "DONATION" ? 'text-black-800 font-bold' : 'text-gray-500'}>Donate</li>
                        </ul>
                         <div onClick={handleClick} className='md:hidden'>
                        {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
                    </div>
                </div>
                
            </div> 
             
            </div>
            <ul className={!nav ? 'hidden' : 'absolute bg-slate-100 bg-opacity-100 shadow-xl w-full px-8'}>
                
                <li className={navState.navLocation == "HOME" ? 'text-xl text-black-500 py-3 border-b-2 border-black-500 font-bold' : 'text-xl text-gray-500 py-3 border-b-2 border-black-500'} onClick = {()=>{ handleClick(); }}> Home</li>
                <li className={navState.navLocation == "ARTICLE" ? 'text-xl text-black-500 py-3 border-b-2 border-black-500 font-bold' : 'text-xl text-gray-500 py-3 border-b-2 border-black-500'} onClick = {()=>{ handleClick(); }}> Article</li>
                <li className={navState.navLocation == "BOOK" ? 'text-xl text-black-500 py-3 border-b-2 border-black-500 font-bold' : 'text-xl text-gray-500 py-3 border-b-2 border-black-500'} onClick = {()=>{ handleClick(); }}>Books</li>
                <li className={navState.navLocation == "QUESTION" ? 'text-xl text-black-500 py-3 border-b-2 border-black-500 font-bold' : 'text-xl text-gray-500 py-3 border-b-2 border-black-500'} onClick = {()=>{ handleClick(); }}>Questions</li>
                <li className={navState.navLocation == "ABOUT" ? 'text-xl text-black-500 py-3 border-b-2 border-black-500 font-bold' : 'text-xl text-gray-500 py-3 border-b-2 border-black-500'} onClick = {()=>{ handleClick(); }}>About</li>
                <li className={navState.navLocation == "DONATION" ? 'text-xl text-black-500 py-3 border-b-2 border-black-500 font-bold' : 'text-xl text-gray-500 py-3 border-b-2 border-black-500'} onClick = {()=>{ handleClick(); }}>Donate</li> 
            </ul>
                
              
        </div>
    )
}

export default NavBar;