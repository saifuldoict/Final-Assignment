import TeamModel from "../model/TeamMemberModel.js";
export const createTeamServices = async (req) => {
    try{
        let reqBody = req.body;
        let result = await TeamModel.create(reqBody);
        return {status: "Success", data: result , message: "Team Member Created Successfully"};
    }catch(err){
        return {status: "failed", error: err, message: "Team Member Creation Failed"};
    }
}

export const getTeamServices = async (req) => {
    try{
        let result = await TeamModel.find()
        return {status: "Success", data: result , message: "Team Member showed Successfully"};
    }catch(err){
        return {status: "failed", error: err, message: "Team Member shown Failed"};
    }
}

export const updateTeamServices = async (req) => {
    try{
        let id = req.params.id
        let reqBody = req.body;
        let result = await TeamModel.updateOne({_id: id}, reqBody)
        return {status: "Success", data: result , message: "Team Member updated Successfully"};
    }catch(err){
        return {status: "failed", error: err, message: "Team Member update Failed"};
    }
}

export const deleteTeamServices = async (req) => {
    try{
        let id = req.params.id;
        await TeamModel.deleteOne({_id: id})
        return {status: "Success",  message: "Team Member deleted Successfully"};
    }catch(err){
        return {status: "failed", error: err, message: "Team Member delete Failed"};
    }
}