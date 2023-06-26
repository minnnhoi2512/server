import mongoose, { ObjectId } from "mongoose";

export const CourseSchema = new mongoose.Schema({
    id: { type: ObjectId },
    courseName: {
        type: String,
        required: false,
    },
    price: {
        type: Number,
        required: false,
    },
    startTime: {
        type: String,
        required: false,
    },
    endTime: {
        type: String,
        required: false
    },

},{
    timestamps: true
});

export default mongoose.model.Course || mongoose.model('Course', CourseSchema);