import React from 'react'


const Choice = (props) => {
    return (
        <div className='flex justify-between items-center '>
              <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
            <p className='mr-5'>{props.name}</p>
         </div>  
    );
}

export default Choice