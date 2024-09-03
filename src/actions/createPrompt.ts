"use server";

export const createPrompt = async (formData: FormData) => {
  const prompt = formData.get("prompt") as String;
  const tag = formData.get("tag") as String;
  console.log(prompt, tag);
};
