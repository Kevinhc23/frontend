"use client";

import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import Link from "next/link";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    await signIn("credentials", {
      email: data.email as string,
      password: data.password as string,
      callbackUrl: "/",
    });
  };

  return (
    <>
      <section className="flex mx-auto items-center justify-center h-screen">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col p-8 bg-zinc-800 w-[420px]  rounded-2xl"
        >
          <h1 className="mb-4 text-2xl font-bold text-left text-white">
            Inicie sesión en su cuenta
          </h1>
          <div className="flex flex-col mb-4">
            <label className="mb-2 text-md text-white" htmlFor="email">
              Email
            </label>
            <input
              className="px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-transparent"
              type="email"
              id="email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-xs text-red-600">Email is required</span>
            )}
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 text-md text-white" htmlFor="password">
              Password
            </label>
            <input
              className="px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-transparent"
              type="password"
              id="password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-xs text-red-600">Password is required</span>
            )}
          </div>
          <div className="flex justify-between items-center space-x-4 ">
            <button
              className="px-3 py-2 text-sm font-bold text-white bg-zinc-600 rounded-md"
              type="submit"
            >
              Iniciar sesión
            </button>
            <Link
              href="/register"
              className="text-sm font-normal text-white hover:underline hover:underline-offset-2 hover:text-zinc-400 duration-150 transition-all ease-in-out"
            >
              No tienes cuenta? Registrate
            </Link>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
