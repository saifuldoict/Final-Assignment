
import express from "express";
import * as UserController from "../controllers/UserController.js";
import * as BlogController from "../controllers/BlogController.js";
import * as FeedBackController from "../controllers/FeedBackController.js";
import * as FileUploads from "../controllers/FileUploadController.js"
import * as ServicesController from "../controllers/ServicesController.js"
import * as TeamController from "../controllers/TeamController.js"
import upload from "../middlewares/FileUploads.js"

const router = express.Router();


//User API
router.post("/registerUser", UserController.userRegistration);
router.post("/login", UserController.userLogIn);
router.get("/logout", UserController.userLogOut);

// Blog Api
router.post ("/createBlog",BlogController.createBlog)
router.get("/getBlogs",BlogController.createBlog)
router.post("/updateBlogs/:id", BlogController.UpdateBlog)
router.delete("/deleteBlog/:id", BlogController.deleteBlog)

//file route API
router.post("/file-upload", upload.array("file", 20), FileUploads.fileUpload)

// Service Routes
router.post("/createService", ServicesController.createServiceController )
router.get("/showServices", ServicesController.getServiceController )
router.post("/updateServices/:id", ServicesController.UpdateServiceController)
router.delete("/deleteService/:id", ServicesController.deleteServiceController)

// Team Routes

router.post("/createTeam", TeamController.createTeamController )
router.get("/showTeam", TeamController.getTeamController )
router.post("/updateTeam/:id", TeamController.UpdateTeamController)
router.delete("/deleteTeam/:id", TeamController.deleteTeamController)


//FeedBack routes API
router.post("/createFeedBack", FeedBackController.CreateFeedbackController)
router.get ("/showFeedback", FeedBackController.ShowFeedbackController)
router.delete("/deleteFeedback/:id", FeedBackController.DeleteFeedbackController)
    
export default router