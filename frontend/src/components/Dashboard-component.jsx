import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { ErrorMessage, IsEmpty, SuccessMessage } from "../../helper/helper.js";
import {createBlog, deleteBlog, getAllBlog,  uploadFiles} from "../apiCalls/apiCalls.js";
import { useNavigate } from "react-router-dom";
import { updateBlog as updateBlogAPI } from "../apiCalls/apiCalls.js";
import TeamComponent from "./TeamComponent.jsx";
import ServiceComponent from "./ServiceComponent.jsx";
import ShowAllFeedbacks from "./ShowAllFeedbacks.jsx";

const DashboardComponent = () => {


    let navigate = useNavigate();
    let baseUrl = "http://localhost:3000/file-upload";

    // blog related functions
    const [blogs, setBlogs] = useState([]);
    const [selectedBlog, setSelectedBlog] = useState(null); // For "Read More" modal
    const [file, setFile] = useState(null);
    const [data, setData] = useState({
        blogTitle: "",
        blogDes: "",
        blogContent: "",
        img: "",
    });
    const [editingBlog, setEditingBlog] = useState(null);
    const [editData, setEditData] = useState({
        blogTitle: "",
        blogDes: "",
        blogContent: "",
        img: "",
    });
    const [newImage, setNewImage] = useState(null);



    useEffect(() => {
        (async () => {
            let result = await getAllBlog();
            setBlogs(result);
        })();
    }, []);

    // File Upload Handler
    const handleFileUpload = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        const result = await uploadFiles(formData);
        setData({ ...data, img: result?.data?.file?.[0]?.filename });
    };

    // Blog Submit Handler
    const submitData = async () => {
        if (IsEmpty(data.blogTitle)) {
            ErrorMessage("Blog Title Required");
        } else if (IsEmpty(data.blogDes)) {
            ErrorMessage("Blog Description Required");
        } else if (IsEmpty(data.blogContent)) {
            ErrorMessage("Blog Content Required");
        } else if (IsEmpty(data.img)) {
            ErrorMessage("Blog Image Required");
        } else {
            await createBlog(data);
            window.location.reload();
        }
    };

    // Delete Blog Handler
    const deleteHandler = async (id) => {
        const result = await deleteBlog(id);
        if (result) {
            setBlogs(blogs.filter((blog) => blog._id !== id));
        }
    };

    const handleEditImageUpload = async () => {
        if (!newImage) {
            ErrorMessage("Please select an image to upload");
            return;
        }

        const formData = new FormData();
        formData.append("file", newImage);

        const result = await uploadFiles(formData);

        if (result?.data?.file?.[0]?.filename) {
            setEditData({ ...editData, img: result.data.file[0].filename });
            SuccessMessage("Image uploaded successfully!");
        } else {
            ErrorMessage("Image upload failed");
        }
    };

    const updateBlog = async (id, updatedData) => {
        try {
            let result = await updateBlogAPI(id, updatedData);

            if (result) { // Check for true instead of accessing `result.data`
                SuccessMessage("Blog updated successfully!");

                // Update the blog list without reloading
                setBlogs((prevBlogs) =>
                    prevBlogs.map((blog) =>
                        blog._id === id ? { ...blog, ...updatedData } : blog
                    )
                );

                setEditingBlog(null); // Close modal
            } else {
                ErrorMessage("Failed to update blog.");
            }
        } catch (error) {
            ErrorMessage("Something went wrong while updating the blog.");
            console.error("Update Blog Error:", error);
        }
    };

