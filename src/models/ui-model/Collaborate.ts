import { model, models, Schema } from "mongoose";

const collaborateSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    collaborationsType: { type: String, required: true },
    message: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
    image: { type: String, required: true },
    image_publicId: { type: String, required: true },
},
    { timestamps: true }
)

export default models.Collaborate || model("Collaborate", collaborateSchema)