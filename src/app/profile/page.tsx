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
      const res = await fetch(`/api/user/${session?.user.}`);
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
        posts={posts}
      />
    </div>
  );
};

export default ProfilePage;
