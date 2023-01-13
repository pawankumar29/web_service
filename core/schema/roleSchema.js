
import mongoose from 'mongoose';
const Schema =mongoose.Schema;


var roleSchema = new Schema({
    name: { type: String, default: "" },
    permissions: { type: [Schema.Types.ObjectId] },
    status: { type: Number, default: 1 }, // 0-inactive,1-active     
    is_deleted: { type: Number, default: 0 }, //1-deleted by admin
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

const roles=mongoose.model('roles', roleSchema);
export default roles;