// blog related function finish




    return (
        <div className="flex flex-col gap-10">
            <div className="container-fluid w-full mx-auto bg-zinc-300">
                <h2 className="text-gray-700 text-4xl font-bold text-center p-4">
                    Welcome to Our Dashboard!
                </h2>
            </div>
            <div className="container mx-auto border-gray-700 shadow-md">
                <Tabs>
                    <TabList className="text-gray-700 font-bold flex items-center justify-center ">
                        <Tab>Add Blog</Tab>
                        <Tab>All Blogs</Tab>
                        <Tab>Manage Team Member</Tab>
                        <Tab>Manage Service Item</Tab>
                        <Tab>Feedbacks</Tab>
                    </TabList>

                    {/* Add Blog Form */}
                    <TabPanel className="mt-4">
                        <div className=" py-[20px] sm:px-6 lg:px-8">

                            <div  className="gap-4 grid grid-cols-12 " >
                                <div className="grid col-span-12 space-y-6">
                                    <div><label htmlFor="blog" className="label-text text-2xl ">Blog Title
                                        <input
                                            onChange={(e) => setData({...data, blogTitle: e.target.value})}
                                            placeholder="Blog Title"
                                            className="w-full rounded-lg p-4 pe-12 text-sm shadow-sm border  focus:ring-purple-400 "
                                            id="blog"
                                            type="text"
                                        /></label>
                                    </div>
                                    <div><label htmlFor="blogDes" className="label-text text-2xl"> Blog Description
                                        <input
                                            onChange={(e) => setData({...data, blogDes: e.target.value})}
                                            placeholder="Blog Description"
                                            className="w-full rounded-lg  p-4 pe-12 text-sm shadow-sm border  focus:ring-purple-400 "
                                            id="blogDes"
                                            type="text"
                                        />
                                    </label></div>
                                    <div><label htmlFor="blogContent" className="label-text text-2xl">Blog Content
                                        <textarea
                                            onChange={(e) => setData({...data, blogContent: e.target.value})}
                                            placeholder="Blog Content"
                                            className="w-full rounded-lg p-4 pe-12 text-sm shadow-sm border focus:ring-purple-400 "
                                            id="blogContent"
                                            type="text"
                                        />
                                    </label></div>
                                    <form className="relative w-full" onSubmit={handleFileUpload}>
                                        <label className="label-text text-2xl w-full" htmlFor="imageBlog">
                                            Blog Image
                                        </label>
                                        <div className="relative w-full">
                                            <input
                                                className="w-full rounded-lg p-4 text-sm shadow-sm border focus:ring-purple-400 pr-20"
                                                type="file"
                                                onChange={(e) => setFile(e.target.files[0])}
                                                accept="image/*"
                                                id="imageBlog"
                                            />
                                            <button
                                                type="submit"
                                                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white px-4 py-2 text-sm rounded-lg opacity-80 hover:opacity-100 transition-opacity"
                                            >
                                                Upload
                                            </button>
                                        </div>
                                    </form>

                                </div>
                                <div className="grid col-span-2  ">
                                    <button
                                        onClick={submitData}
                                        className="inline-block rounded-lg bg-purple-600 px-4  py-3 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                                        type="submit"
                                    >
                                        Add Blog
                                    </button>
                                </div>
                            </div>
                        </div>


                    </TabPanel>

                    {/* All Blogs Section */}
                    <TabPanel className="mt-4">
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-center text-gray-500">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3">Blog Title</th>
                                    <th className="px-6 py-3">Description</th>
                                    <th className="px-6 py-3">Content</th>
                                    <th className="px-16 py-3">Image</th>
                                    <th className="px-6 py-3">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {blogs.map((item, index) => (
                                    <tr key={index} className="bg-white border-b hover:bg-gray-50">
                                        <td className="px-6 py-4 text-center">{item?.blogTitle}</td>
                                        <td className="px-6 py-4 text-center">{item?.blogDes}</td>

                                        {/* Truncated Content */}
                                        <td className="px-6 py-4 text-center">
                                            {item?.blogContent.length > 50
                                                ? item?.blogContent.slice(0, 50) + "..."
                                                : item?.blogContent}
                                            {item?.blogContent.length > 50 && (
                                                <button
                                                    onClick={() => setSelectedBlog(item)}
                                                    className="text-blue-600 hover:underline ml-2"
                                                >
                                                    Read More
                                                </button>
                                            )}
                                        </td>

                                        {/* Image */}
                                        <td className="p-4 flex justify-center">
                                            <img
                                                src={`${baseUrl}/${item?.img}`}
                                                alt={item?.blogTitle}
                                                className="w-[80px] h-[80px] object-cover rounded-lg"
                                            />
                                        </td>

                                        {/* Action Buttons (Edit + Delete) */}
                                        <td className="px-6 py-4 text-center">
                                            <button
                                                className="text-blue-600 hover:underline mr-4"
                                                onClick={() => {
                                                    setEditingBlog(item);
                                                    setEditData({
                                                        blogTitle: item.blogTitle,
                                                        blogDes: item.blogDes,
                                                        blogContent: item.blogContent,
                                                        img: item.img,
                                                    });
                                                }}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="text-red-600 hover:underline"
                                                onClick={() => deleteHandler(item?._id)}
                                            >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Add the Edit Modal Here */}
                        {editingBlog && (
                            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                                <div className="bg-white w-3/4 p-6 rounded-lg shadow-lg max-h-[80vh] overflow-y-auto">
                                    <h2 className="text-2xl font-bold">Edit Blog</h2>

                                    {/* Blog Title */}
                                    <input
                                        type="text"
                                        value={editData.blogTitle}
                                        onChange={(e) => setEditData({ ...editData, blogTitle: e.target.value })}
                                        className="w-full rounded-lg p-2 border mt-2"
                                        placeholder="Blog Title"
                                    />

                                    {/* Blog Description */}
                                    <input
                                        type="text"
                                        value={editData.blogDes}
                                        onChange={(e) => setEditData({ ...editData, blogDes: e.target.value })}
                                        className="w-full rounded-lg p-2 border mt-2"
                                        placeholder="Blog Description"
                                    />

                                    {/* Blog Content */}
                                    <textarea
                                        value={editData.blogContent}
                                        onChange={(e) => setEditData({ ...editData, blogContent: e.target.value })}
                                        className="w-full rounded-lg p-2 border mt-2"
                                        placeholder="Blog Content"
                                    ></textarea>

                                    {/* Current Image Preview */}
                                    <div className="mt-4">
                                        <p className="text-gray-700">Current Image:</p>
                                        <img
                                            src={`${baseUrl}/${editData.img}`}
                                            alt="Current Blog"
                                            className="w-[120px] h-[120px] object-cover rounded-lg mt-2"
                                        />
                                    </div>

                                    {/* Upload New Image */}
                                    <div className="mt-4">
                                        <label className="block text-gray-700">Upload New Image:</label>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="w-full rounded-lg p-2 border mt-2"
                                            onChange={(e) => setNewImage(e.target.files[0])}
                                        />
                                        <button
                                            onClick={handleEditImageUpload}
                                            className="bg-purple-600 text-white px-4 py-2 rounded-lg mt-2"
                                        >
                                            Upload Image
                                        </button>
                                    </div>

                                    {/* Buttons */}
                                    <button
                                        className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-4"
                                        onClick={() => updateBlog(editingBlog._id, editData)}
                                    >
                                        Update Blog
                                    </button>
                                    <button
                                        className="bg-red-600 text-white px-4 py-2 rounded-lg mt-4 ml-2"
                                        onClick={() => setEditingBlog(null)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        )}

                    </TabPanel>



                    <TabPanel>
                        <TeamComponent />
                    </TabPanel>

                    <TabPanel>
                        <ServiceComponent />
                    </TabPanel>
                    <TabPanel>
                        <ShowAllFeedbacks />
                    </TabPanel>

                </Tabs>
            </div>

            {/* Modal for Full Blog Content */}
            {selectedBlog && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-white w-3/4 p-6 rounded-lg shadow-lg max-h-[80vh] overflow-y-auto">
                        <h2 className="text-2xl font-bold">{selectedBlog.blogTitle}</h2>
                        <img className="w-full h-60 object-cover rounded-lg my-4" src={`${baseUrl}/${selectedBlog.img}`} alt={selectedBlog.blogTitle} />
                        <p className="text-gray-700">{selectedBlog.blogContent}</p>
                        <button className="btn btn-error mt-4" onClick={() => setSelectedBlog(null)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DashboardComponent;
