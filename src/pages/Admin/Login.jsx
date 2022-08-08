import React from 'react'


const Login = () => { 
    return (
 <div class="flex flex-col h-screen bg-gradient-to-b from-[#063970] to-blue-200">
        <div class="grid place-items-center mx-2 my-20 sm:my-auto" x-data="{ showPass: true }">
            <div class="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12
                px-6 py-10 sm:px-10 sm:py-6
                bg-white rounded-lg shadow-md lg:shadow-lg">
                <div class="text-center mb-4">
                    <h6 class="font-semibold text-[#063970] text-xl">Login</h6>
                </div>
                <form class="space-y-5" method="POST">
                    <div>
                        <input id="email" type="email" class="block w-full py-3 px-3 mt-2
                            text-gray-800 appearance-none
                            border-2 border-gray-100
                            focus:text-gray-500 focus:outline-none focus:border-gray-200 rounded-md" />
                    </div>

                    <div class="relative w-full">
                        <input type="showPass ? 'password' : 'text'" id="password" class="block w-full py-3 px-3 mt-2 mb-4
                            text-gray-800 appearance-none
                            border-2 border-gray-100
                            focus:text-gray-500 focus:outline-none focus:border-gray-200 rounded-md" />
                            <div class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                                <p class="font-semibold" x-text ="showPass ? 'Show' : 'Hide'">Show</p>
                            </div>
                    </div>

                    <button type="submit" class="w-full py-3 mt-10 bg-[#063970] rounded-md
                        font-medium text-white uppercase
                        focus:outline-none hover:shadow-none">
                        Login
                    </button>
                </form>
            </div>
    </div>
</div>
    )
}

export default Login