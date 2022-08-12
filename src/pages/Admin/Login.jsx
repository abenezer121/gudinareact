import { React, useState, useEffect, useRef } from "react";
import { useSelector , useDispatch} from 'react-redux'
import {adminlogin} from "./../../redux/actions/navigation"
const Login = () => { 
    const dispatch = useDispatch()
    const [username, setUserName] = useState("")
    const [password , setPassword] = useState("")
    useEffect(() => {
        dispatch(adminlogin())
    }, [])
    

const handleUserName = (event) => { setUserName(event.target.value) };
    const handlePassword = (event) => { setPassword(event.target.value) };
    const handleLogin = async () => {
        //make the api call here
          const port = 8080
            const login = await fetch(`https://44.204.78.162/api/v1/admin/login` , {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username : username,
                    password : password
                })
            
            })
        if (login.status != 200) {
            alert("Invalid Credentials")
        }
        else {
            window.location.replace("https://www.gudinatumsalegacy.org/home");
        }
        
    }
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
                            focus:text-gray-500 focus:outline-none focus:border-gray-200 rounded-md"
                                value={username}
                            onChange={handleUserName}
                            />
                    </div>

                    <div class="relative w-full">
                        <input type="showPass ? 'password' : 'text'" id="password" class="block w-full py-3 px-3 mt-2 mb-4
                            text-gray-800 appearance-none
                            border-2 border-gray-100
                            focus:text-gray-500 focus:outline-none focus:border-gray-200 rounded-md"
                                value={password}
                            onChange={handlePassword}
                            />
                            <div class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                                <p class="font-semibold" x-text ="showPass ? 'Show' : 'Hide'">Show</p>
                            </div>
                    </div>

                    <button type="submit" class="w-full py-3 mt-10 bg-[#063970] rounded-md
                        font-medium text-white uppercase
                        focus:outline-none hover:shadow-none"
                        onClick={handleLogin}
                        >
                        Login
                    </button>
                </form>
            </div>
    </div>
</div>
    )
}

export default Login