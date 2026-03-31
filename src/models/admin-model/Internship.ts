import { model, models, Schema } from "mongoose";

const internshipSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    image_publicId: { type: String, required: true }
}, { timestamps: true });

export default models.Internship || model("Internship", internshipSchema);