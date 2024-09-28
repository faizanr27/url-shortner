import React, { useState } from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";
import UserUrlList from "./UserUrlList";
import { Button } from "@/components/ui/button";

const Home = () => {
  const [showUrlList, setShowUrlList] = useState(false);

  const handleToggleView = () => {
    setShowUrlList(!showUrlList);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-end mb-6">
          <Button onClick={handleToggleView}>
            {showUrlList ? "Shorten URL" : "My URLs"}
          </Button>
        </div>
        {showUrlList ? <UserUrlList /> : <Main />}
      </div>
      <Footer />
    </div>
  );
};

export default Home;