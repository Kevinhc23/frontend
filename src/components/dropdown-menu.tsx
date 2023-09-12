"use client";

import { DropdownMenu, Flex, Avatar } from "@radix-ui/themes";
import { useSession, signOut } from "next-auth/react";

const Dropdown = () => {
  const { data: session } = useSession();
  const role = session?.user.role.name;
  return (
    <>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Flex>
            <Avatar
              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              fallback="S"
            />
          </Flex>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <span className="p-2">{role}</span>
          <DropdownMenu.Item>Perfil</DropdownMenu.Item>

          <DropdownMenu.Separator />

          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger>Usuarios</DropdownMenu.SubTrigger>
            <DropdownMenu.SubContent>
              <DropdownMenu.Item>Agregar Usuarios</DropdownMenu.Item>
              <DropdownMenu.Item>Editar Usuarios</DropdownMenu.Item>
              <DropdownMenu.Item>Eliminar Usuarios</DropdownMenu.Item>
            </DropdownMenu.SubContent>
          </DropdownMenu.Sub>

          <DropdownMenu.Separator />
          <DropdownMenu.Item color="red" onSelect={() => signOut()}>
            Salir de la cuenta
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </>
  );
};

export default Dropdown;
