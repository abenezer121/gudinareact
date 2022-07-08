import React from 'react';


import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaYoutube
    
} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='w-full bg-[#1e2025] relative py-10 '>
            <div className='grid grid-cols-2 md:grid-cols-4 mx-20 py-10'>
                <div>
                    <h1 className='font-semibold text-lg text-[#524b4b]'>Where To Buy</h1>
                    <p className='text-white font-medium'>See Authorized Retailers</p>
                </div>
                <div>
                    
                     <h1 className='font-semibold text-lg text-[#524b4b]'>Sorry Rewards</h1>
                    <p className='text-white font-medium'>Join Now</p>

                </div>
                <div>
              
                    <h1 className='font-semibold text-lg text-[#524b4b]'>News & Info</h1>
                    <p className='text-white font-medium'>Press Releases</p>
                    <p className='text-white font-medium'>About Sony</p>
                    <p className='text-white font-medium'>Product Support</p>
                    <p className='text-white font-medium'>Product Manual</p>
                    <p className='text-white font-medium'>Product Registration</p>
                    <p className='text-white font-medium'>News letter sign up</p>
                </div>
                <div>
                
                     <h1 className='font-semibold text-lg text-[#524b4b]'>Other site</h1>
                    <p className='text-white font-medium'>Press Releases</p>
                    <p className='text-white font-medium'>About Sony</p>
                    <p className='text-white font-medium'>Product Support</p>
                    <p className='text-white font-medium'>Product Manual</p>
                </div>
                

            </div>
            
                <div className='absolute right-0 bottom-5 mr-10 flex space-x-5 '>
                                <h1 className='text-white font-medium'>For Professionals</h1>
                                <h1 className='text-white font-medium'>Careers</h1>
                                <h1 className='text-white font-medium'>Contact us</h1>
                                <h1 className='text-white font-medium'>Comppny Info</h1>
                <h1 className='text-white font-medium'>Voluntary recall</h1>
                    <div className="flex space-x-10">
                    <FaFacebook style={{
                        width: '25px',
                        height: '25px',
                    }} className=" text-white"/>
                        <FaInstagram style={{
                        width: '25px',
                        height: '25px',
                    }} className=" text-white"/>
                        <FaTwitter style={{
                        width: '25px',
                        height: '25px',
                    }}  className=" text-white"/>
                        <FaYoutube style={{
                        width: '25px',
                        height: '25px',
                    }}  className=" text-white"/>
                    </div> 
               
            </div>
           
          </div>  
        );
}
export default Footer;