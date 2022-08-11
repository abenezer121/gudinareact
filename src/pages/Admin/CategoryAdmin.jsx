import {Button, Form, Input, Popconfirm , Table} from "antd"
import React , { useState , useEffect} from "react";
import {getCategory } from "./../../helper/api" 

const CategoryAdmin = () => {

  const [category, setCategory] = useState([])
  const [newCategory, setNewCategory] = useState("")
  
  useEffect(() => {
    window.scrollTo(0, 0);   
    getCategory().then((res) => {
      
      setCategory(res)
    })
  }, [])
  
 

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
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
      const category = await fetch(`https://44.201.88.37/api/v1/category/`+id , {
        method: 'DELETE',
       
      })
    window.location.reload(false);
      return category.json()
  }

  const addColumn = async () => {
   
     const port = 8080
      const category = await fetch(`https://44.201.88.37/api/v1/category/` , {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({name : newCategory})
       
      })
    window.location.reload(false);
      return category.json()

  }






  const onInputchange = (event) => {
     setNewCategory(event.target.value)
  
  }

  return (
    <>
      <div className="w-full h-full">
        <div className="w-[70%] mx-auto relative mt-20">
          <div className="flex space-x-5 ml-[70%] mb-10">
              <div className="my-auto">        
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
              <input type="email" id="email" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Category 1"
                value={newCategory}
              onChange={onInputchange}/>
              </div>
              
            <div className="my-auto">
                <span type="button" className="text-white rounded-lg px-4 py-2  mt-7 text-sm bg-blue-600 " onClick={()=> addColumn()}>Add</span>
          </div>
          </div>
            <Table dataSource={category} columns={columns} />;
        </div>
      </div>
    
      
    </>
  );
};

export default CategoryAdmin;

