import mongoose from 'mongoose';
const Schema =mongoose.Schema;


var quizResultScehma = new Schema({
    organisation_id: { type: Schema.Types.ObjectId, ref: "organisations" },
    "quiz_id": { type: Schema.Types.ObjectId, ref: 'quiz' },
    "institute_id": { type: Schema.Types.ObjectId, ref: 'institutes' },
    "walkings_id":{ type: Schema.Types.ObjectId, ref:'walkings'},
    "user_id": { type: Schema.Types.ObjectId, ref: 'users' },
    "answers": [{
        question_id: { type: Schema.Types.ObjectId, ref: 'questions' },
        category_id: { type: Schema.Types.ObjectId, ref: 'question_categories' },
        sub_category_id: { type: Schema.Types.ObjectId, ref: 'question_categories' },
        answer: { type: [String], default: [] },
        is_correct: { type: Number, default: 0 },
    }],
    "category_marks": [{
        category_id: { type: Schema.Types.ObjectId, ref: 'question_categories' },
        marks: { type: Number, default: 0 }
    }],
    "sub_category_marks": [{
        sub_category_id: { type: Schema.Types.ObjectId, ref: 'question_categories' },
        marks: { type: Number, default: 0 }
    }],
    'interviews': [{
        name: { type: String, default: "" },
        comment: { type: String, default: "" },
        marks: { type: Number, default: 0 }
    }],
    "offer_letter_issued": { type: Number, default: 0 },
    "placed_status": { type: Number, default: 0 }, // 1 for true
    "interview_status": { type: Number, default: 0 },
    "student_shortlist":{type:Number,default:0},//1 for shortlist
    "total_attempted": { type: Number, default: 0 },
    "total_marks": { type: Number, default: 0 },
    "status": { type: Number, default: 1 }, // 1 - for test started, 2 for test end    
    "is_deleted": { type: Number, default: 0 }, //1-deleted by admin
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

const quiz_result =mongoose.model('quiz_result', quizResultScehma);
export default quiz_result;