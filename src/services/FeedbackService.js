import FeedBackModel from "../model/FeedbackModel.js";

export const createFeedbackService= async(req)=>{
    try{
        if(!req.body|| !req.body.name|| !req.body.email || !req.body.message){
            throw new Error ("Missing required fields");
        }
        const reqBody = req.body;
        const feedback = new FeedBackModel.create(reqBody);

        return {status: "Success", message: "Thanks for your valuable feedback!"};
    }
    catch (err) {
        console.error("Database Error:", err);
        return { status: "Failed", message: err.message };
    }

}

export const showFeedbackService = async (req)=>{
    try{
        let result = await FeedBackModel.find()
        return {status: "Success", message: result}
    }
    catch(err){
        return {status: "Failed", message: err.message};
    }
}

export const deleteFeedbackService =async (req) => {
    try{
        let id = req.params.id;
        let result = await FeedBackModel.deleteOne({ _id: id });

        return {status: "Success", message: result};
    }catch(err){
        return {status: "Failed", message: err.message};
    }
}