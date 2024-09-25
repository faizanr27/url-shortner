import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"


// Navbar component that receives handleSearch function as a prop
const Navbar = () => {

  const navigate = useNavigate()

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

        <a href="https://github.com/faizanr27">
          <Avatar>
            <AvatarImage src="https://avatars.githubusercontent.com/u/143700173?s=96&v=4" />
            <AvatarFallback>FR</AvatarFallback>
          </Avatar>
        </a>

      </div>
    </div>
  );
};

export default Navbar;
