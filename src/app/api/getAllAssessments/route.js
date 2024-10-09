import File from "@/models/File";
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongoose";
export async function GET() {
  try {
    await connectToDatabase();
    const assessmentList = await File.find({});
    if (!assessmentList) {
      return NextResponse.json({ error: "error fetching!" }, { status: 400 });
    } else {
      return NextResponse.json({ assessmentList }, { status: 201 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to get all assessments" },
      { status: 500 }
    );
  }
}
