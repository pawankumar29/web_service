import mongoose from 'mongoose';
const Schema =mongoose.Schema;



var quizSchema = new Schema({
    organisation_id: { type: Schema.Types.ObjectId, ref: 'organisations' },
    institute_id: { type: Schema.Types.ObjectId, ref: 'institutes' },
    user_id: { type: Schema.Types.ObjectId, ref: 'users' },
    batch_year: { type: Number, default: 0 },
    end_time: { type: Date },
    start_time: { type: Date },
    duration: { type: Number, default: 100 }, // in minutes
    status: { type: Number, default: 1 }, // 1 for test enable by admin,2 - test started, 3 - test end 
    is_deleted: { type: Number, default: 0 }, //1-deleted by admin
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });


const quizzez=mongoose.model("quizzez", quizSchema);
export default quizzez;