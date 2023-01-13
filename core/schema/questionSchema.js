import mongoose from 'mongoose';
const Schema =mongoose.Schema;


var questionSchema = new Schema({
    organisation_id: { type: Schema.Types.ObjectId, ref: "organisations" },
    "question": { type: String, default: "" },
    "category_id": { type: Schema.Types.ObjectId, ref: 'question_categories' },
    "sub_category_id": { type: Schema.Types.ObjectId, ref: 'question_categories' },
    "image": { type: String, default: "" },
    "options": [{
        "id": { type: String },
        "is_correct": { type: Number, default: 0 },
        "option": { type: [String], default: "" }
    }, ],
    "answer": { type: [String], default: [] },
    "status": { type: Number, default: 1 }, // 0-inactive,1-active     
    "is_deleted": { type: Number, default: 0 }, //1-deleted by admin
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

const questions=mongoose.model('questions', questionSchema);
export default questions;