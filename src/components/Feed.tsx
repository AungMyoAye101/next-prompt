"use client";

import React, { useEffect, useState } from "react";
import PromptCard from "./PromptCard";
import { PromptCardProps } from "./PromptCard";
const Feed = () => {
  const [posts, setPosts] = useState<PromptCardProps[]>([]);

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
      <h1 className="text-xl font-semibold font-serif">Populer Prompts </h1>
      <section className="grid sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4 gap-4 py-6">
        {posts.map((post, i) => (
          <div key={i}>
            <PromptCard
              img={""}
              name={""}
              email="ama@gmail.com"
              prompt={post.prompt}
              tag={post.tag}
            />
          </div>
        ))}
      </section>
    </section>
  );
};

export default Feed;
