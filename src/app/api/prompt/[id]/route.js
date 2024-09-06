import Prompt from "@/models/prompt";

import { connectToDb } from "@/utils/database";

// GET read data
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

// PATCH (update prompt)

export const PATCH = async (request, { params }) => {
  const { prompt, tag } = await request.json();
  try {
    await connectToDb();
    const exitigPrompt = await Prompt.findById(params.id);
    if (!exitigPrompt) {
      return new Response("Prompt not found ", { status: 404 });
    }

    // if prompt exit

    exitigPrompt.prompt = prompt;
    exitigPrompt.tag = tag;

    await exitigPrompt.save();
    return new Response("Successfully update prompt", { status: 200 });
  } catch (error) {
    return new Response("Failed to update prompt ", { status: 500 });
  }
};

// DELETE (delete prompt)
export const DELETE = async (request, { params }) => {
  console.log(params.id);
  try {
    await connectToDb();

    // Find the prompt by ID and remove it
    const prompt = await Prompt.findById(params.id);

    console.log(JSON.stringify(prompt));
    await Prompt.findByIdAndRemove(params.id);

    return new Response("Prompt deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Error deleting prompt", { status: 500 });
  }
};
