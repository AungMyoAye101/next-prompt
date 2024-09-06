import Prompt from "@/models/prompt";

import { connectToDb } from "@/utils/database";

// read data
export const GET = async (request, { params }) => {
  try {
    await connectToDb();
    const prompt = await Prompt.findById(params.id).populate("author");
    if (!prompt) return new Response("Prompt not found ", { status: 404 });

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch prompt data", { status: 500 });
  }
};
