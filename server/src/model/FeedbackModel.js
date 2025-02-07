import mongoose from "mongoose";

    const FeedBackSchema = mongoose.Schema({
        name: {type:String},
        email: {type:String},
        message : {type:String},
    }, {timestamps: true, versionKey: false})

    const FeedBackModel = mongoose.model("feedback", FeedBackSchema)
    export default FeedBackModel