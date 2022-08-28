import { React, useState, useEffect, useRef } from "react";
import { useSelector , useDispatch} from 'react-redux'
import { adminlogin } from "./../../redux/actions/navigation"
import { Link } from "react-router-dom";
const Login = () => { 
    const dispatch = useDispatch()
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [go , setGo] = useState(false)
    useEffect(() => {
        dispatch(adminlogin())
    }, [])
    
const ConditionalLink = ({ children, to, condition }) => (!!condition && to)
      ? <Link to={to}>{children}</Link>
      : <>{children}</>;
const handleUserName = (event) => { setUserName(event.target.value) };
    const handlePassword = (event) => { setPassword(event.target.value) };
    const handleLogin = async (event) => {
        event.preventDefault()
        //make the api call here
       
        try {
            const login = await fetch(`https://api.gudinatumsalegacy.org/api/v1/admin/login` , {
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
              const data = await login.json()
                localStorage.setItem("adminid", data.id)
                
                //
            window.location.replace("https://www.gudinatumsalegacy.org");
        }
        } catch (err) {
            console.log("the error is " + err)
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
                        <input id="email" type="text" class="block w-full py-3 px-3 mt-2
                            text-gray-800 appearance-none
                            border-2 border-gray-100
                            focus:text-gray-500 focus:outline-none focus:border-gray-200 rounded-md"
                                value={username}
                            onChange={handleUserName}
                            />
                    </div>

                    <div class="relative w-full">
                        <input type="password" id="password" class="block w-full py-3 px-3 mt-2 mb-4
                            text-gray-800 appearance-none
                            border-2 border-gray-100
                            focus:text-gray-500 focus:outline-none focus:border-gray-200 rounded-md"
                                value={password}
                            onChange={handlePassword}
                            />
                            
                    </div>

                    
                        <ConditionalLink to="/" condition={go}>
                        <button type="submit" class="w-full py-3 mt-10 bg-[#063970] rounded-md
                        font-medium text-white uppercase
                        focus:outline-none hover:shadow-none"
                        onClick={handleLogin}
                        >
                        Login
                        </button>
                        </ConditionalLink>
                </form>
            </div>
    </div>
</div>
    )
}

export default Login