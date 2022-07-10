import React from 'react'


const Choice = (props) => {
    return (
        <div className='w-full flex justify-between items-center mt-3 '>
              {/* <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" class="shadow-sm mx-10 w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input> */}
                 <p className='mx-10 hover:font-bold'>{props.name}</p>
         </div>  
    );
}

export default Choice