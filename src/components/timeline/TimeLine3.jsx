import React from 'react'



const TimeLine3 = (props) => {

    const List = (year , text) => { 

        return (
            <li class="relative mb-6 sm:mb-0">
                <div class="flex items-center">
                    <div class="flex z-10 justify-center items-center  ">
                            {year}
                    </div>
                    <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div class="mt-3 sm:pr-8">
                    
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">{text}</p>
                </div>
            </li>
        )
    }
    return (
        <ol class="items-center sm:flex">
            {
                props.year.map((item, index) => { 
                    return List(props.year[index], props.text[index])
                })
            }
           
          
        </ol>
    );
}
export default TimeLine3;