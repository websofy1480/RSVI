import { models, model, Schema } from "mongoose";

const perksSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    image_publicId: { type: String, required: true }
}, {timestamps:true});

export default models.Perks || model("Perks", perksSchema)

