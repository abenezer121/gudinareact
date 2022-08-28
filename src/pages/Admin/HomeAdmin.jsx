import React , {useEffect , useState} from 'react'
import { getCategory , getPaperData , getBlogData , getArchive } from "./../../helper/api"

const HomeAdmin = () => {
    const [category, setCategory] = useState(0)
    const [paper, setPaper] = useState(0)
    const [blogdata, setBlogData] = useState(0)
    const [archive, setArchive] = useState(0)
    
    useEffect(() => {
        
    },[])
    return (
        <div className='w-full h-screen '>
            <div className='flex flex-col  items-center h-full '>
                    <div className=' flex justify-between w-[80%] mx-auto mt-[10%]'>
                        <div>
                            <p className='font-bold text-3xl'>Total Papers</p>
                            <p>asdfsdf</p>
                        </div>
                        <div>
                            <p className='font-bold text-3xl'>Total Archive</p>
                            <p>asdfsdf</p>
                        </div>
                        
                    </div>

                     <div className=' flex justify-between w-[80%] mx-auto mt-[5%]'>
                        <div>
                            <p className='font-bold text-3xl'>Total Category</p>
                            <p>asdfsdf</p>
                        </div>
                        <div>
                            <p className='font-bold text-3xl'>Total Blogs</p>
                            <p>asdfsdf</p>
                        </div>
                        
                    </div>
                
            </div>
        </div>
    )
}

export default HomeAdmin;