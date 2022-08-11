


import {Button, Form, Input, Popconfirm , Table} from "antd"
import React , { useState , useEffect} from "react";
import {getBlogData } from "./../../helper/api" 

const BlogAdmin = () => {

  const [blog, setBlog] = useState([])



  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [video, setVideo] = useState("")
  const [link, setLink] = useState("")
  
  
  useEffect(() => {
    window.scrollTo(0, 0);   
    getBlogData().then((res) => {
      
      setBlog(res)
    })
  }, [])
  
 

const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'name',
     editable: true,
   
  },
  {
    title: 'Content',
    dataIndex: 'content',
    key: 'name',
     editable: true,
   
  },
  {
    title: 'Video',
    dataIndex: 'video',
    key: 'name',
     editable: true,
   
  },
  {
    title: 'Link',
    dataIndex: 'link',
    key: 'name',
     editable: true,
   
  },
  {
    title: 'Action', dataIndex: '', key: 'x', render: (text, record) => (
     <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={()=> deleteColumn(record.id)}>Delete</button>
     
    ),
  },
  //  {
  //   title: 'Action', dataIndex: '', key: 'x', render: (text, record) => (
  //    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={()=> console.log(record)}>Edit</button>
     
  //   ), },

];

  const deleteColumn = async (id) => {
    
    const port = 8080
      const category = await fetch(`http://44.201.88.37/api/v1/blog/`+id , {
        method: 'DELETE',
       
      })
    window.location.reload(false);
      return category.json()
  }

  const addColumn = async () => {
   
     const port = 8080
      const category = await fetch(`http://44.201.88.37/api/v1/blog/` , {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
          title: title,
          content: content,
          video: video,
          link: link,
        })
       
      })
      window.location.reload(false);
      return category.json()

  }








  const onTitleChange = (event) => {
     setTitle(event.target.value)
  
  }

    const onContentChange = (event) => {
     setContent(event.target.value)
  
  }


    const onVideoChange = (event) => {
     setVideo(event.target.value)
  
  }


    const onLinkChange = (event) => {
     setLink(event.target.value)
  
  }


  return (
    <>
      <div className="w-full h-full">
        <div className="w-[70%] mx-auto relative mt-20">
          <div className=" mb-10">
              <div className="my-auto">        
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
              <input type="email" id="email" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title"
                value={title}
              onChange={onTitleChange}/>
            </div>
            <div className="my-auto">        
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Content</label>
              <textarea type="email" id="email" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Content"
                value={content}
              onChange={onContentChange}/>
            </div>
             <div className="my-auto">        
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Video</label>
              <input type="email" id="email" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Video"
                value={video}
              onChange={onVideoChange}/>
            </div>
            <div className="my-auto">        
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Link</label>
              <input type="email" id="email" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Link"
                value={link}
              onChange={onLinkChange}/>
              </div>
              
            <div className="my-auto">
                <span type="button" className="text-white rounded-lg px-4 py-2  mt-7 text-sm bg-blue-600 " onClick={()=> addColumn()}>Add</span>
          </div>
          </div>
            <Table dataSource={blog} columns={columns} />;
        </div>
      </div>
    
      
    </>
  );
};

export default BlogAdmin;

