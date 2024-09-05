import Image from "next/image";
import React, { FC } from "react";
import PromptCard, { PromptCardProps } from "./PromptCard";

interface ProfileProp {
  img: string;
  name: string;
  email: string;
  posts: PromptCardProps[];
}

const Profile: FC<ProfileProp> = ({ img, name, email, posts }) => {
  return (
    <section className="flex flex-col justify-center items-center gap-4 mt-4">
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
        {posts.map((post, i) => (
          <PromptCard
            name={post.name}
            email={post.email}
            img={post.img}
            prompt={post.prompt}
            tag={post.tag}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
