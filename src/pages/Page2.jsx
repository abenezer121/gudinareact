import React , {useState , useEffect} from 'react';
import styled from "styled-components";
import "./../assets/css/navbar.css"




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
      
<section>
  <h2>Underline Fill</h2>
  <div class="navtest fill">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Downloads</a></li>
      <li><a href="#">More</a></li>
      <li><a href="#">Nice staff</a></li>
    </ul>
  </div>
</section>


    </div>
  );
};

export default Page2;



