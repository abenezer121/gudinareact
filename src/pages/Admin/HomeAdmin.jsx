import React , {useEffect , useState} from 'react'
import { getCategory , getPaperData , getBlogData , getArchive } from "./../../helper/api"

const HomeAdmin = () => {
    const [category, setCategory] = useState(0)
    const [paper, setPaper] = useState(0)
    const [blogdata, setBlogData] = useState(0)
    const [archive, setArchive] = useState(0)
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errorMessage, setErrorMesage] = useState("")
    const [showPasswordVariable  , setShowPassword] = useState(false)
    
    useEffect(() => {
        getCategory().then((res) => {
            setCategory(res.length)
        })

         getPaperData().then((res) => {
            setPaper(res.length)
         })
        
         getBlogData().then((res) => {
            setBlogData(res.length)
         })
        
         getArchive().then((res) => {
            setArchive(res.length)
        })
    }, [])

    const onPassowordChange = (event) => {
     setPassword(event.target.value)
  
  }


    const onConfirmPasswordChange = (event) => {
     setConfirmPassword(event.target.value)
  
  }
    
    async function updatePassword(){
        if (password != confirmPassword) {
            setErrorMesage("Password doesn't match")
        } else {
            try {
            
                const update = await fetch(`https://api.gudinatumsalegacy.org/api/v1/admin/`+password+`/`+localStorage.getItem("adminid") , {
                    method: 'PATCH',
                    
                
                })
                console.log(update)
                if (update.status != 200) {
                        alert("Unable to update password")
                } else {
                   
                     alert("Success")
                }
        
        } catch (err) {
            console.log("the error is " + err)
        }
        }
    }

    function showPassword(){
        setShowPassword(!showPasswordVariable)

    }
    return (
        <div className='w-full h-screen '>
            <div className='flex flex-col  items-center '>
                    <div className=' flex justify-between w-[80%] mx-auto mt-[10%]'>
                        <div>
                            <p className='font-bold text-3xl'>Total Papers</p>
                        <p className='text-xl font-bold'>{paper}</p>
                        </div>
                        <div>
                            <p className='font-bold text-3xl'>Total Archive</p>
                        <p className='text-xl font-bold'>{archive}</p>
                        </div>
                        
                    </div>

                     <div className=' flex justify-between w-[80%] mx-auto mt-[5%]'>
                        <div>
                            <p className='font-bold text-3xl'>Total Category</p>
                        <p className='text-xl font-bold'>{category}</p>
                        </div>
                        <div>
                            <p className='font-bold text-3xl'>Total Blogs</p>
                        <p className='text-xl font-bold'>{blogdata}</p>
                        </div>
                        
                </div>
                
                
            </div>
            <div className='mt-[5%] w-[40%] ml-[10%]'>
                <label for="input-group-1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Email</label>

                <p className='text-4xl font-bold'>Update Your Password</p>
                <p className='text-2xl text-red-800'>{ errorMessage}</p>
                    <div className="my-auto">        
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                   {
                        showPasswordVariable ?  <input type="text" id="email" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password"
                        onChange={onPassowordChange}
                        value={password}
                    />: <input type="password" id="email" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password"
                        onChange={onPassowordChange}
                        value={password}
                    />
                    }
                    </div>
                    <div className=" mt-[8%]">        
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm Password</label>
                    {showPasswordVariable ? 
                     <input  type = "text" id="email" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password"
                        onChange={onConfirmPasswordChange}
                        value={confirmPassword}
                        /> : 
                    <input  type = "password" id="email" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="password"
                        onChange={onConfirmPasswordChange}
                        value={confirmPassword}
                    /> }
                </div>
                
                <div className="mb-[20%]">
                    <p className=' mt-[30px] text-xl' onClick={() => showPassword()}>{ showPasswordVariable ? "Hide Password" : "Show Password"  }</p>
                <span type="button" className=" mb-[20%] text-white rounded-lg px-4 py-2  mt-7 text-sm bg-blue-600 w-full "  onClick={()=> updatePassword()}>update password</span>
                </div>
                
            </div>
           
        </div>
    )
}

export default HomeAdmin;