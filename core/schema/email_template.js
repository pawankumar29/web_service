import mongoose from 'mongoose';
const Schema =mongoose.Schema;

var email_template = new Schema({
    type: { type: Number, required: true },
    name: { type: String, required: [true, "name is required"] },
    organisation_id: { type: Schema.Types.ObjectId, ref: "organisations" },
    attribute: { type: [String], default: "" },
    subject: { type: String, required: [true, "subject is required"] },
    content: { type: String, required: [true, "content is required"] },
    status: { type: Number, enum: [0, 1], default: 1 }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

const email_template=mongoose.model('email_template', email_template);
export default email_template;