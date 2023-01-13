import mongoose from 'mongoose';
const Schema =mongoose.Schema;
var contactUsSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'users' },
    organisation_id: { type: Schema.Types.ObjectId, ref: 'organisations' },
    subject: { type: String, default: '' },
    message: { type: String, default: "" },
    status: { type: Number, default: 0 }, //0-unresolved, 1-resolved
    is_deleted: { type: Number, default: 0 },
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

const contact_us=mongoose.model("contact_us", contactUsSchema);
export default contact_us;