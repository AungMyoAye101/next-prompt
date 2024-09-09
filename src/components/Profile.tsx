"use client";

import Image from "next/image";
import React, { FC } from "react";
import PromptCard from "./PromptCard";
import { PromptProps } from "./Feed";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

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
    <section className="flex  gap-4 mt-2 p-4">
      <div className="flex flex-col items-center gap-2 p-4 border border-gray-300 shadow-md rounded-md">
        <div className="relative size-24">
          <Image
            src={img}
            fill
            alt="user profile"
            className="object-cover rounded-full mx-auto"
          />
        </div>
        <div className="  flex flex-col gap-1  items-center">
          <h1 className="text-md font-semibold text-gray-600 font-sans  w-full text-center p-1 transition-all ease-in-out duration-500 hover:bg-orange-400 hover:shadow-md">
            {name}
          </h1>
          <p className="text-sm text-gray-500 font-semibold font-serif rounded hover:rounded-full shadow border-gray-200 border w-full text-center p-2 transition-all ease-in-out duration-300 hover:bg-orange-400 hover:shadow-md">
            {email}
          </p>
          <Link
            href={"/create"}
            className="text-sm text-gray-500 font-semibold font-serif rounded hover:rounded-full shadow border-gray-200 border w-full text-center p-2 transition-all ease-in-out duration-300 hover:bg-orange-400 hover:shadow-md"
          >
            create new
          </Link>
          <Link
            href={"/"}
            className="text-sm text-gray-500 font-semibold font-serif rounded hover:rounded-full shadow border-gray-200 border w-full text-center p-2 transition-all ease-in-out duration-300 hover:bg-orange-400 hover:shadow-md"
          >
            back to home
          </Link>
          <button
            onClick={() => signOut()}
            className="text-sm text-red-500 font-semibold font-serif rounded hover:rounded-full shadow border-gray-200 border w-full text-center p-2 transition-all ease-in-out duration-300 hover:text-gray-800  hover:bg-red-400 hover:shadow-md"
          >
            logout
          </button>
        </div>
      </div>
      <div>
        <PromptCard
          userId={id}
          post={posts}
          handelDelete={handelDelete}
          handelTag={() => {}}
          isProfile={true}
        />
      </div>
    </section>
  );
};

export default Profile;
