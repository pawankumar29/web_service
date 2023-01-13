
import mongoose from "mongoose";
const Schema=mongoose.Schema;

var userSchema = new Schema({
    name: { type: String, default: "" },
    roll_no: { type: String, default: "" },
    father_name: { type: String, default: "" },
    qualification: { type: String, default: "" },
    branch: { type: String, default: "" },
    resume:{
        name:{type:String},
        originalname:{type:String},
        encoding:{type:String},
        mimetype:{type:String},
        size:{type:Number},
        
md5:{type:String}
        },
    notes:{type:String,default:""},
    link:{type:String,default:""},
    batch: { type: Number, default: 0 },
    is_walkin_user: { type: Number, default: 0 },
    job_profile: { type: String, default: "" },
    experience: { type: Number, default: 0 },
    email: { type: String, match: /^([^@]+?)@(([a-z0-9]-*)*[a-z0-9]+\.)+([a-z0-9]+)$/i },
    status: { type: Number, default: 0 }, // 0-inactive,1-active
    password: { type: String },
    phone_no: { type: String, default: "" },
    dob: { type: Date },
    //    test_status: {type: Number, default: 0}, //user not allowed to login when test begin
    otp_code: { type: String, default: "" },
    otp_expiry: Date, // otp expiry is 30 min
    institute_id: { type: Schema.Types.ObjectId, ref: 'institutes' },
    institute_name: { type: String, default: "" },
    //    type: {type: Number, default: 2, enum: [1, 2]}, // 1-admin,2-appuser
    role: { type: Schema.Types.ObjectId, ref: "roles" },
    permissions: { type: [Schema.Types.ObjectId] },
    //    push_notification: {type: Number, default: 1},
    device_token: { type: String, default: "" },
    organisation_id: { type: Schema.Types.ObjectId, ref: "organisations" },
    is_email_verified: { type: Number, default: 0 },
    is_deleted: { type: Number, default: 0 }, //1-deleted by user
    last_login: { type: Number },
    device_type: { type: Number }, //1- android , 2-IOS,
    device_id: { type: String, default: "" },
    app_version: { type: String }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

const users=mongoose.model('users', userSchema);
export default users;