import mongoose from "mongoose";

const Schema=mongoose.Schema;

var settingSchema = new Schema({
    'secret': { type: String, default: "" },
    'project_name': { type: String, default: "" },
    'copyright_project_name': { type: String, default: "" },
    'pagination_limit': { type: Number, default: "" },
    'app_info_email': { type: String, default: "" },
    'admin_email': { type: String, default: "" },
    'smtp': { type: Schema.Types.Mixed },
    'push_notification': { type: Schema.Types.Mixed },
    'dateformat': { type: String, default: "" },
    'timeformat': { type: String, default: "" },
    'otp_expire_time': { type: Number, default: 1 }, // in hours
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

const settings=mongoose.model('settings',settingSchema);

export default settings;