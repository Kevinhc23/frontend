import {
  DashboardIcon,
  AddVisitIcon,
  EditRegisterIcon,
} from "@/components/icons";
import Link from "next/link";
import { useSession } from "next-auth/react";

const menuRecepcion = [
  {
    name: "Ver Listado",
    icon: DashboardIcon,
    href: "/ver-listado",
  },
  {
    name: "Agregar Visita",
    icon: AddVisitIcon,
    href: "/add-register",
  },
  {
    name: "Editar Registro",
    icon: EditRegisterIcon,
    href: "/dashboard/edit-register",
  },
];

const menuSupervisor = [
  {
    name: "Ver Listado",
    icon: DashboardIcon,
    href: "/",
  },
];

const MenuRecepcion = () => {
  return (
    <>
      <ul className="space-y-4 font-medium">
        {menuRecepcion.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <item.icon />
              <span className="ml-3">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

const MenuSupervisor = () => {
  return (
    <>
      <ul className="space-y-4 font-medium">
        {menuSupervisor.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <item.icon />
              <span className="ml-3">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export const NavbarMenu = () => {
  const { data: session, status } = useSession();
  const role = session?.user.role.name;
  return <>{role === "RECEPCION" ? <MenuRecepcion /> : <MenuSupervisor />}</>;
};
