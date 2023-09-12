"use client";

import { ApiResponse } from "@/types/type";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";

const NewVisit = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const registerVisit = async (formData: any) => {
    try {
      const url = process.env.NEXT_PUBLIC_API_URL;
      const response = await fetch(`${url}/visits`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(formData);
      const data: ApiResponse[] = await response.json();
      toast.success("Visita registrada con exito");
      console.log(data);

      reset();
    } catch (error) {
      console.error("Error al registrar visita:", error);
    }
  };

  return (
    <>
      <section className="mt-20 text-white text-xl">
        <form
          onSubmit={handleSubmit(registerVisit)}
          className="flex flex-col p-8 bg-zinc-800  rounded-2xl h-auto space-y-4 w-1/2 mx-auto "
        >
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
            className="py-2 px-4 rounded-xl text-black"
          />
          {errors.name && <span>Este campo es requerido</span>}
          <label htmlFor="lastname">Apellido</label>
          <input
            type="text"
            id="lastname"
            {...register("lastname", { required: true })}
            className="py-2 px-4 rounded-xl text-black"
          />
          {errors.lastname && <span>Este campo es requerido</span>}

          <label htmlFor="cedula">Cedula</label>
          <input
            type="text"
            id="cedula"
            {...register("cedula", {
              required: true,
              maxLength: 10,
              minLength: 9,
              validate: {
                positiveNumber: (value) => parseInt(value) > 0,
              },
            })}
            className="py-2 px-4 rounded-xl text-black"
          />
          {errors.cedula && (
            <>
              <span>
                Ingrese bien los campos, numero minimo de digitos 9 y maximo 10
              </span>
            </>
          )}

          <label htmlFor="visitPurpose">Proposito</label>
          <input
            type="text"
            id="visitPurpose"
            {...register("visitPurpose", { required: true })}
            className="py-2 px-4 rounded-xl text-black"
          />
          {errors.visitPurpose && <span>Este campo es requerido</span>}
          <label htmlFor="visitComments">Comentario</label>
          <input
            type="text"
            id="visitComments"
            {...register("visitComments", { required: false })}
            className="py-2 px-4 rounded-xl text-black"
          />

          <div className="flex justify-between items-center space-x-4">
            <label htmlFor="visitStatus">Estado</label>
            <select
              id="visitStatus"
              {...register("visitStatus", { required: true })}
              className="py-2 px-4 rounded-xl w-1/2 text-black"
            >
              <option value="Pendiente">Pendiente</option>
              <option value="Finalizada">Finalizada</option>
            </select>
            {errors.visitStatus && <span>Este campo es requerido</span>}
            <label htmlFor="department">Departamento</label>
            <select
              id="department"
              {...register("department", { required: true })}
              className="py-2 px-4 rounded-xl w-1/2 text-black"
            >
              <option value="ADMINISTRACION">ADMINISTRACION</option>
              <option value="PROVEEDORES">PROVEEDORES</option>
              <option value="SERVICIO AL CLIENTE">SERVICIO AL CLIENTE</option>
              <option value="VENTAS">VENTAS</option>
            </select>
            {errors.department && <span>Este campo es requerido</span>}
          </div>

          <button
            type="submit"
            className="px-8 py-2 bg-slate-700 border-white border-2 rounded-xl"
          >
            Enviar
          </button>
        </form>
      </section>
      <Toaster position="top-right" />
    </>
  );
};

export default NewVisit;
