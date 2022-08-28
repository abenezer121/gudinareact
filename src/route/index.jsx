import React from 'react'
import AnimatedCursor from "react-animated-cursor"
import { AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter as Router, Route, Routes , useLocation } from 'react-router-dom' 
import Home from '../pages/Home';
import NavBar from '../components/NavBar/NavBar';
import Idiology from '../pages/Idiology';
import Archive from '../pages/Archive';
import DetailThesis from '../pages/DetailThesis';
import Gallery from '../pages/Gallery';
import Papers from '../pages/Papers';
import RelationToOthers from '../pages/RelationToOthers';
import Page2 from '../pages/Page2';
import RelationDescription from '../pages/RelationDescription';
import News from '../pages/News'
import HomeAdmin from "../pages/Admin/HomeAdmin"
import Description from '../pages/Description';
import SideBar from '../components/SideBar/SideBar';
import AdminSwitcher from '../pages/AdminSwitcher';


import ArchiveAdmin from "../pages/Admin/ArchiveAdmin"
import PaperAdmin  from "../pages/Admin/PaperAdmin"
import BlogAdmin from "../pages/Admin/BlogAdmin"
import CategoryAdmin from "../pages/Admin/CategoryAdmin"
import Login from "../pages/Admin/Login"
import UserAdmin  from "../pages/Admin/UserAdmin"

import { useSelector, useDispatch } from 'react-redux'

const pageVariant = {
  in: {
    opacity: 1,
    x : 0
  },
  out: {
    opacity: 0,
    x : "100%"
  }
}

const pageTransition = {
  duration: 0.5,
}

const RootPage = () => {
  const userState = useSelector((state) => state.usertype);
  console.log(userState)
  const location = useLocation()
  const userRouter = () => {
    return (
      <AnimatePresence>
        <AnimatedCursor
          color="0,0,0"
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={1.7}
          outerAlpha={0}
          outerStyle={{
            border: "3px solid #fff",
          }}
        />

        <NavBar />

        <Routes location={location} keys={location.pathname}>
          <Route path="/admin" element={<AdminSwitcher />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/detailthesis" element={<DetailThesis />} />
          <Route
            path="/"
            element={
              <div className="w-full h-screen">
                <Home />
              </div>
            }
          />
          <Route path="/news" element={<News />} />
          <Route
            path="/archive"
            element={
              <motion.div
                initial="out"
                animate="in"
                exit="out"
                variants={pageVariant}
                className="w-full h-full"
                transition={pageTransition}
              >
                <Archive />
              </motion.div>
            }
          />
          <Route
            path="/idiology"
            element={
              <motion.div
                initial="out"
                animate="in"
                exit="out"
                variants={pageVariant}
                className="w-full h-screen"
                transition={pageTransition}
              >
                <Idiology />
              </motion.div>
            }
          />

          <Route
            path="/relationtoothers"
            element={
              <motion.div
                initial="out"
                animate="in"
                exit="out"
                variants={pageVariant}
                className="w-full h-screen"
                transition={pageTransition}
              >
                <RelationToOthers />
              </motion.div>
            }
          />
          <Route
            path="/gallery"
            element={
              <motion.div
                initial="out"
                animate="in"
                exit="out"
                variants={pageVariant}
                className="w-full h-screen"
                transition={pageTransition}
              >
                <Gallery />
              </motion.div>
            }
          />

          <Route
            path="/papers"
            element={
              <motion.div
                initial="out"
                animate="in"
                exit="out"
                variants={pageVariant}
                className="w-full h-full"
                transition={pageTransition}
              >
                <Papers />
              </motion.div>
            }
          />

          <Route
            path="/relationdescription"
            element={
              <motion.div
                initial="out"
                animate="in"
                exit="out"
                variants={pageVariant}
                className="w-full h-full"
                transition={pageTransition}
              >
                <RelationDescription />
              </motion.div>
            }
          />
          
          <Route
            path="/description"
            element={
              <motion.div
                initial="out"
                animate="in"
                exit="out"
                variants={pageVariant}
                className="w-full h-full"
                transition={pageTransition}
              >
                <Description />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    );
  };

  const adminRouter = () => {
      console.log("index ", userState)
  console.log(userState.usertype == "Admin")
    return (
      <>
        <AnimatedCursor
          color="0,0,0"
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={1.7}
          outerAlpha={0}
          outerStyle={{
            border: "3px solid #fff",
          }}
        />
         <div className="flex">
          <div className="h-screen">
            <SideBar className="h-screen" />
          </div>
          <div className="w-full h-screen">
            <Routes>
              <Route path="/admin" element={<Login />} />
              <Route path="/" element={<HomeAdmin />} />
              <Route path="/category" element={<CategoryAdmin />} />
              <Route path="/archive" element={<ArchiveAdmin />} /> 
              <Route path="/paper" element={<PaperAdmin />} />
              <Route path="/blog" element={<BlogAdmin />} />
              <Route path="/user" element={<UserAdmin />} />
              
              

            </Routes>
          </div>
        </div>
      
      </>
       

    );
  };
console.log()
  return (
    (userState.usertype == "Admin" || localStorage.getItem('admin') == "true") ?  <div className="w-full h-screen ">{adminRouter()}</div> :  <div className="w-full h-screen ">{userRouter()}</div>
   );
};

export default RootPage
