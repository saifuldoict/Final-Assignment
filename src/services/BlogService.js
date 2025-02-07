import BlogModel from "../model/BlogModel.js"

export const CreateBlogService= async (req)=>{
    try {
        let reqBody = req.body;
        let result = await BlogModel.create(reqBody);
        return{status: "Success", data:result, message: "Blog Created Successfully"}
    }
     catch(err){
        return {status: "Error", error: err, message: "Blog Creation failed"};
    }
}

export const GetBlogService = async (req) => {
    try{
        let result = await BlogModel.find();
        return {status: "Success", data: result};
    }
    catch(err){
        return {status: "Error", error: err, message: "No Blogs"};
    }

}

export const UpdateBlogService= async (req)=>{
    try{
        let id = req.params.id;
        let reqBody = req.body;
        let result = await BlogModel.updateOne({_id:id},reqBody);
        return {status: "Success", data:result, message: "Blog Updated Successfully"};
    }
    catch(err){
        return {status: "Error", error: err, message: "Blog Update failed"};
    }
}

export const deleteBlogService= async (req) => {
    try{
        let id =  req.params.id;
         let result =  await BlogModel.deleteOne({_id: id});
        return {status: "Success", data: result };

    }catch(err){
        return {status: "Error", error: err, message: "No Blogs"};
    }
}