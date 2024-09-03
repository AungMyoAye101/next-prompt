"use client";

import PromptCreateForm from "@/components/PromptCreateForm";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const CreatePrompt = () => {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <div className="p-4">
      <PromptCreateForm />
    </div>
  );
};

export default CreatePrompt;
