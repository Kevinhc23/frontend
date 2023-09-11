"use client";

import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

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
    });
  };

  return (
    <>
      <section className="flex justify-center items-center bg-slate-700 text-white text-xl h-screen">
        <form
          className="bg-zinc-950 p-8 flex flex-col justify-center items-center rounded-md"
          onSubmit={handleSubmit(onSubmit)}
          method="POST"
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            {...register("email", { required: true })}
            className="p-2 text-black"
          />
          {errors.email && <span>This field is required</span>}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            {...register("password", { required: true })}
            className="p-2 text-black"
          />
          {errors.password && <span>This field is required</span>}
          <button type="submit">Login</button>
        </form>
      </section>
    </>
  );
};

export default Login;
