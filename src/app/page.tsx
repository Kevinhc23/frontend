"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Home = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  return (
    <>
      {status === "loading" && <div>Loading...</div>}
      {status === "authenticated" && (
        <div>
          <h1>Home</h1>
          <p>Welcome {session.user.name}</p>
          <p>{session.user.lastname}</p>
        </div>
      )}
      {status === "unauthenticated" && router.push("/login")}
    </>
  );
};

export default Home;
