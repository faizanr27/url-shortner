import React, { useState } from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";



const Home = () => {


  return (
    <div className="min-h-screen flex-col flex justify-between bg-gray-100">
    <Navbar/>
    <Main />
    <Footer/>
    </div>
  );
};

export default Home;
