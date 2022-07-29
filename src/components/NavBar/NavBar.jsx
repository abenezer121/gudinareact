import React , {useState , useEffect} from 'react';
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux'
import logo from "./../../assets/image/other/logo.png"
import { Link } from 'react-router-dom';
import NavDrawer from '../Drawer/NavDrawer';
import {home , _idiology , relationtoothers , papers , archive , gallery} from "./../../redux/actions/navigation"








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
          <div className=' items-center w-full h-[60px]  z-10 bg-transparent fixed top-0 text-white align-middle '>
            <div className='w-full flex relative'>
                <Link to='/' className='ml-[15px]'>
                <Logo>
                  {/* <img src={logo} className="w-full h-full " /> */}
                <img src={logo} className="w-[150px] h-[150px] top-0  absolute" />
                </Logo>
              </Link>
              <NavIcon  onClick={() => setContactVisible(true)} className = "mt-[15%] md:mt-[3%] ml-[68%] md:ml-[95%]">
                  <Line open={contactVisible} className = "bg-black"/>
                  <Line open={contactVisible} className = "bg-black" />
                  <Line open={contactVisible}  className = "bg-black"/>
              </NavIcon>

            </div>
           
               
          
              

                <NavDrawer visible={contactVisible} setContact = {()=>{handleContactVisible()}} />
            </div>
          )
      }
      
        
      
    </>
  );
};

export default Navbar;





