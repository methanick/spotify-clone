import React from "react";
import { useSidebar } from "../../../components/ui/sidebar";

import { back } from "../../../assets/icons";

function CustomTrigger() {
  const { toggleSidebar } = useSidebar();
  return (
    <button
      onClick={toggleSidebar}
      className="w-12 h-12 bg-[#212121] rounded-xl hover:cursor-pointer hover:bg-[rgba(45,45,45,1)]"
    >
      <img
        src={back}
        alt="Trigger Sidebar"
        width={10}
        height={10}
        className="m-auto"
      />
    </button>
  );
}

export default CustomTrigger;
