"use server";

import { useSession } from "next-auth/react";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// export const createPrompt = async (formData: FormData) => {

//   const prompt = formData.get("prompt") as String;
//   const tag = formData.get("tag") as String;

//   redirect("/");
//   revalidatePath("/create");
// };
