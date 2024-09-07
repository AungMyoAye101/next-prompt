"use client";
import Prompt from "@/models/prompt";
import Profile from "@/components/Profile";
import PromptCard from "@/components/PromptCard";
import { connectToDb } from "@/utils/database";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { redirect } from "next/navigation";

const ProfilePage = (params: { params: { id: string } }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  console.log(posts);

  useEffect(() => {
    const fetchPosts = async () => {
      if (!session?.user) {
        return;
      }
      const res = await fetch(`/api/user/${session?.user.id}`);
      const data = await res.json();
      setPosts(data);
    };

    if (session?.user.id) fetchPosts();
  }, []);

  const handelDelete = async (postId: string) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this prompt?"
    );

    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${postId}`, {
          method: "DELETE",
        });
      } catch (error) {
        console.log(error);
      }
    }

    const filteredPost = posts.filter((p: any) => p._id !== postId);
    setPosts(filteredPost);
    router.push("/profile");
  };
  return (
    <div>
      <Profile
        img={session?.user?.image!}
        name={session?.user?.name!}
        email={session?.user?.email!}
        posts={posts}
        handelDelete={handelDelete}
      />
    </div>
  );
};

export default ProfilePage;
