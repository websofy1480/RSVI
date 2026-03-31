import { model, models, Schema } from "mongoose";

const initiativeSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    initiativesType: { type: String, required: true },
    category: String,
    image: { type: String, required: true },
    image_publicId: { type: String, required: true }
}, { timestamps: true });

export default models.Initiative || model("Initiative", initiativeSchema)

