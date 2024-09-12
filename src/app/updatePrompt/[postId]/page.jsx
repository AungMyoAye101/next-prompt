"use client";

import PromptCreateForm from "@/components/PromptCreateForm";
import { useSession } from "next-auth/react";
import { revalidatePath } from "next/cache";
import { redirect, useRouter } from "next/navigation";

const UpdatePrompt = ({ params }) => {
  const router = useRouter();
  const updatePrompt = async (formData) => {
    const prompt = formData.get("prompt");
    const tag = formData.get("tag");

    try {
      const res = await fetch(`/api/prompt/${params.postId}`, {
        method: "PATCH",
        body: JSON.stringify({
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
    redirect("/");
    revalidatePath("/");
  };

  return (
    <div className="p-4">
      <PromptCreateForm type="Edit" createPrompt={updatePrompt} />
    </div>
  );
};

export default UpdatePrompt;
