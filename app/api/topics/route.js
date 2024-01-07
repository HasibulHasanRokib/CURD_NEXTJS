import connectDB from "@/libs/db";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description } = await request.json();
  await connectDB();
  await Topic.create({ title, description });
  return NextResponse.json(
    { message: "Topic created successful" },
    { status: 201 }
  );
}


export async function GET(){
  const topics= await Topic.find()
  await connectDB();
  return NextResponse.json({message:"Topics are:",topics},{status:200})
}
