import { useSession } from "next-auth/react";
import { MenuIcon, ProfileIcon } from "@/components/icons";
import { DateNow } from "@/lib/date";
import Link from "next/link";
import Dropdown from "./dropdown-menu";

const HeaderNavbar = () => {
  const { data: session } = useSession();
  const name = session?.user.name;

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start">
          <button
            data-drawer-target="logo-sidebar"
            data-drawer-toggle="logo-sidebar"
            aria-controls="logo-sidebar"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open sidebar</span>
            <MenuIcon />
          </button>
          <Link href="/" className="flex ml-2 md:mr-24">
            <h2 className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
              Bienvenido {name}
            </h2>
          </Link>
        </div>
        <div className="flex items-center">
          <div className="flex items-center space-x-8">
            <DateNow />
            <div>
              <Dropdown />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderNavbar;
