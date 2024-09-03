"use client";

import PromptCreateForm from "@/components/PromptCreateForm";
import { useSession } from "next-auth/react";
import { revalidatePath } from "next/cache";
import { redirect, useRouter } from "next/navigation";

const CreatePrompt = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const createPrompt = async (formData) => {
    const prompt = formData.get("prompt");
    const tag = formData.get("tag");
    console.log(prompt, tag, session.user.id);
    redirect("/");
    revalidatePath("/create");
  };

  return (
    <div className="p-4">
      <PromptCreateForm createPrompt={createPrompt} />
    </div>
  );
};

export default CreatePrompt;
