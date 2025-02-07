import ServiceModel from "../model/ServiceModel.js"
export const createServices = async (req) => {
    try{
        let reqBody = req.body
        let result = await ServiceModel.create(reqBody)
        return {status: "Success", data: result , message: "Service Created Successfully"};
    }catch(err){
        return {status: "failed", error: err, message: "Service Creation Failed"};
    }
}

export const getServices = async (req) => {
    try{
        let result = await ServiceModel.find()
        return {status: "Success", data: result , message: "Service showed Successfully"};
    }catch(err){
        return {status: "failed", error: err, message: "Service shown Failed"};
    }
}

export const updateServices = async (req) => {
    try{
        let id = req.params.id;
        let reqBody = req.body
        let result = await ServiceModel.updateOne({_id: id}, reqBody)
        return {status: "Success", data: result , message: "Service updated Successfully"};
    }catch(err){
        return {status: "failed", error: err, message: "Service update Failed"};
    }
}

export const deleteServices = async (req) => {
    try{
        let id = req.params.id;
        await ServiceModel.deleteOne({_id: id})
        return {status: "Success",  message: "Service deleted Successfully"};
    }catch(err){
        return {status: "failed", error: err, message: "Service delete Failed"};
    }
}