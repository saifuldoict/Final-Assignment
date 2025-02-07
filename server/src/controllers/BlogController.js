import{CreateBlogService, GetBlogService, UpdateBlogService,deleteBlogService} from "../services/BlogService.js";

export const createBlog = async (req, res) => {
    let result = await CreateBlogService(req);
    return res.json(result);
}
export const getBlog = async (req, res) => {
    let result = await GetBlogService(req);
    return res.json(result);
}
export const UpdateBlog = async (req, res) => {
    let result = await UpdateBlogService(req);
    return res.json(result);
}
export const deleteBlog = async (req, res) => {
    let result = await deleteBlogService(req);
    return res.json(result);
}