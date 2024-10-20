"use client";

import PromptCreateForm from "@/components/PromptCreateForm";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

const CreatePrompt = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const createPrompt = async (formData) => {
    const prompt = formData.get("prompt");
    const tag = formData.get("tag");
    try {
      const res = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          userId: session.user.id,
          prompt,
          tag,
        }),
      });
      if (res.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-4">
      <PromptCreateForm type="Create" createPrompt={createPrompt} />
    </div>
  );
};

export default CreatePrompt;
