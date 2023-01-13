import mongoose from 'mongoose';
const Schema =mongoose.Schema;

var instituteSchema = new Schema({
    organisation_id: { type: Schema.Types.ObjectId, ref: "organisations" },
    name: { type: String, default: "" },
    po_name: { type: String, default: "" },
    po_phone_no: { type: String, default: "" },
    no_of_students: { type: Number, default: 0 },
    qualification: { type: [String], default: [] },
    instruction: { type: [String], default: [] },
    status: { type: Number, default: 1 }, // 0-inactive,1-active     
    is_deleted: { type: Number, default: 0 }, //1-deleted by admin
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

const  institutes =mongoose.model('institutes', instituteSchema);

export default institutes;