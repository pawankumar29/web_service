import mongoose from 'mongoose';
const Schema =mongoose.Schema;

var organisationSchema = new Schema({
    name: { type: String, required: [true, "name is required"] },
    is_deleted: { type: Number, default: 0 }, //1-deleted
    status: { type: Number, default: 1 }, //1 for active,0 for disable
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

const organisation  =mongoose.model("organisations",organisationSchema); 
export default organisation;  