import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button";


// Navbar component that receives handleSearch function as a prop
const Navbar = () => {

  const navigate = useNavigate()


  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/signin');
};
  // Navigate to the home route
  const handleNavigate = () => {
    navigate('/')
  }

  return (
    <div className="w-full   px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="flex max-w-7xl mx-auto items-center justify-between h-16">
        {/* Logo with navigation to home on click */}
        <div className="flex items-center cursor-pointer text-black font-bold " >
          <a onClick={handleNavigate} className="text-2xl font-doodle " >Short.sy</a>
        </div>

        <div className="flex items-center cursor-pointer text-black font-bold gap-5" >
          {/* <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>FR</AvatarFallback>
          </Avatar> */}
        <Button 
                onClick={handleLogout}
                
            >
                Logout
        </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
