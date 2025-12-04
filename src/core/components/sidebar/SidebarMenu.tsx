import React from "react";
import {
  SidebarMenuButton,
  SidebarMenuItem,
} from "../../../components/ui/sidebar";

import { home, albums, discovery, radio, podcast } from "../../../assets/icons";

const items = [
  {
    title: "Home",
    url: "#",
    icon: <img src={home} alt="Home Icon" width={24} height={24} />,
  },
  {
    title: "Discover",
    url: "#",
    icon: <img src={discovery} alt="Discover Icon" width={24} height={24} />,
  },
  {
    title: "Radio",
    url: "#",
    icon: <img src={radio} alt="Radio Icon" width={24} height={24} />,
  },
  {
    title: "Albums",
    url: "#",
    icon: <img src={albums} alt="Albums Icon" width={24} height={24} />,
  },
  {
    title: "Podcast",
    url: "#",
    icon: <img src={podcast} alt="Podcast Icon" width={24} height={24} />,
  },
];

function SidebarMenu() {
  return items.map((item) => (
    <SidebarMenuItem key={item.title}>
      <SidebarMenuButton
        asChild
        className="h-12 rounded-none border-r-0 text-[#ADADAD] text-base font-normal hover:text-white hover:font-semibold hover:bg-[linear-gradient(-90deg,#2D2D2D_39.81%,rgba(45,45,45,1)_90.37%)] hover:border-r-6 hover:border-r-[#1DB954] active:text-white"
      >
        <a href={item.url}>
          <span className="mx-8">{item.icon}</span>
          <span className="ml-3">{item.title}</span>
        </a>
      </SidebarMenuButton>
    </SidebarMenuItem>
  ));
}

export default SidebarMenu;
