"use client";

import PromptCreateForm from "@/components/PromptCreateForm";
import { useSession } from "next-auth/react";
import { revalidatePath } from "next/cache";
import { redirect, useRouter } from "next/navigation";

const UpdatePrompt = ({ params }) => {
  const updatePrompt = async (formData) => {
    const router = useRouter();
    const prompt = formData.get("prompt");
    const tag = formData.get("tag");

    console.log(params.postId);

    // try {
    //   const res = await fetch(`/api/prompt/${params.id}`, {
    //     method: "PATCH",
    //     body: JSON.stringify({
    //       prompt,
    //       tag,
    //     }),
    //   });
    //   if (res.ok) {
    //     router.push("/");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div className="p-4">
      <PromptCreateForm createPrompt={updatePrompt} />
    </div>
  );
};

export default UpdatePrompt;
