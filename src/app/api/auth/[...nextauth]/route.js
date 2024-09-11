import User from "@/models/users";
import { connectToDb } from "@/utils/database";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      httpOptions: {
        timeout: 10000, // 10 seconds timeout
      },
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({
        email: session.user.email,
      });
      session.user.id = sessionUser._id.toString();
      return session;
    },

    async signIn({ account, profile, user }) {
      try {
        await connectToDb();

        const userExists = await User.findOne({
          email: profile?.email,
        });
        console.log("User exists:", !!userExists);

        if (!userExists) {
          const newUser = await User.create({
            email: profile?.email,
            username: profile?.name,
            image: profile?.picture,
          });
          console.log("New user created:", newUser);

          return true;
        }
        return true;
      } catch (error) {
        console.error("Error occurred in signIn callback:", error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
