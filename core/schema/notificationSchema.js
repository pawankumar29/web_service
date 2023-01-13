import mongoose from 'mongoose';
const Schema =mongoose.Schema;


var notificationSchema = new Schema({
    reference_id: { type: String, default: "" },
    from: { type: Schema.Types.ObjectId, ref: 'user' },
    to: { type: Schema.Types.ObjectId, ref: 'user' },
    type: { type: Number, default: 0 }, // 1-checkin list
    message: { type: String },
    is_deleted: { type: Number, default: 0 }, //1-deleted
    data: { type: Schema.Types.Mixed },
    status: { type: Number, default: 1 }, //1 for unread,2 for read
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });


const notifications =mongoose.model('notifications', notificationSchema);

export default notifications;