import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user?: DefaultSession["user"] & {
      codTipoCliente?: string;
    };
  }

  interface User {
    codTipoCliente?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    codTipoCliente?: string;
  }
}
