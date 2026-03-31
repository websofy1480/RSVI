import { model, models, Schema } from "mongoose";

const joinUsSchema = new Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    department: { type: String, required: true },
    message: { type: String, required: true }
}, { timestamps: true })


export default models.JoinUs || model("JoinUs", joinUsSchema);