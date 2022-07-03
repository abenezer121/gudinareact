import { React } from 'react'

const TimeLine1 = () => { 
    return (
      
       <div className="flex flex-col justify-center py-6 lg:py-12">
      <div className="w-full mx-auto lg:max-w-4xl">

        <div className="relative">

       
          <div className="absolute hidden w-px h-full transform -translate-x-1/2 bg-indigo-300 lg:block left-1/2"></div>
          <div className="space-y-12 lg:space-y-8">
         
            <div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-start w-full mx-auto">
                  <div className="w-full lg:w-1/2 lg:pr-8">
                    <div className="p-4 bg-white rounded shadow-lg shadow-cyan-300">
                      <p>Lorem, ipsum dolor sit amet consectetur dolor elit. </p>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-indigo-400 border-2 border-red-200 rounded-full left-1/2 sm:translate-y-0">
                  <span className="text-white">1</span>
                </div>
              </div>
            </div>

      
            <div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-end w-full mx-auto">
                  <div className="w-full lg:w-1/2 lg:pl-8">
                    <div className="p-4 bg-white rounded shadow-lg shadow-red-300">
                      <p>Lorem, ipsum dolor sit amet consectetur dolor elit. </p>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-indigo-400 border-2 border-red-200 rounded-full left-1/2 sm:translate-y-0">
                  <span className="text-white">2</span>
                </div>
              </div>
            </div>

           
            <div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-start w-full mx-auto">
                  <div className="w-full lg:w-1/2 lg:pr-8">
                    <div className="p-4 bg-white rounded shadow-lg shadow-yellow-300">
                      <p>Lorem, ipsum dolor sit amet consectetur dolor elit. </p>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-indigo-400 border-2 border-red-200 rounded-full left-1/2 sm:translate-y-0">
                  <span className="text-white">3</span>
                </div>
              </div>
            </div>

           
            <div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-end w-full mx-auto">
                  <div className="w-full lg:w-1/2 lg:pl-8">
                    <div className="p-4 bg-white rounded shadow-lg shadow-lime-300">
                      <p>Lorem, ipsum dolor sit amet consectetur dolor elit. </p>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-indigo-400 border-2 border-red-200 rounded-full left-1/2 sm:translate-y-0">
                  <span className="text-white">4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    );
}

export default TimeLine1;