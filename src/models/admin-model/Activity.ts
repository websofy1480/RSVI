import { model, models, Schema } from "mongoose";

const activitySchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    image_publicId: { type: String, required: true }
}, { timestamps: true });

export default models.Activity || model("Activity", activitySchema)