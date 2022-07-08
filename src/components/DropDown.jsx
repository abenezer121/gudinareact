import React from 'react';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, message, Space, Tooltip } from 'antd';
import {
  PhoneIcon,
    ArrowSmRightIcon,
  ChevronDownIcon,

  AcademicCapIcon,
  PlusIcon,
  SearchIcon
   
                          
} from "@heroicons/react/outline";

const handleButtonClick = (e) => {
  message.info('Click on left button.');
  console.log('click left button', e);
};

const handleMenuClick = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};

const menu = (
  <Menu
  
    onClick={handleMenuClick}
    items={[
      {
        label: '1st menu item',
        key: '1',
        icon: <UserOutlined />,
      },
      {
        label: '2nd menu item',
        key: '2',
        icon: <UserOutlined />,
      },
      {
        label: '3rd menu item',
        key: '3',
        icon: <UserOutlined />,
      },
    ]}
  />
);


const DropDownComp = (props) => {
    return (
        <Dropdown overlay={menu} className='w-[250px] h-[40px] bg-white '>
            <div className='w-full flex justify-between shadow-sm items-center rounded-lg '>
                <span className='font-medium text-black mx-5'>{ props.text}</span>
                <ChevronDownIcon className='text-black w-5 h-5 mr-5 ' />
            </div>
   
    </Dropdown>

    );
}

export default DropDownComp;