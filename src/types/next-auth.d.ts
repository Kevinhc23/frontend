import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      lastname: string;
      email: string;
      role: {
        name: string;
      };
      token: string;
    };
  }
}
