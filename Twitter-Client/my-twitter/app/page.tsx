import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from "react";
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import { BiHash, BiHomeCircle, BiMoney, BiUser } from "react-icons/bi";
import { SlOptions } from "react-icons/sl";
import FeedCard from '@/Components/FeedCard';

const inter = Inter({ subsets: ['latin'] })

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notifications",
    icon: <BsBell />,
  },
  {
    title: "Messages",
    icon: <BsEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    title: "Twitter Blue",
    icon: <BiMoney />,
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },
  {
    title: "More Options",
    icon: <SlOptions />,
  },
];

export default function Home(){
  return (
  <div>
    <div className="grid grid-cols-12 h-screen w-screen bg-white-900">
      <div className="col-span-3 pt-1 ml-24">
        <div className="text-xl h-fit w-fit hover:bg-gray-400 rounded-full p-4 cursor-pointer transition-all">
          <BsTwitter />
        </div>
        <div className="mt-2  pr-4">
          <ul>
            {sidebarMenuItems.map((item) => (
              <li
                className="flex justif  gap-4 hover:bg-gray-400 rounded-full px-3 py-3 w-fit cursor-pointer mt-2"
                key={item.title}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
          <div className="mt-3 px-4">
            <button className="bg-[#1d9bf0] font-semibold text-lg py-2 px-4 rounded-full w-full">
              Tweet
            </button>
          </div>
        </div>
       </div>
       <div className='col-span-5 border-l-[1px] overflow-scroll border-gray-400'>
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />

       </div>
       <div className='col-span-4'></div>
      </div>
      </div>
);
}