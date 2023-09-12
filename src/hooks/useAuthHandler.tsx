"use client";

import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loading from "@/components/loading";
import Dashboard from "@/components/dashboard";

type childrenProps = {
  children: React.ReactNode;
};

const AuthHandler = ({ children }: childrenProps) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "authenticated") {
    return <Dashboard>{children}</Dashboard>;
  }

  if (status === "unauthenticated") {
    router.push("/login");
    return null;
  }

  return null;
};

export default AuthHandler;
