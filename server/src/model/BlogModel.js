import mongoose from "mongoose";

const BlogSchema = mongoose.Schema({
    blogTitle: {type:String},
    blogDes: {type:String},
    blogContent: {type:String},
    img:{type:String},
}, {timestamps: true, versionKey: false})

const BlogModel = mongoose.model("Blogs", BlogSchema)
export default BlogModel