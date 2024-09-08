import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

import React, { FC } from "react";
import { PromptProps } from "./Feed";
import { usePathname } from "next/navigation";

export interface PromptCardProps {
  _id: string;
  img: string;
  name: string;
  email: string;
  prompt: string;
  tag: string;
}
interface PostsProp {
  userId: string;
  post: PromptProps[];
  handelDelete: (postId: string) => Promise<void> | null;
}

const PromptCard: FC<PostsProp> = ({ userId, post, handelDelete }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  console.log(post);
  return (
    <>
      <section className="grid sm:grid-cols-2 md:grid-col-3 lg:grid-col-4 gap-4 py-6">
        {post !== undefined &&
          post.map((post) => (
            <div
              key={post._id}
              className="flex flex-col gap-2 p-2 rounded-md border border-gray-300 shadow-lg"
            >
              <div className="flex flex-col gap-2  ">
                <div className="flex gap-2 items-center ">
                  <Link href={`/profile/${userId}`}>
                    <Image
                      src={post.author.image}
                      width={40}
                      height={40}
                      alt="user profile"
                      className="rounded-full "
                    />
                  </Link>
                  <div>
                    <h1 className="text-md font-serif text-gray-800 ">
                      {post.author.username}
                    </h1>
                    <p className="text-sm text-gray-600 ">
                      {post.author.email}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-gray-700 font-serif ">{post.prompt}</p>
                  <p className=" font-serif text-sm font-semibold text-gray-800">
                    {post.tag}
                  </p>
                </div>
                {post.author._id === session?.user.id &&
                  pathName === `/profile/${post.author._id}` && (
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
                  )}
              </div>
            </div>
          ))}
      </section>
    </>
  );
};

export default PromptCard;
