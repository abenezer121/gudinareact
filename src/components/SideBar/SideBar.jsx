import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Sider } = Layout;
const SideBar = () => {
    return (
    <Sider className="bg-white" collapsible>
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
      </Menu>
    </Sider>
    );
}

export default SideBar