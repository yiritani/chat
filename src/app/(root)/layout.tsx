import React, {ReactNode} from "react";
import SidebarWrapper from "@/components/shared/sidebar/SidebarWrapper";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }: Props) => {
  return <SidebarWrapper>{children}</SidebarWrapper>;
};

export default Layout
