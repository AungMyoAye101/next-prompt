import User from "@/models/users";

import { connectToDb } from "@/utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDb();
    const user = await User.findOne({ _id: params.userId });
    console.log(user);
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch prompt data", { status: 500 });
  }
};
