import mongoose from "mongoose";

export const BookingSchema = new mongoose.Schema({
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
        // type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
        // type: String,
    },
    isAccepted: {
        type: Number,
        default: 0,
        enum: {
            values: [0, 1],
            message: '{VALUE} is not supported'
        },
    },

},
    { timestamps: true }
);

export default mongoose.model.Booking || mongoose.model('Booking', BookingSchema);