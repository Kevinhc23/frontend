import React from "react";
import AsideMenu from "./AsideMenu";
import HeaderNavbar from "@/components/header-navbar";

type DashboardProps = {
  children: React.ReactNode;
};

const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-black dark:border-white">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <HeaderNavbar />
        </div>
      </nav>
      <AsideMenu />
      <div className="p-4 sm:ml-64">{children}</div>
    </>
  );
};

export default Dashboard;
