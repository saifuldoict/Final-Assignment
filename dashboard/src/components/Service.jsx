// src/components/ServiceForm.js
import React, { useState } from 'react';
import axios from "axios"
const Service = () => {
  const [serviceTitle, setServiceTitle] = useState('');
  const [serviceStack, setServiceStack] = useState('');
  const [time, setTime] = useState('');
  const [image, setImage] = useState('');

  let handleTitle = (e) => {
    setServiceTitle(e.target.value);
  }
 
  let handleStack = (e) => {
    setServiceStack(e.target.value);
  }
  let handleTime = (e) => {
    setTime(e.target.value);
  }
  let handleImage = (e) => {
    setImage(e.target.value);
  }
  let handleSubmit = (e) => {
    e.preventDefault(e);
   axios.post("http://localhost:5090/api/createService/createService"),{
    title: serviceTitle,
    stack: serviceStack,
    time: time,
    img: image
   }
    
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Create a New Service</h2>
      
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="serviceTitle">
            Service Title
          </label>
          <input onChange={handleTitle}
            type="text"
            id="serviceTitle"
            value=""
            
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="serviceStack">
            Service Stack
          </label>
          <input onChange={handleStack}
            type="text"
            id="serviceStack"
            value=""
            
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
            Time
          </label>
          <input onChange={handleTime}
            type="time"
            id="time"
            value=""
            
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
            Image URL
          </label>
          <input  onChange={handleImage}
            type="text"
            id="image"
            value=""
           
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <button onClick={handleSubmit}
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      
    </div>
  );
};

export default Service;