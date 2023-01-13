import mongoose from 'mongoose';
const Schema =mongoose.Schema;


var permissionSchema = new Schema({
    name: { type: String, default: "" },
    display_name: { type: String, default: "" },
    description: { type: String, default: "" },
    status: { type: Number, default: 1 }, // 0-inactive,1-active     
    is_deleted: { type: Number, default: 0 }, //1-deleted by admin
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });


const permissions=mongoose.model('permissions', permissionSchema);
export default permissionSchema;