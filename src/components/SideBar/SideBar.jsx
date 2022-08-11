import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

const { Sider } = Layout;
const SideBar = () => {
    const navigation = useSelector(state => state.navigation)

  return (
    
        navigation.navLocation != "AdminLogin" ?  <Sider className="bg-white" collapsible>
      <Menu
        mode="inline"
        className=" h-screen"
      >
        <Menu.Item key="1">
          <Link to={"/"}>
            <span>Home</span>
          </Link>
        </Menu.Item>

        <Menu.Item key="2">
          <Link to={"/category"}>
            <span>Category</span>
          </Link>
        </Menu.Item>

        <Menu.Item key="3">
          <Link to={"/archive"}>
            <span>Archive</span>
          </Link>
        </Menu.Item>
                
        <Menu.Item key="4">
          <Link to={"/blog"}>
            <span>Blog</span>
          </Link>
        </Menu.Item>
                
        <Menu.Item key="5">
          <Link to={"/paper"}>
            <span>Paper</span>
          </Link>
        </Menu.Item>
        {/* <Menu.Item key="6">
          <Link to={"/user"}>
            <span>User</span>
          </Link>
        </Menu.Item> */}
        <Menu.Item key="7">
          
          <span onClick={() => {
             localStorage.removeItem("admin")
            window.location.href = "/"

            }}>Logout</span>
          
        </Menu.Item>
      </Menu>
    </Sider> : ("")
      
   
    );
}

export default SideBar