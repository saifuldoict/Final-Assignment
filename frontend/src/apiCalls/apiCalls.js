import axios from "axios";
import {DeleteAlert, ErrorMessage, SuccessMessage} from "../../helper/helper.js";
import error from "eslint-plugin-react/lib/util/error.js";

const baseURL = "http://localhost:5175/api"

class ApiCalls {

    // User API Calls
    async registerUser(reqBody) {
        let result = await axios.post(`${baseURL}/registerUser`, reqBody, { withCredentials: true })

        if (result.data.status === "Success"){
            SuccessMessage(result.data.message)
            return true
        }
        else{
            ErrorMessage(result.data.message)
            return false
        }
    }

    async universalApi(apiEndPoint, reqBody){
        let result = await axios.post(`${baseURL}/${apiEndPoint}`, reqBody)
        if (result.data.status === "Success"){
            SuccessMessage(result.data.message)
            return true
        }else {
            ErrorMessage(result.data.message)
            return false;
        }


    }

    async loginUser(reqBody) {
        let result = await axios.post(`${baseURL}/login`, reqBody, {withCredentials: true })

        if (result.data.status === "Success"){
            SuccessMessage(result.data.message)
            return true
        }else{
            ErrorMessage(result.data.message)
            return false;
        }
    }

    async logOutUser() {
        let result = await axios.get(`${baseURL}/logout`, {withCredentials: true})
        if (result.data.status === "Success"){
            SuccessMessage(result.data.message)
            return true
        }else{
            ErrorMessage(result.data.message)
            return false;
        }
    }


    // Blog API Calls
    async createBlog(reqBody) {
        let result = await axios.post(`${baseURL}/createBlog`, reqBody)

        if (result.data.status === "Success"){
            SuccessMessage(result.data.message)
            return true
        }
        else{
            ErrorMessage(result.data.message)
            return false
        }
    }

    async uploadFiles(reqBody) {
        const result = await axios.post(
                    `${baseURL}/file-upload`,
                    reqBody,
                    { headers: { "Content-Type": "multipart/form-data" } }
                );


        if (result){
            SuccessMessage(result.data.message)
            return result
        }
        else{
            ErrorMessage(result.data.message)
            return false
        }
    }

    async  getAllBlog() {
        let result = await axios.get(`${baseURL}/getBlogs`)

        if (result.data.status === "Success"){
            return result?.data?.data
        }
        else{
            ErrorMessage(result.data.message)
            return false
        }
    }
    async updateBlog(id, reqBody) {
        try {
            let result = await axios.post(`${baseURL}/updateBlogs/${id}`, reqBody);

            if (result.data.status === "Success") {
                SuccessMessage(result.data.message);
                return result.data; // Return the response so the calling function can use it
            } else {
                ErrorMessage(result.data.message);
                return false;
            }
        } catch (error) {
            ErrorMessage("Something went wrong while updating the blog.");
            console.error("Update Blog API Error:", error);
            return false;
        }
    }




    async  deleteBlog (id) {
        let IsConfirm = await DeleteAlert()
        if (IsConfirm){
        let result = await axios.delete(`${baseURL}/deleteBlog/`+ id)
            console.log(result)
            if (result.data.status === "Success"){
                return result
            }
            else{
                ErrorMessage(result.data.message)
                return false
            }

        }


    }

    // Service Api Calls

    async  createService (reqBody) {
        let result = await axios.post(`${baseURL}/createService`, reqBody)

        if (result.data.status === "Success"){
            SuccessMessage(result.data.message)
            return true
        }
        else{
            ErrorMessage(result.data.message)
            return false
        }


    }

    async  getAllServices() {
        let result = await axios.get(`${baseURL}/showServices`)

        if (result.data.status === "Success"){
            return result?.data?.data
        }
        else{
            ErrorMessage(result.data.message)
            return false
        }
    }

    async updateService(id, reqBody) {
        try {
            let result = await axios.post(`${baseURL}/updateServices/${id}`, reqBody);

            if (result.data.status === "Success") {
                SuccessMessage(result.data.message);
                return result.data; // Return the response so the calling function can use it
            } else {
                ErrorMessage(result.data.message);
                return false;
            }
        } catch (error) {
            ErrorMessage("Something went wrong while updating the blog.");
            console.error("Update Blog API Error:", error);
            return false;
        }
    }

    async  deleteService (id) {
        let IsConfirm = await DeleteAlert()
        if (IsConfirm){
            let result = await axios.delete(`${baseURL}/deleteService/`+ id)
            console.log(result)
            if (result.data.status === "Success"){
                return result
            }
            else{
                ErrorMessage(result.data.message)
                return false
            }

        }


    }

    // Team API calls

    async  createTeam (reqBody) {
        let result = await axios.post(`${baseURL}/createTeam`, reqBody)

        if (result.data.status === "Success"){
            SuccessMessage(result.data.message)
            return true
        }
        else{
            ErrorMessage(result.data.message)
            return false
        }


    }

    async  getAllMembers() {
        let result = await axios.get(`${baseURL}/showTeam`)

        if (result.data.status === "Success"){
            return result?.data?.data
        }
        else{
            ErrorMessage(result.data.message)
            return false
        }
    }

    async updateMember(id, reqBody) {
        try {
            let result = await axios.post(`${baseURL}/updateTeam/${id}`, reqBody);

            if (result.data.status === "Success") {
                SuccessMessage(result.data.message);
                return result.data; // Return the response so the calling function can use it
            } else {
                ErrorMessage(result.data.message);
                return false;
            }
        } catch (error) {
            ErrorMessage("Something went wrong while updating the blog.");
            console.error("Update Blog API Error:", error);
            return false;
        }
    }

    async  deleteMember (id) {
        let IsConfirm = await DeleteAlert()
        if (IsConfirm){
            let result = await axios.delete(`${baseURL}/deleteTeam/`+ id)
            console.log(result)
            if (result.data.status === "Success"){
                return result
            }
            else{
                ErrorMessage(result.data.message)
                return false
            }

        }


    }


    // FeedBack api calls
    async  createFeedback (reqBody) {
        try {
            let result = await axios.post(`${baseURL}/createFeedback`, reqBody);
            return result;
        } catch (error) {
            console.error("API Call Error:", error);
            throw error;
        }

    }
    async  getAllFeedbacks() {
        try {
            let result = await axios.get(`${baseURL}/showFeedback`);
            return result.data.message
        } catch (error) {
            ErrorMessage("Failed to fetch feedbacks");
            return [];
        }
    }

    async  deleteFeedback (id) {
        let IsConfirm = await DeleteAlert()
        if (IsConfirm){
            let result = await axios.delete(`${baseURL}/deleteFeedback/`+ id)
            console.log(result)
            if (result.data.status === "Success"){
                return result
            }
            else{
                ErrorMessage(result.data.message)
                return false
            }

        }


    }






}

export const {registerUser, universalApi, loginUser, logOutUser, createBlog, uploadFiles, getAllBlog, updateBlog , deleteBlog, createService, getAllServices, updateService, deleteService, createTeam, getAllMembers, updateMember, deleteMember, createFeedback, getAllFeedbacks, deleteFeedback} = new ApiCalls( )