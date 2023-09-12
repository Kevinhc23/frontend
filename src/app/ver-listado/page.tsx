"use client";

import AuthHandler from "@/hooks/useAuthHandler";
import { Tabla } from "@/components/table";

const Home = () => {
  return (
    <AuthHandler>
      <Tabla />
    </AuthHandler>
  );
};

export default Home;
