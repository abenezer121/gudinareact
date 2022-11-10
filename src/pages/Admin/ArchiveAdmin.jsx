import {Button, Form, Input, Popconfirm , Table , Select} from "antd"
import React , { useState , useEffect} from "react";
import { getCategory , getArchive } from "../../helper/api" 


const { Option } = Select;

const ArchiveAdmin = () => {

  const [category, setCategory] = useState([])
  const [newCategory, setNewCategory] = useState("")
  const [seelectedCategory, setSelectedCategory] = useState("")
  const [book, setBook] = useState("")
  const [file , setFile] = useState(null)
  
  useEffect(() => {
    window.scrollTo(0, 0);   
    getCategory().then((res) => {
      setCategory(res)
    })

    getArchive().then((res) => {

      setBook(res)
    })
  }, [])
  
 

  const columns = [
    {
      title: 'Name',
      dataIndex: 'title',
      key: 'title',
      editable: true,
    
    },
     {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      editable: true,
    
    },
    
    {
      title: 'Action', dataIndex: '', key: 'x', render: (text, record) => (
      <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={()=> deleteColumn(record.id)}>Delete</button>
      
      ),
    },


  ];

  const deleteColumn = async (id) => {
    const port = 8080
      const category = await fetch(`https://api.gudinatumsalegacy.org/api/v1/archive/`+id , {
        method: 'DELETE',
      })
    window.location.reload(false);
      return category.json()
  }

  const addColumn = async () => {
          if (file == null) {
            alert("Please select a file")
          
          } else {
            const formData = new FormData();
            formData.append("title", newCategory);
            formData.append("category", seelectedCategory);
            formData.append("file", file);
              const port = 8080
                const category = await fetch(`https://api.gudinatumsalegacy.org/api/v1/archive/` , {
                    method: 'POST',
                    headers: {
                     
                    },
                  body: formData,
                
                })
            
          window.location.reload(false);
          
            return category.json()
      }
  }






  const onInputchange = (event) => {
      setNewCategory(event.target.value)
  }
  const handleChange = (value) => { setSelectedCategory(value) };
  const onFileChange = (event) => { setFile(event.target.files[0]) }

  return (
    <>
      <div className="w-full h-full">
        <div className="w-[70%] mx-auto relative mt-20">
          <div className="flex space-x-5  mb-10">
              <div className="my-auto">        
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
              <input type="email"   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Book 1"
                value={newCategory}
              onChange={onInputchange}/>
              </div>
                 <div className="my-auto">        
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">File</label>
              <input type="file"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Category 1"
               
                onChange={onFileChange}
              />
            </div>
               <div className="my-auto">        
                    <Select
                        style={{
                            width: 120,
                          }}
                          onChange={handleChange}> 
                                {
                                    category.map((option) => (
                                        <Option key={option.id} value={option.name}>
                                          {option.name}
                                        </Option>
                                    ))
                                }
                    </Select>
              </div>
            <div className="my-auto">
                <span type="button" className="text-white rounded-lg px-4 py-2  mt-7 text-sm bg-blue-600 " onClick={()=> addColumn()}>Add</span>
          </div>
          </div>
            <Table dataSource={book} columns={columns} />;
        </div>
      </div>
    
      
    </>
  );
};

export default ArchiveAdmin;

