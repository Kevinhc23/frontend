"use client";

import fetchData from "@/services/data-visits";
import { useEffect, useState } from "react";
import { ApiResponse } from "@/types/type";
import { Table, TextField } from "@radix-ui/themes";
import { DeleteVisit, FinalizarVisit } from "@/components/action-visit";

export const Tabla = () => {
  const [data, setData] = useState<ApiResponse[]>([]);
  const [search, setSearch] = useState("");

  const filteredData = data.filter((item) => {
    const Busqueda =
      item.visitor.name.toLowerCase() +
      " " +
      item.visitor.lastname.toLowerCase();
    return Busqueda.includes(search.toLowerCase());
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchData();
        setData(response);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <div className="mt-16 space-y-8">
        <div className="flex justify-between items-center">
          <TextField.Root className="p-2">
            <TextField.Slot>Buscar</TextField.Slot>
            <TextField.Input
              placeholder="Buscar por nombre"
              className="flex w-auto"
              onChange={(e) => setSearch(e.target.value)}
            />
          </TextField.Root>
        </div>
        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Cedula</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Nombre</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Apellido</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Departamento</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Fecha</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Hora</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Estado</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Acciones</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Seleccionar</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {filteredData.map((item) => (
              <Table.Row key={item.id}>
                <Table.RowHeaderCell>{item.visitor.cedula}</Table.RowHeaderCell>
                <Table.Cell>{item.visitor.name}</Table.Cell>
                <Table.Cell>{item.visitor.lastname}</Table.Cell>
                <Table.Cell>{item.department.department}</Table.Cell>
                <Table.Cell>{item.date}</Table.Cell>
                <Table.Cell>{item.time}</Table.Cell>
                <Table.Cell>{item.visitStatus}</Table.Cell>
                <Table.Cell className="space-x-4">
                  <DeleteVisit idVisit={item.id} />
                </Table.Cell>
                <Table.Cell>
                  <FinalizarVisit idVisit={item.id} status={item.visitStatus} />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </div>
    </>
  );
};
