import File from "@/models/File";
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongoose";
export async function POST(req) {
  try {
     const body = await req.json();
      const { featureName, fileName, creator } = body;
      if(!featureName || !fileName|| !creator){
        return NextResponse.json(
            { error: "Missing required fields",body},{ status: 400 }
          );
      }
    // Establish MongoDB connection
    await connectToDatabase();
    // const { originalname, path: filePath, mimetype } = req.file; // Extract file details
    console.log("Uploaded file:", featureName);
    console.log("Feature Name:", fileName);

    // Create a new file document in MongoDB
    const newFile = new File({
      fileName,
      featureName,
      creator
    });

    await newFile.save(); // Save the file record

    // Send success response
    return NextResponse.json(
      { message: "File uploaded successfully" }, { status: 200 }
    );
  }  catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: "Failed to register user" }, {status: 500 }
    );
  }
}
// export const config = {
//   api: {
//     bodyParser: false, // Important to disable body parsing for multer
//   },
// };
