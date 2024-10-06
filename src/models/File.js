import mongoose, { Schema } from "mongoose";
const fileSchema = new Schema(
  {
    fileName: { type: String, required: true },
    // contentType: { type: String, required: true },
    // filePath: { type: String, required: true }, 
    featureName: { type: String, required: true },
    creator:{type: String, required: true }
  },
  {
    timestamps: true,
  }
);
const File = mongoose.models.File || mongoose.model("File", fileSchema);
export default File;
