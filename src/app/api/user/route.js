import User from "@/models/users";
import { connectToDb } from "@/utils/database";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, email, image } = await request.json();
  try {
    await connectToDb();
    await User.create({ name, email, image });
    return NextResponse.json({ message: "User Registered" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to push a user", { status: 500 });
  }
}
