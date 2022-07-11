import React from 'react'
import gudinatumsa from "./../assets/gudinatumsa1.png";
import martin from "./../assets/martin.jpg"
import bonhoeffer1 from "./../assets/bonhoeffer1.jpg"
import abiy2 from "./../assets/drabiy2.jpg"
const RelationToOthers = () => { 

    return(            
        <div className='w-full h-screen bg-slate-300'>
                <div className='w-[80%] mx-auto '>
                        <div className='flex flex-col md:flex-row md:flex-cols h-full items-center pt-20'>
                                    <div className='w-[100%] md:w-[30%]'>
                                        <h1 className='text-6xl'>Gudina Tumsa</h1> 
                                        <h3 className='mt-10 text-lg'> In relation with others</h3>
                                        <p className='mt-10'>jonny  has been responsibe for bringing coneptsto life for client such as Nintendo, Estee Lauder, Oxfam , Scribner , Sony and many others. His ork has been recognised by one show, ADC Webby Awards abd Cannes Lions When jonny isnt busy educating people on the difference between fonts and typefaces, he can be found takng part in competitive tickling competitionsacross the UK </p>  
                                    </div>
                                    <div className='w-[100%] md:w-[70%] flex     items-center '>
                                        <div className='hidden md:flex md:ml-[200px]'>
                                          <img src = {gudinatumsa} className=' hidden md:flex mt-[100px] h-[700px]'/>  
                                        </div>
                                        <div className='flex flex-col w-full  items-center  mt-20 space-y-10'>
                                                <div class="w-full flex justify-between">
                                                        <img class="md:mx-auto w-25 h-25 rounded-full border border-gray-100 shadow-sm" src={martin} alt="user image" />
                                                        <p className='md:hidden'>First one</p>
                                                </div>
                                                <div class="w-full flex justify-between">
                                                            <img class="md:mx-auto w-25 h-25 rounded-full border border-gray-100 shadow-sm" src={abiy2} alt="user image" />
                                                        <p className='md:hidden'>First one</p>
                                                </div>
                                                <div class="w-full  flex justify-between">
                                                        <img class="md:mx-auto w-25 h-25 rounded-full border border-gray-100 shadow-sm" src={bonhoeffer1} alt="user image" />
                                                        <p className='md:hidden'>First one</p>
                                                </div>
                                        </div>
                                   </div>
                        </div>
                       
                </div>   
        </div>
    )
}
export default RelationToOthers;