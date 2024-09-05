"use client";
import Prompt from "@/models/prompt";
import Profile from "@/components/Profile";
import PromptCard from "@/components/PromptCard";
import { connectToDb } from "@/utils/database";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ProfilePage = () => {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      if (!session?.user) {
        return;
      }
      const res = await fetch(`/api/user/${session?.user.id}/post`);
      const data = await res.json();
      setPosts(data);
    };

    if (session?.user.id) fetchPosts();
  }, []);
  console.log(posts);
  return (
    <div>
      <Profile
        img={session?.user?.image!}
        name={session?.user?.name!}
        email={session?.user?.email!}
      />
      <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-4xl mx-auto gap-4 p-4">
        {posts.map((post) => (
          <div className="flex flex-col gap-2 ">
            <PromptCard
              img={session?.user?.image!}
              name={session?.user?.name!}
              email={session?.user?.email!}
              prompt={""}
              tag={""}
            />
            <div className="flex justify-end gap-2">
              <Link
                href={"/"}
                className="px-3 py-1 text-sm border bg-blue-400 shadow-md rounded-md text-slate-100"
              >
                Edit
              </Link>
              <Link
                href={"/"}
                className="px-3 py-1 text-sm border bg-red-400 shadow-md rounded-md text-slate-100"
              >
                Delete
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProfilePage;
