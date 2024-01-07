import connectDB from "@/libs/db";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await connectDB();
  await Topic.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Topic was updated." }, { status: 200 });
}

export async function DELETE(request, content) {
  let id = content.params.id;
  await connectDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic was deleted." }, { status: 200 });
}

export async function GET(request,{params}){
  const {id}=params;
  await connectDB()
  const topic = await Topic.findById(id)
  return NextResponse.json({topic},{status:200})
}
