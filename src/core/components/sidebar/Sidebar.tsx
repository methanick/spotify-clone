import {
  Sidebar as SidebarUi,
  SidebarContent,
  SidebarTrigger,
  SidebarProvider,
  SidebarMenu as SidebarMenuUi,
  SidebarHeader,
} from "../../../components/ui/sidebar";
import SidebarLibrary from "./SidebarLibrary";
import SidebarMenu from "./SidebarMenu";
import SidebarPlaylist from "./SidebarPlaylist";

import SpotifyLogo from "../../../assets/spotify-logo.png";
import CustomTrigger from "./CustomTrigger";

export function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <SidebarUi className="w-[270px]">
        <SidebarHeader className="bg-[#212121] pt-8">
          <img
            src={SpotifyLogo}
            alt="Spotify Logo"
            width={156}
            height={47}
            className="mb-6 mx-8"
          />
        </SidebarHeader>
        <SidebarContent className="bg-[#212121]">
          <SidebarMenuUi className="pb-8">
            <div className="mb-5 ">
              <SidebarMenu />
            </div>
            <div className="mb-5">
              <SidebarLibrary />
            </div>
            <SidebarPlaylist />
          </SidebarMenuUi>
        </SidebarContent>
      </SidebarUi>

      <main>
        <CustomTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
