import React from "react";
import {
  SidebarMenuButton,
  SidebarMenuItem,
} from "../../../components/ui/sidebar";

import { playlist } from "../../../assets/icons";

const items = [
  {
    title: "Lo-fi Music",
    url: "#",
    icon: <img src={playlist} alt="Playlist Icon" width={24} height={24} />,
  },
  {
    title: "Best of Bon Jovi",
    url: "#",
    icon: <img src={playlist} alt="Playlist Icon" width={24} height={24} />,
  },
  {
    title: "Best of John Mayer",
    url: "#",
    icon: <img src={playlist} alt="Playlist Icon" width={24} height={24} />,
  },
];

function SidebarPlaylist() {
  return (
    <>
      <SidebarMenuItem>
        <SidebarMenuButton className="h-12 font-semibold text-sm text-[#ADADAD] hover:bg-transparent hover:text-[#ADADAD] active:bg-transparent active:text-[#ADADAD]">
          <div className="w-full flex justify-between items-center">
            <span className="ml-8">PLAYLIST</span>
            <span className="mr-8 text-base hover:text-white hover:cursor-pointer">
              +
            </span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton
            asChild
            className="h-12 rounded-none border-r-0 text-[#ADADAD] text-base font-normal hover:text-white hover:font-semibold hover:bg-[linear-gradient(-90deg,#2D2D2D_39.81%,rgba(45,45,45,1)_90.37%)] hover:border-r-6 hover:border-r-[#1DB954] active:text-white"
          >
            <a href={item.url}>
              <span className="ml-8">{item.icon}</span>
              <span className="ml-3">{item.title}</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </>
  );
}

export default SidebarPlaylist;
