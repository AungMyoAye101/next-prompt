import Image from "next/image";
import React, { FC } from "react";

interface PromptCardProps {
  img: string;
  name: string;
  email: string;
  prompt: string;
  tags: string;
}

const PromptCard: FC<PromptCardProps> = ({
  img,
  name,
  email,
  prompt,
  tags,
}) => {
  return (
    <section className="flex flex-col gap-2 p-4 rounded-md border border-gray-500 shadow-lg ">
      <div className="flex gap-2 items-center ">
        <Image
          src={img}
          width={40}
          height={40}
          alt="user profile"
          className="rounded-full "
        />
        <div>
          <h1 className="text-md font-semibold font-serif ">{name}</h1>
          <p className="text-sm text-gray-600 ">{email}</p>
        </div>
      </div>
      <div>
        <p className="text-gray-700 font-serif ">{prompt}</p>
        <p className=" font-serif text-sm font-semibold text-gray-800">
          {tags}
        </p>
      </div>
    </section>
  );
};

export default PromptCard;
