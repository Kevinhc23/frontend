import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = nextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "Ingrese Su Correo Aqui",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Ingrese Su Contraseña Aqui",
        },
      },
      async authorize(credentials) {
        const auth = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/signin`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
          }
        );
        if (auth.ok) {
          const data = await auth.json();
          const token = data.token;

          const decoded = JSON.parse(atob(token.split(".")[1]));
          const { email, role, id, lastname, name } = decoded;

          if (token) {
            return { email, role, id, lastname, name, token };
          }
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
export const runtime = "edge";
