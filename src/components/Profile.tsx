"use client";

import Image from "next/image";
import React, { FC } from "react";
import PromptCard from "./PromptCard";
import { PromptProps } from "./Feed";
import Link from "next/link";

interface ProfileProp {
  img: string;
  name: string;
  email: string;
  posts: PromptProps[];
  handelDelete: (postId: string) => Promise<void>;
}

const Profile: FC<ProfileProp> = ({
  img,
  name,
  email,
  posts,
  handelDelete,
}) => {
  return (
    <section className="flex flex-col justify-center items-center gap-4 mt-4 p-8">
      <div className="relative size-40">
        <Image
          src={img}
          fill
          alt="user profile"
          className="object-cover rounded-md "
        />
      </div>
      <div className="text-center space-y-1">
        <h1 className="text-xl font-bold font-serif">{name}</h1>
        <p className="text-md text-gray-500 font-semibold font-serif">
          {email}
        </p>
      </div>
      <div>
        <section className="grid sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4 gap-4 py-6">
          {posts.map((post) => (
            <div
              key={post._id}
              className="flex flex-col gap-2 p-2 rounded-md border border-gray-300 shadow-lg"
            >
              <PromptCard
                name={post.author.username}
                email={post.author.email}
                img={post.author.image}
                prompt={post.prompt}
                tag={post.tag}
              />
              <div className="flex gap-1 justify-end">
                <Link
                  href={`/updatePrompt/${post._id}`}
                  className="py-1 px-2 rounded  text-sm text-blue-500  hover:bg-blue-500 hover:text-gray-100 font-sans font-semibold "
                >
                  Edit
                </Link>
                <button
                  onClick={() => handelDelete(post._id)}
                  className="py-1 px-2 rounded  text-sm text-red-500 hover:bg-red-500 hover:text-gray-100 font-sans font-semibold "
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};

export default Profile;
