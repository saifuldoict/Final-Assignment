// src/components/BlogForm.js
import React, { useState } from 'react';

const BlogForm = () => {
  const [blogTitle, setBlogTitle] = useState('');
  const [blogDes, setBlogDes] = useState('');
  const [blogContent, setBlogContent] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend API
    const blogData = {
      title: blogTitle,
      description: blogDes,
      content: blogContent,
      image: image,
    };
    console.log(blogData);
    // Reset form
    setBlogTitle('');
    setBlogDes('');
    setBlogContent('');
    setImage(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Create a New Blog Post</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="blogTitle">
            Blog Title
          </label>
          <input
            type="text"
            id="blogTitle"
            value={blogTitle}
            onChange={(e) => setBlogTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="blogDes">
            Blog Description
          </label>
          <input
            type="text"
            id="blogDes"
            value={blogDes}
            onChange={(e) => setBlogDes(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="blogContent">
            Blog Content
          </label>
          <textarea
            id="blogContent"
            value={blogContent}
            onChange={(e) => setBlogContent(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="4"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
            Image URL
          </label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BlogForm;