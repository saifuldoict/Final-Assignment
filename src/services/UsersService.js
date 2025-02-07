
import UserModel from "../model/UserModel.js";
import {Cookie_ExpiresIn} from '../config/config.js'
import {EncodeToken} from "../utility/TokenUtility.js"

export const UserRegistrationService= async (req) => {
    try{
        let reqBody = req.body;
        let existingUser = await UserModel.find({email: reqBody.email});
        if (existingUser.length > 0) {
            return {status: "Failed", message: "User already exists"};
        }
        let result = await UserModel.create(reqBody);
        return {status: "Success", data: result , message: "User Successfully Registered"};

    }catch(err){
        return {status: "Error", error: err, message: "User creation failed"};
    }
}

export const UserLogInService= async (req, res) => {

    try{
        let {email, password} = req.body;
        let existingUser = await UserModel.findOne({email, password});
        if (!existingUser) {
            return {status: "Failed", message: "No User Found"};
        }
        let data = await UserModel.aggregate([
            {$match: {email: email,password: password}},
            {$project: {_id: 1 , email: 1}}
        ])
        if (data.length === 1) {
            let token = EncodeToken(data[0]["email"]);


            let options = {
                maxAge: Cookie_ExpiresIn,
                httpOnly: false, // if we set false here it will allow all browser to get the cookie
                sameSite: "none",
                secure: true,
                path: "/"
            }

            res.cookie("token", token ,  options);

            return {status: "Success", token: token, data: data[0],  message: "User Successfully Logged In"};
        }else{
            return {status: "Error", error: data[0]};
        }

    }catch(err){
        return {status: "Error", error: err, message: "User Log In Failed"};
    }
}

export const UserLogOutService= async (req, res) => {
    try{
        res.clearCookie("token");
        return {status: "Success", message: "User Successfully Logged Out"};

    }catch(err){
        return {status: "Error", error: err};
    }
}