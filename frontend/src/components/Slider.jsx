import { useEffect, useState } from "react";
import { getAllBlog } from "../apiCalls/apiCalls.js";
import Loader from "./Loader.jsx";
import Modal from "./Modal.jsx"; // Import the modal

const Slider = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loading, setLoading] = useState(true);
    const [selectedBlog, setSelectedBlog] = useState(null); // State to store the selected blog

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

    // Move to the next slide
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % blogs.length);
    };

    // Move to the previous slide
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + blogs.length) % blogs.length);
    };

    // Auto-slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, [blogs]);

    // Open the modal with the selected blog
    const openModal = (blog) => {
        setSelectedBlog(blog);
    };

    // Close the modal
    const closeModal = () => {
        setSelectedBlog(null);
    };

    return (
        <div className="relative w-full overflow-hidden">
            {/* Loading or No Blogs */}
            {loading ? (
                <Loader />
            ) : blogs.length === 0 ? (
                <p className="text-center">No blogs available</p>
            ) : (
                <div className="carousel w-full relative overflow-hidden">
                    {/* Slide Container */}
                    <div
                        className="flex transition-transform duration-700"
                        style={{
                            transform: `translateX(-${currentSlide * 100}%)`,
                            width: `${blogs.length * 100}%`,
                        }}
                    >
                        {blogs.map((blog, index) => (
                            <div
                                key={index}
                                className="carousel-item relative w-full h-[80vh] flex-shrink-0 cursor-pointer"
                                onClick={() => openModal(blog)} // Open modal on click
                            >
                                <img
                                    src={`http://localhost:3000/file-upload/${blog.img}`}
                                    alt={blog.blogTitle}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute flex gap-4 flex-col justify-center items-center w-full h-full bg-opacity-50 bg-gray-800 text-white">
                                    <h1 className="text-4xl font-bold">{blog.blogTitle}</h1>
                                    <p className="text-lg">{blog.blogContent.slice(0, 100)}...</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <button onClick={prevSlide} className="btn btn-circle">
                            ❮
                        </button>
                        <button onClick={nextSlide} className="btn btn-circle">
                            ❯
                        </button>
                    </div>
                </div>
            )}

            {/* Modal */}
            {selectedBlog && <Modal blog={selectedBlog} onClose={closeModal} />}
        </div>
    );
};

export default Slider;
