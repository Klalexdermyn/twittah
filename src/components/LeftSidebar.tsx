import React from "react";
import { GoHomeFill } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { PiBellBold } from "react-icons/pi";
import { PiEnvelopeSimple } from "react-icons/pi";
import { BiBookmark } from "react-icons/bi";
import { FaRegUser, FaXTwitter } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";

import Link from "next/link";

const NAVIGATION_ITEMS = [
  { title: "Xelon", icon: FaXTwitter },
  { title: "Home", icon: GoHomeFill },
  { title: "Explore", icon: FiSearch },
  { title: "Notification", icon: PiBellBold },
  { title: "Messages", icon: PiEnvelopeSimple },
  { title: "Bookmarks", icon: BiBookmark },
  { title: "Profile", icon: FaRegUser },
];
export const LeftSidebar = () => {
  return (
    <section className="w-[23%] sticky top-0 flex flex-col items-stretch h-screen">
      <div className="flex flex-col items-stretch h-full space-y-4 mt-4 p-1">
        {NAVIGATION_ITEMS.map((item) => (
          <Link
            className="hover:bg-black/10 transition duration-200 text-xl flex items-center w-fit justify-start space-x-4 rounded-3xl py-2 px-4"
            href={`/${item.title.toLocaleLowerCase()}`}
            key={item.title}
          >
            <div>
              <item.icon className="text-2xl" />
            </div>
            {item.title !== "Xelon" && <div>{item.title}</div>}
          </Link>
        ))}
        <button className="rounded-full bg-primary pt-3 pb-3 w-11/12 text-lg text-white font-bold text-center hover:bg-opacity-70 transition duration-200">
          Post
        </button>
      </div>
      <button className="rounded-full flex items-center space-x-2 bg-transparent p-4 text-center hover:bg-black/10 transition duration-200 w-full justify-between ">
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-slate-500 w-8 h-8"></div>
          <div className="text-left text-sm">
            <div className="font-semibold">Noriss AI</div>
            <div>@NorissAI2</div>
          </div>
        </div>
        <div>
          <BsThreeDots />
        </div>
      </button>
    </section>
  );
};
