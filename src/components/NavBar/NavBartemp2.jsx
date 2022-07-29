

import React , {useState , useEffect} from 'react';
import styled from "styled-components";
import { SearchIcon , MenuIcon, XIcon , ArrowsExpandIcon } from "@heroicons/react/outline";
import { useSelector, useDispatch } from 'react-redux'

import logo from "./../../assets/image/logo.png"
import { Link } from 'react-router-dom';
import {Button , Modal} from "antd"
import ModalContact from "../ModalContact/ModalContact"
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


const Item = styled.li``;

const LLink = styled.a`
  color: white;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
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





const Overlay = styled.div`
  position: absolute;
  height: ${props => (props.open ? "91vh" : 0)};
  width: 100vw;
  background: #1c2022;
  transition: height 0.4s ease-in-out;

 
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);

  li {
    opacity: ${props => (props.open ? 1 : 0)};
    font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }

  li:nth-child(2) {
    margin: 50px 0px;
  }
`;

const Logo = styled.div`
    text-align: center;
    font-size: 25px;
    color: white;
    
 
`;

const NavIcon = styled.div`
    

`;

  {/* <MenuIcon className='w-10 h-10 text-black ' onClick={() => setContactVisible(true)}></MenuIcon> */}
                {/* <NavIcon  onClick={() => setContactVisible(true)} className = "w-[150px] h-[150px] ">
                  <Line open={contactVisible} className = "bg-black"/>
                  <Line open={contactVisible} className = "bg-black" />
                  <Line open={contactVisible}  className = "bg-black"/>
              </NavIcon> */}

const Navbar = () => {
  const [toggle, toggleNav] = useState(false);

  return (
    <>
      <Nav className={
        (toggle == true) ? 'h-[60px] w-full h-[80px]  z-10 bg-[#1c2022] fixed top-0 text-white align-middle ' :
          'h-[60px] w-full h-[80px]  z-10 bg-transparent fixed top-0 text-white align-middle '
      }>
       <Logo><img src={logo} className= "w-[35px] h-[35px]" /></Logo> 
  
        <NavIcon onClick={() => toggleNav(!toggle)} className = "  z-10  ">
          <Line open={toggle} className = "bg-black"/>
          <Line open={toggle} className = "bg-black" />
          <Line open={toggle}  className = "bg-black"/>
        </NavIcon>
      
      
      </Nav>
        
      <Overlay open={toggle} className = "  z-10 ">
        <OverlayMenu open={toggle}>
          <Item>
            <LLink target="#" href="https://www.instagram.com/igor_dumencic/">
              
               <div className='sketchy'>Instagram</div>
            </LLink>
          </Item>
          <Item>
            <LLink target="#" href="https://www.behance.net/igordumencic">
              
              <div className='sketchy'>Behance</div>
            </LLink>
          </Item>
          <Item>
            <LLink target="#" href="https://github.com/Igor178">
              
              <div className='sketchy'>Github</div>
            </LLink>
          </Item>
        </OverlayMenu>
      </Overlay>
    </>
  );
};

export default Navbar;





