import React , {useState , useEffect} from 'react';
import styled from "styled-components";
import { SearchIcon , MenuIcon, XIcon , ArrowsExpandIcon } from "@heroicons/react/outline";
import { useSelector, useDispatch } from 'react-redux'

import logo from "./../../assets/image/logo.png"
import { Link } from 'react-router-dom';
import {Button , Modal} from "antd"
import ModalContact from "../ModalContact/ModalContact"
import NavDrawer from '../Drawer/NavDrawer';
import {home , _idiology , relationtoothers , papers , archive , gallery} from "./../../redux/actions/navigation"
import Archive from '../../pages/Archive';
const Nav = styled.nav`
  padding: 0 20px;
  min-height: 9vh;
  background: #1c2022;
  display: flex;
  justify-content: space-between;
  align-items: center;

`;








const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;

  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${props => (props.open ? "40%" : "70%")};
  }
`;








const Logo = styled.div`
    text-align: center;
    font-size: 25px;
    color: white;
    
 
`;

const NavIcon = styled.div`
    

`;



const Navbar = () => {

  const [contactVisible, setContactVisible] = useState(false);
   const navigation = useSelector(state => state.navigation)
  
  const handleContactVisible = () => {
    setContactVisible(false);
    console.log("asdf")
  }
  return (
    <>
      {
        navigation.navLocation === 'INTRO' ? ("") : (
          <Nav className= 'h-[60px] w-full h-[80px]  z-10 bg-transparent fixed top-0 text-white align-middle'>
              <Logo><img src={logo} className= "w-[35px] h-[35px]" /></Logo> 
          
                <NavIcon  onClick={() => setContactVisible(true)} className = "  z-10  ">
                  <Line open={contactVisible} className = "bg-black"/>
                  <Line open={contactVisible} className = "bg-black" />
                  <Line open={contactVisible}  className = "bg-black"/>
                </NavIcon>

                <NavDrawer visible={contactVisible} setContact = {()=>{handleContactVisible()}} />
            </Nav>
          )
      }
      
        
      
    </>
  );
};

export default Navbar;





