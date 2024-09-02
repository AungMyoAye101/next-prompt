import User from "@/models/users";
import { connectToDb } from "@/utils/database";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    // async session({ session }) {
    //   const sessionUser = await User.findOne({
    //     email: session.user.email,
    //   });
    //   session.user.id = sessionUser._id.toString();
    //   return session;
    // },
    async signIn({ account, profile, user }) {
      try {
        await connectToDb();

        const userExists = await User.findOne({
          email: profile?.email,
        });

        if (!userExists) {
          await User.create({
            email: profile?.email,
            username: profile?.name?.replace(" ", "").toLocaleUpperCase(),
            image: profile?.image,
          });
          return true;
        }
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
