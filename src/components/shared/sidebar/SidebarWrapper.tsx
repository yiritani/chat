import React, {ReactNode} from 'react';
import DesktopNav from "@/components/shared/sidebar/nav/DesktopNav";
import MobileNav from "@/components/shared/sidebar/nav/MobileNav";

type Props = {
  children: ReactNode;
};

const SidebarWrapper = ({ children }: Props) => {
  return (
    <div className="h-screen w-full p-4 flex flex-col lg:flex-row gap-4">
      <DesktopNav />
      <MobileNav />
      <main className="lg:h-full w-full h-[calc(100%-80px)] flex gap-4">
        {children}
      </main>
    </div>
  );
};

export default SidebarWrapper;
