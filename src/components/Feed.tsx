"use client";

import React, { useEffect, useState } from "react";
import PromptCard from "./PromptCard";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";

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
  const router = useRouter();
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  const [searchPosts, setSearchPosts] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchPost = async () => {
    const res = await fetch("/api/prompt", { next: { revalidate: 1000 } });
    const data = await res.json();

    setPosts(data);
    setSearchPosts(data);
  };
  useEffect(() => {
    fetchPost();
  }, []);

  const filteredPosts = (searchText: string) => {
    const regex = new RegExp(searchText, "i");
    return posts.filter(
      (post: any) =>
        regex.test(post.author.username) ||
        regex.test(post.prompt) ||
        regex.test(post.tag)
    );
  };

  const handelChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchText(e.target.value);
  };

  const handelTag = (tagNmae: string) => {
    setSearchText(tagNmae);
    setSearchPosts(filteredPosts(searchText));
  };

  const searchForm = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSearchPosts(filteredPosts(searchText));
  };

  return (
    <section className="p-4 md:p-6 space-y-4">
      <form onSubmit={searchForm} className="mt-4">
        <div className="w-full flex items-center px-4 py-2 bg-gray-100 rounded shadow-lg border border-gray-400 ">
          <input
            type="text"
            placeholder="search a tag or username or prompt"
            value={searchText}
            onChange={handelChange}
            className="flex-1 focus:outline-none bg-transparent focus:text-green-500"
          />
          <FaSearch className="text-gray-500" />
        </div>
      </form>
      {session?.user.id && (
        <>
          <h1 className="text-xl font-semibold font-serif bg-gradient-to-r from-gray-600  to-orange-500 bg-clip-text text-transparent">
            Populer Prompts{" "}
          </h1>
          <PromptCard
            userId={session?.user.id!}
            post={searchPosts}
            handelDelete={async () => {}}
            handelTag={handelTag}
            isProfile={false}
          />
        </>
      )}
    </section>
  );
};

export default Feed;
