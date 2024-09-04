import Prompt from "@/models/prompt";

import { connectToDb } from "@/utils/database";

export const GET = async (req) => {
  try {
    await connectToDb();
    const prompts = await await Prompt.find({}).populate("author");

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch prompt data", { status: 500 });
  }
};
