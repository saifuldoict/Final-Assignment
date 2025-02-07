import mongoose from "mongoose";

const TeamMemberSchema = mongoose.Schema({
    name: {type:String},
    skills: {type:String},
    experience: {type:String},
    img:{type:String},
}, {timestamps: true, versionKey: false})

const TeamModel = mongoose.model("Team", TeamMemberSchema)
export default TeamModel