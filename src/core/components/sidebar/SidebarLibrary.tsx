import React from "react";
import {
  SidebarMenuButton,
  SidebarMenuItem,
} from "../../../components/ui/sidebar";

import {
  recentlyAdded,
  favoriteSongs,
  localFiles,
} from "../../../assets/icons";

const items = [
  {
    title: "Recently Added",
    url: "#",
    icon: (
      <img
        src={recentlyAdded}
        alt="Recently Added Icon"
        width={24}
        height={24}
      />
    ),
  },
  {
    title: "Favorite Songs",
    url: "#",
    icon: (
      <img
        src={favoriteSongs}
        alt="Favorite Songs Icon"
        width={24}
        height={24}
      />
    ),
  },
  {
    title: "Local Files",
    url: "#",
    icon: (
      <img src={localFiles} alt="Local Files Icon" width={24} height={24} />
    ),
  },
];

function SidebarLibrary() {
  return (
    <>
      <SidebarMenuItem>
        <SidebarMenuButton className="h-12 font-semibold text-sm text-[#ADADAD] hover:bg-transparent hover:text-[#ADADAD]  active:bg-transparent active:text-[#ADADAD]">
          <span className="ml-8">LIBRARY</span>
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

export default SidebarLibrary;
