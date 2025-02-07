import { useEffect, useState } from "react";
import { getAllBlog } from "../apiCalls/apiCalls.js";
import Loader from "./Loader.jsx";

const GetAllBlogs = ({ limit }) => {  // Accept limit as prop
    let baseUrl = "http://localhost:3000/file-upload";
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedBlog, setSelectedBlog] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            setLoading(true);
            const result = await getAllBlog();
            if (result) {
                setBlogs(result);
            }
            setLoading(false);
        };

        fetchBlogs();
    }, []);

    return (
        <div className="p-4">
            {loading && <Loader />}
            {!loading && blogs.length === 0 && <p>No blogs found</p>}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center">
                {blogs.slice(0, limit).map((blog, index) => (  // Use limit prop
                    <div key={index} className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img className="rounded-xl" src={`${baseUrl}/${blog?.img}`} alt={blog?.blogTitle} />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{blog?.blogTitle}</h2>
                            <p>{blog?.blogDes}</p>
                            <p>{blog?.blogContent.slice(0, 50)}...</p>
                            <button
                                className="bg-purple-700 text-white rounded-xl px-4 py-2 md:text-nowrap md:px-6 md:py-2 md:text-sm md: lg:px-10"
                                onClick={() => setSelectedBlog(blog)}
                            >
                                Read More
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Full-Screen Scrollable Modal */}
            {selectedBlog && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-auto">
                    <div className="bg-white w-11/12 md:w-3/4 lg:w-1/2 p-6 rounded-lg shadow-lg max-h-[80vh] overflow-y-auto">
                        <h2 className="text-2xl font-bold">{selectedBlog.blogTitle}</h2>
                        <img
                            className="w-full h-60 object-cover rounded-lg my-4"
                            src={`${baseUrl}/${selectedBlog.img}`}
                            alt={selectedBlog.blogTitle}
                        />
                        <p className="text-gray-700">{selectedBlog.blogContent}</p>
                        <button
                            className="btn btn-error mt-4"
                            onClick={() => setSelectedBlog(null)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GetAllBlogs;
