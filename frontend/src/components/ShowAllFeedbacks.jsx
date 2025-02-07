import { useEffect, useState } from "react";
import { deleteFeedback, getAllFeedbacks } from "../apiCalls/apiCalls.js";
import { ErrorMessage, SuccessMessage } from "../../helper/helper.js";

const ShowAllFeedbacks = () => {
    const [showAllFeedbacks, setShowAllFeedbacks] = useState([]);
    const [expandedMessages, setExpandedMessages] = useState({}); // Track expanded messages

    useEffect(() => {
        (async () => {
            let response = await getAllFeedbacks();
            if (Array.isArray(response)) {
                SuccessMessage("Successfully loaded all Feedbacks");
                setShowAllFeedbacks(response);
            } else {
                ErrorMessage("Invalid response format");
            }
        })();
    }, []);

    const handleDelete = async (id) => {
        let result = await deleteFeedback(id);
        if (result && result.data.status === "Success") {
            setShowAllFeedbacks(prevFeedbacks => prevFeedbacks.filter(f => f._id !== id));
        }
    };

    const toggleReadMore = (id) => {
        setExpandedMessages((prev) => ({
            ...prev,
            [id]: !prev[id], // Toggle the state for the specific message
        }));
    };

    return (
        <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-center text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th className="px-6 py-3">Name</th>
                        <th className="px-6 py-3">Email</th>
                        <th className="px-6 py-3">Message</th>
                        <th className="px-6 py-3">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {showAllFeedbacks.map((item, index) => (
                        <tr key={index} className="bg-white border-b hover:bg-gray-50">
                            <td className="px-6 py-4 text-center">{item?.name}</td>
                            <td className="px-6 py-4 text-center">{item?.email}</td>

                            {/* Truncated Content */}
                            <td className="px-6 py-4 text-center">
                                {expandedMessages[item._id] ? item?.message : item?.message.slice(0, 50) + "..."}
                                {item?.message.length > 50 && (
                                    <button
                                        className="text-blue-600 hover:underline ml-2"
                                        onClick={() => toggleReadMore(item._id)}
                                    >
                                        {expandedMessages[item._id] ? "Read Less" : "Read More"}
                                    </button>
                                )}
                            </td>

                            <td className="px-6 py-4 text-center">
                                <button
                                    className="text-red-600 hover:underline"
                                    onClick={() => handleDelete(item._id)}
                                >
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ShowAllFeedbacks;
