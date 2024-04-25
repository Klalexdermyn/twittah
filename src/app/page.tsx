import React from "react";
import { LeftSidebar } from "@/components/LeftSidebar";
import { RightSidebar } from "@/components/RightSidebar";
import MainComponent from "@/components/MainComponent";
import { BsSearch } from "react-icons/bs";

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-white ">
      <div
        className="max-w-[60vw] w-full h-full
    flex relative "
      >
        <LeftSidebar />
        <MainComponent />
        <RightSidebar />
      </div>
    </div>
  );
};

export default Home;
