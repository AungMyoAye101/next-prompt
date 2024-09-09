"use client";

import Image from "next/image";
import React, { FC } from "react";
import PromptCard from "./PromptCard";
import { PromptProps } from "./Feed";
import Link from "next/link";
import { useSession } from "next-auth/react";

interface ProfileProp {
  id: string;
  img: string;
  name: string;
  email: string;
  posts: PromptProps[];
  handelDelete: (postId: string) => Promise<void>;
}

const Profile: FC<ProfileProp> = ({
  id,
  img,
  name,
  email,
  posts,
  handelDelete,
}) => {
  return (
    <section className="flex  gap-4 mt-2 p-8">
      <div className="flex flex-col items-center gap-2 p-4 border border-red-400">
        <div className="relative size-24">
          <Image
            src={img}
            fill
            alt="user profile"
            className="object-cover rounded-full mx-auto"
          />
        </div>
        <div className=" text-center space-y-1">
          <h1 className="text-lg font-semibold font-serif">{name}</h1>
          <p className="text-md text-gray-500 font-semibold font-serif">
            {email}
          </p>
        </div>
      </div>
      <div>
        <PromptCard
          userId={id}
          post={posts}
          handelDelete={handelDelete}
          isProfile={true}
        />
      </div>
    </section>
  );
};

export default Profile;
