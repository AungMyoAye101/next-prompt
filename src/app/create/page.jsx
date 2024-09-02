"use client";

import PromptCreateForm from "@/components/PromptCreateForm";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CreatePrompt = () => {
  const router = useRouter();
  const { data: session } = useSession();
  console.log(session?.user?.id);
  return (
    <div>
      <PromptCreateForm />
    </div>
  );
};

export default CreatePrompt;
