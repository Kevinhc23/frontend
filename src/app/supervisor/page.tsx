"use client";

import AuthHandler from "@/hooks/useAuthHandler";
import { TablaView } from "@/components/table-view";

const Home = () => {
  return (
    <AuthHandler>
      <TablaView />
    </AuthHandler>
  );
};

export default Home;
