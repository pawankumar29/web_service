
import mongoose from 'mongoose';
const Schema =mongoose.Schema;


var questionCategoriesSchema = new Schema({
    organisation_id: { type: Schema.Types.ObjectId, ref: "organisations" },
    name: { type: String, default: "" },
    sub_category: [{
        _id: { type: Schema.Types.ObjectId, default: new mongoose.Types.ObjectId },
        name: { type: String, default: "" }
    }],
    status: { type: Number, default: 1 }, // 0-inactive,1-active     
    is_deleted: { type: Number, default: 0 }, //1-deleted by admin
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

const question_categories =mongoose.model('question_categories', questionCategoriesSchema);
export default question_categories;