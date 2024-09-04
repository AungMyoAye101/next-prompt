"use client";

import Profile from "@/components/Profile";
import { useSession } from "next-auth/react";
import React from "react";

const ProfilePage = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div>
      <Profile
        img={session?.user?.image!}
        name={session?.user?.name!}
        email={session?.user?.email!}
      />
    </div>
  );
};

export default ProfilePage;
