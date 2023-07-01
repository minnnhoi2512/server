import mongoose, { ObjectId } from "mongoose";

export const GradeSchema = new mongoose.Schema({
    id: { type: ObjectId },
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    nOfStudent: {
        type : Number,
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    },

    gradeName: {
        type: String,
        required: false,
    },
    description : {
        type : String,
        required : false,
    },
    startTimeGrade: {
        type: String,
        required: false,
    },
    endTimeGrade: {
        type: String,
        required: false
    },

},
    { timestamps: true });

export default mongoose.model.Grade || mongoose.model('Grade', GradeSchema);