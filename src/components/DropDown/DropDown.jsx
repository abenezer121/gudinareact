import React from 'react';
import { Button, Dropdown, Menu, message, Space, Tooltip } from 'antd';
import { ChevronDownIcon} from "@heroicons/react/outline";
import { useSelector , useDispatch} from 'react-redux'
import { setAuthor } from './../../redux/actions/authorAction.js'





const DropDownComp = (props) => {
  
  const dispatch = useDispatch()

  const handleMenuClick = (e) => {
   
    dispatch(setAuthor(e.domEvent.target.outerText))
  };
  const menu = (
  <Menu
    onClick={handleMenuClick}
    items={props.authors}
    />
    
    
);
    return (
        <Dropdown overlay={menu} className='w-[250px] h-[40px] bg-white '>
            <div className='w-full flex justify-between shadow-sm items-center rounded-lg '>
                <span className='font-medium text-black ml-3'>{ props.text}</span>
                <ChevronDownIcon className='text-black w-5 h-5 mr-5 ' />
            </div>
        </Dropdown>
    );
}

export default DropDownComp;