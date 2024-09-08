"use client";

import React, { useEffect, useState } from "react";
import PromptCard from "./PromptCard";
import { useSession } from "next-auth/react";

export interface AuthorProp {
  _id: string;
  image: string;
  username: string;
  email: string;
}
export interface PromptProps {
  _id: string;
  prompt: string;
  tag: string;
  author: AuthorProp;
}
const Feed = () => {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);

  const fetchPost = async () => {
    const res = await fetch("/api/prompt");
    const data = await res.json();

    setPosts(data);
  };
  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <section className="p-4 md:p-6">
      {session?.user.id && (
        <>
          <h1 className="text-xl font-semibold font-serif">Populer Prompts </h1>
          {posts.map((post) => (
            <PromptCard
              userId={session.user.id}
              post={posts}
              handelDelete={null}
            />
          ))}
        </>
      )}
    </section>
  );
};

export default Feed;
