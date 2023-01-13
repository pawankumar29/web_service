
import mongoose from 'mongoose';
const Schema =mongoose.Schema;

var instituteWiseCategoriesSchema = new Schema({
    organisation_id: { type: Schema.Types.ObjectId, ref: "organisations" },
    institute_id: { type: Schema.Types.ObjectId, ref: 'institutes' },
    category_id: { type: Schema.Types.ObjectId, ref: 'question_categories' },
    sub_category: [{
        sub_category_id: { type: Schema.Types.ObjectId, ref: 'question_categories' },
        number_of_question: { type: Number, default: 0 }
    }],
    number_of_question: { type: Number, default: 0 },
    user_id: { type: Schema.Types.ObjectId, ref: "users" },
    status: { type: Number, default: 1 }, // 0-inactive,1-active     
    is_deleted: { type: Number, default: 0 }, //1-deleted by admin
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });


const institute_categories =mongoose.model('institute_categories', instituteWiseCategoriesSchema);
export default institute_categories;