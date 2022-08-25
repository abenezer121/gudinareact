import React, { useEffect, useState } from 'react'
import getYouTubeID from "get-youtube-id";
import { getBlogData } from '../helper/api';
const News = () => {
    const [blogdata, setBlogData] = useState([])
    useEffect(() => { 
       
       
          getBlogData().then((res) => {
            let _onlineCategory = []
                for (let i = 0; i < res.length; i++){
                _onlineCategory.push(res[i])
            }
            
            setBlogData(_onlineCategory)
          })
         console.log(blogdata)
    } , [])

   
    return (
       
        <section class="pt-20 lg:pt-[120px] pb-10 lg:pb-20">
        <div class="container">
            <div class="flex flex-wrap">
                <div class="w-full ">
                    <div class="ml-[3%]  mb-[60px] lg:mb-20 max-w-[510px] ">
                
                    <h2
                        class="
                        font-bold
                        text-3xl
                        sm:text-4xl
                        md:text-[40px]
                        
                        mb-4
                        text-[#3a0aa3]
                        "
                                
                                style={{
                   fontFamily: "Odibee Sans" 
                  }}
                        >
                        Recent News
                    </h2>
                    
                            
                    </div>
                </div>
            </div>
                        <div class="flex flex-wrap -mx-4">
                            

                    {/* loop here and add blogs */}
                    
                    
                    {
                        blogdata.map((blog) => { 
                            return <div class="w-full md:w-1/2 lg:w-1/3 px-4">
                                <div class="max-w-[370px] mx-auto mb-10">
                                    {!(blog.video == undefined || blog.video == null || blog.video == "") ? <div class="rounded overflow-hidden mb-8">
                                        <iframe
                                            width="100%"
                                            height="350"
                                            src={`https://www.youtube.com/embed/${getYouTubeID(
                                            blog.video
                                            )}`}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            title="Embedded youtube"
                                        />
                                </div> : <div className='h-[390px]'></div>

                                    }
                                    
                                <div>
                                    
                                    <h3>
                                        <a
                                            href="javascript:void(0)"
                                            class="
                                            font-semibold
                                            text-xl
                                            sm:text-2xl
                                            lg:text-xl
                                            xl:text-2xl
                                            mb-4
                                            inline-block
                                            text-dark
                                            hover:text-primary
                                            "
                                            >
                                        {blog.title}
                                        </a>
                                    </h3>
                                    <p class="text-base text-body-color">
                                        {blog.content}
                                        </p>
                                        {
                                            blog.link == undefined || blog.link == null || blog.link == "" ? <div></div> : <a href={blog.link}>Visit Link</a>
                                        }
                                        
                                </div>
                                </div>
                            </div>

                        })
                    }
                
            
            </div>
        </div>
        </section>

    )
}

export default News;