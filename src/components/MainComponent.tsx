import React from "react";
import { BsDot, BsThreeDots } from "react-icons/bs";
import { RiChat1Line } from "react-icons/ri";
import { FaRetweet } from "react-icons/fa6";
import { TiHeartOutline } from "react-icons/ti";
import { IoStatsChartOutline } from "react-icons/io5";
import { FiShare } from "react-icons/fi";

function MainComponent() {
  return (
    <main className="flex flex-col w-[50%] h-full min-h-screen border-l border-r border-gray-200">
      <h1 className="text-2xl font-bold p-6 backdrop-blur bg-white/10 sticky top-0">
        Home
      </h1>
      <div className="flex items-stretch space-x-2 border-t border-b border-gray-200 p-4 ">
        <div className="flex-none w-10 h-10 bg-slate-400 rounded-full "></div>
        <div className="flex flex-col w-full h-full">
          <input
            className="w-full h-full bg-transparent outline-none border-none border-gray-200 p-4 placeholder:text-xl placeholder:text-gray-500 "
            type="text"
            placeholder="What is happening?!"
          />

          <div className=" flex w-full justify-between items-center">
            <div></div>
            <div className="w-full max-w-[100px]">
              <button className="rounded-full w-full px-4 py-2 bg-primary text-lg font-bold text-white text-center hover:bg-opacity-70 transition duration-200">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex border-b border-gray-200 space-x-4 p-3">
            <div>
              <div className="flex-none w-10 h-10 bg-slate-400 rounded-full "></div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center w-full justify-between">
                <div className="flex items-center w-full space-x-1 ">
                  <div className="font-bold">Norris</div>
                  <div className="text-gray-500">@Norris</div>
                  <div className="text-gray-500">
                    <BsDot />
                  </div>
                  <div className="text-gray-500">1 hour ago</div>
                </div>
                <div>
                  <BsThreeDots />
                </div>
              </div>
              <div className="text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                numquam deserunt itaque dolorum asperiores quia ducimus aliquam
                sunt.
              </div>
              <div className="bg-slate-400 aspect-square w-full h-80 rounded-2xl mt-2"></div>
              <div className="flex items-center justify-between w-full mt-3">
                <div className="rounded-full hover:bg-primary/20 p-2 transition duration-200 cursor-pointer">
                  <RiChat1Line />
                </div>
                <div className="rounded-full hover:bg-black/10 p-2 transition duration-200 cursor-pointer">
                  <FaRetweet />
                </div>
                <div className="rounded-full hover:bg-black/10 p-2 transition duration-200 cursor-pointer">
                  <TiHeartOutline />
                </div>
                <div className="rounded-full hover:bg-black/10 p-2 transition duration-200 cursor-pointer">
                  <IoStatsChartOutline />
                </div>
                <div className="rounded-full hover:bg-black/10 p-2 transition duration-200 cursor-pointer">
                  <FiShare />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default MainComponent;
