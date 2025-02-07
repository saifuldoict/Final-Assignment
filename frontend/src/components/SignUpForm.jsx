import {Link, useNavigate} from "react-router-dom";
import {useRef, useState} from "react";
import {ErrorMessage, getBase64, IsEmpty} from "../../helper/helper.js";
import {registerUser} from "../apiCalls/apiCalls.js";
import Loader from "./Loader.jsx";

const SignUpForm = () => {
    const [loading, setLoading] = useState(false);
    let navigate = useNavigate();

    let {emailRef, fNameRef, lNameRef, phoneRef,  passwordRef} = useRef()
    let [Img, setImg] = useState("")

    let getImage = async (file) => {
        let result = await getBase64(file.target.files[0]);
        setImg(result)

    }

    let submitHandler = async () => {
        let email = emailRef.value;
        let firstName = fNameRef.value;
        let lastName = lNameRef.value;
        let phone = phoneRef.value;
        let password = passwordRef.value;
        let img = Img;

        let reqBody = {
             email,
             firstName,
             lastName,
             phone,
             password,
             img,
        }

        if (IsEmpty(email)) {
            ErrorMessage("Email is Required")
        } else if (IsEmpty(firstName)) {
            ErrorMessage("First Name is Required")
        } else if (IsEmpty(lastName)) {
            ErrorMessage("Last Name is Required")
        } else if (IsEmpty(phone)) {
            ErrorMessage("Phone number is Required")
        }else if (IsEmpty(img)) {
            ErrorMessage("Image is Required")
        }
        else if (IsEmpty(password)) {
            ErrorMessage("Passwords is Required")
        } else{
            setLoading(true);
        let user = await registerUser(reqBody)
        //     let user = await universalApi("registerUser", reqBody)
        //     if (user === true){
        //         emailRef.value = ""
        //         fNameRef.value = ""
        //         lNameRef.value = ""
        //         phoneRef.value = ""
        //         passwordRef.value = ""
        //     }
            if (user){
                navigate("/login")
                setLoading(false);
            }
        }


    }



    return (
        <section>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
                {loading && <Loader/>}
                <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                        Sign In
                    </h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                ref={(input)=> (emailRef = input)}
                                type="email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                First Name
                            </label>
                            <input
                                ref={(input)=> (fNameRef = input)}
                                type="text"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                                placeholder="John"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Last Name
                            </label>
                            <input
                                ref={(input)=> (lNameRef = input)}
                                type="text"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                                placeholder="Doe"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Phone
                            </label>
                            <input
                                ref={(input)=> (phoneRef = input)}
                                type="tel"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                                placeholder="0123456789"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Photo
                            </label>
                            <input
                                onChange={getImage}
                                type="file"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                                placeholder="Your Profile"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <input
                                ref={(input)=> (passwordRef = input)}
                                type="password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                                placeholder="••••••••"
                            />
                        </div>

                        <button
                            onClick={submitHandler}
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors">
                            Sign Up
                        </button>
                    </form>
                    <div className="mt-6 text-center text-sm text-gray-600 ">
                        Want to log in?
                        <Link to={"/login"} className="text-indigo-600 hover:text-indigo-500 font-medium mx-[5px]">
                            Log In
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUpForm;