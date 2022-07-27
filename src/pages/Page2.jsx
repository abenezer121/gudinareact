import React , {useState , useEffect} from 'react';
import styled from "styled-components";
import logo from "../assets/image/logo.png";




const Scrollable = styled.div`
   height : 500px;
  padding: 60px 0 0 0;
  background: linear-gradient(rgba(2, 2, 2, 0.6), rgba(0, 0, 0, 0.8)), url("https://images.unsplash.com/photo-1657299156185-6f5de6da0996?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60") fixed center center;
  background-size: cover;
`;




const Page2 = () => {
  const [toggle, toggleNav] = useState(false);

  return (
    <div className='w-full h-screen  bg-red-200'>
      <div className='pt-[430px] pl-[100px]'>

      </div>
      <p className='ml-[150px] '>

            <span className='hover:rotate-45'>C</span>
            <span>r</span>
            <span>e</span>
            <span>a</span>
            <span>t</span>
            <span>i</span>
            <span>v</span>
            <span>e</span>
            
      </p>
    </div>
  );
};

export default Page2;



