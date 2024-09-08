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

interface User {
  id: string;
  image: string;
  username: string;
  email: string;
}

const ProfilePage = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState<User>({
    id: "",
    image: "",
    username: "",
    email: "",
  });

  useEffect(() => {
    const fetchPosts = async () => {
      if (!session?.user) {
        return;
      }
      const res = await fetch(`/api/user/${params.id}`);
      const resUser = await fetch(`/api/user/${params.id}/profile`);
      const data = await res.json();
      const user = await resUser.json();
      setUser(user);
      setPosts(data);
    };

    if (params.id) fetchPosts();
  }, [params.id]);

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
    router.push(`/profile/${session?.user.id}`);
  };
  return (
    <div>
      <Profile
        id={params.id}
        img={user.image}
        name={user.username}
        email={user.email}
        posts={posts}
        handelDelete={handelDelete}
      />
    </div>
  );
};

export default ProfilePage;
