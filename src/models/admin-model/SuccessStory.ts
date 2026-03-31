import { model, models, Schema } from "mongoose";


const successStorySchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    image_publicId: { type: String, required: true }
}, { timestamps: true });

export default models.SuccessStory || model("SuccessStory", successStorySchema);