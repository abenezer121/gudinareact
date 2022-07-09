import React from 'react'
import OwlCarousel from 'react-owl-carousel';

import book1 from "../assets/book1.jpg";
import book2 from "../assets/book2.jpg";
import book3 from "../assets/book3.jpg";
import book4 from "../assets/book4.jpg";
import book5 from "../assets/book5.jpg";

const Page2 = () => { 

    return(
        <div className='w-full h-screen bg-red-200 '>
            <OwlCarousel className='owl-carousel' loop margin={10} nav>
                <div class=''>
                        <img src={book1} alt='book1' className='w-full h-full'/>
                </div>
                <div class=''>
                        <img src={book1} alt='book2' className='w-full h-full'/>
                </div>
                <div class=''>
                        <img src={book1} alt='book3' className='w-full h-full'/>
                </div>
                <div class=''>
                        <img src={book1} alt='book4' className='w-full h-full'/>
                </div>
                <div class=''>
                        <img src={book1} alt='book5' className='w-full h-full'/>
                </div>
            </OwlCarousel>
        </div>
    )
}
export default Page2;