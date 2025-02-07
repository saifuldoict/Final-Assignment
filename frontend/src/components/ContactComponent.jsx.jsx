import { useState } from "react";
import axios from "axios";
import {createFeedback} from "../apiCalls/apiCalls.js";

const ContactComponent = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    // Handle form input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccessMessage("");
        setErrorMessage("");

        try {
            let response = await createFeedback(formData);

            if (response?.data?.status === "Success") {
                setSuccessMessage(response.data.message);
                setFormData({ name: "", email: "", message: "" });
            } else {
                setErrorMessage("Failed to send feedback!");
            }
        } catch (error) {
            setErrorMessage("Failed to send feedback. Please try again later.");
        }

        setLoading(false);
    };


    return (
        <div>
            <section className="text-gray-600 body-font relative">
                <div className="container-fluid px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                       
                       
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col p-4 md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
                        <p className="leading-relaxed mb-5 text-gray-600">Send Your Valuable Feedback to Us</p>

                        {successMessage && <p className="text-green-500">{successMessage}</p>}
                        {errorMessage && <p className="text-red-500">{errorMessage}</p>}

                        <form onSubmit={handleSubmit}>
                            <div className="relative mb-4">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-white rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3"
                                    required
                                />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-white rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3"
                                    required
                                />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-white rounded border border-gray-300 h-32 text-base outline-none text-gray-700 py-1 px-3"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
                                disabled={loading}
                            >
                                {loading ? "Sending..." : "Send Feedback"}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactComponent;
