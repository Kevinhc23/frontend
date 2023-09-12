import React from "react";
import { NavbarMenu } from "./navbar-menu";
("@/components/navbar-menu");

const AsideMenu: React.FC = () => {
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-black dark:border-white"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-black">
        <NavbarMenu />
      </div>
    </aside>
  );
};

export default AsideMenu;
