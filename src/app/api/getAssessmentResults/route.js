import File from "@/models/File";
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongoose";
export async function POST(req) {
  try {
    const body= await req.json();
    const{_id}=body;
    console.log(_id);
    if(!_id){
        return NextResponse.json({ error: "Missing required field!" }, { status: 400 });
    }
    await connectToDatabase();
    const assessmentResult = await File.findById(_id);
    if (!assessmentResult) {
      return NextResponse.json({ error: "error fetching!" }, { status: 400 });
    } else {
      return NextResponse.json({ assessmentResult }, { status: 201 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to get assessment result" },
      { status: 500 }
    );
  }
}
