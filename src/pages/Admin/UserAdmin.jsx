import React , {useState} from 'react'

const UserAdmin = () => {
    const [password, setPassword] = useState("")
    const onInputchange = (event) => { setPassword(event.target.value) }
    const updatePassword = async () => { }
    return (
        <div className='w-full h-screen '>
            <div className='flex justify-center items-center h-full'>
                <div className='text-center'>
                    <div className="my-auto">        
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
              <input type="email" id="email" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password"
                value={password}
              onChange={onInputchange}/>
              </div>
              <div className="my-auto">
                <span type="button" className="text-white rounded-lg px-4 py-2  mt-7 text-sm bg-blue-600 " onClick={()=> updatePassword()}>Update Password</span>
          </div>
           
                </div>
            </div>
        </div>
    )
}

export default UserAdmin;