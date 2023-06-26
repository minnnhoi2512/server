import mongoose,{ObjectId} from "mongoose";

export const BlogSchema = new mongoose.Schema({
    id: { type: ObjectId },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title : {type : String},
    content : {type : String},
    _image : {type : String}
});

export default mongoose.model.Blog || mongoose.model('Blog', BlogSchema);