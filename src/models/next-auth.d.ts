// types/next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      image: string;
      // other properties you want to add
    };
  }

  interface User {
    id: string;
    name: string;
    email: string;
    image: string;
    // other properties you want to add
  }
}
