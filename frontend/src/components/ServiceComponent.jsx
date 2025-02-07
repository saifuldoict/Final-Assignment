import { useEffect, useState } from "react";
import { createService, getAllServices, updateService, deleteService, uploadFiles } from "../apiCalls/apiCalls.js";

const ServiceComponent = () => {
    const [services, setServices] = useState([]);
    const [serviceData, setServiceData] = useState({ title: "", stack: "", time: "", img: "" });
    const [editingService, setEditingService] = useState(null);
    const [newImage, setNewImage] = useState(null);

    useEffect(() => {
        (async () => {
            let result = await getAllServices();
            if (result) setServices(result);
        })();
    }, []);

    // Handle File Upload
    const handleFileUpload = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", newImage);

        const result = await uploadFiles(formData);

        if (result?.data?.file?.[0]?.filename) {
            setServiceData({ ...serviceData, img: result.data.file[0].filename });
        } else {
            alert("Image upload failed");
        }
    };

    // Add Service
    const handleCreateService = async () => {
        let result = await createService(serviceData);
        if (result) {
            setServices([...services, { ...serviceData, _id: result._id }]);
            setServiceData({ title: "", stack: "", time: "", img: "" });
        }
    };

    // Update Service
    const handleUpdateService = async () => {
        let result = await updateService(editingService._id, serviceData);
        if (result) {
            setServices(services.map(service =>
                service._id === editingService._id ? { ...service, ...serviceData } : service
            ));
            setEditingService(null);
            setServiceData({ title: "", stack: "", time: "", img: "" });
        }
    };

    // Delete Service
    const handleDeleteService = async (id) => {
        let result = await deleteService(id);
        if (result) {
            setServices(services.filter(service => service._id !== id));
        }
    };

    return (
        <div className="p-4 rounded">
            <h2 className="text-2xl font-bold mb-4">Manage Services</h2>

            {/* Add or Edit Service Form */}
            <div className="mb-4">
                <div>
                    <label className="label-text text-2xl " htmlFor="title">Service Title</label>
                    <input
                        type="text"
                        placeholder="Enter Service Title"
                        value={serviceData.title}
                        onChange={(e) => setServiceData({...serviceData, title: e.target.value})}
                        className="w-full rounded-lg p-4 pe-12 text-sm shadow-sm border  focus:ring-purple-400 "
                        id="title"
                    />

                </div>
                <div><label className="label-text text-2xl " htmlFor="stack"> Which Stack? </label>
                    <input
                        type="text"
                        placeholder="Enter Service Stack"
                        value={serviceData.stack}
                        onChange={(e) => setServiceData({...serviceData, stack: e.target.value})}
                        className="w-full rounded-lg p-4 pe-12 text-sm shadow-sm border  focus:ring-purple-400 "
                        id="stack"
                    />
                </div>
                <div>
                    <label className="label-text text-2xl " htmlFor="time">Time for Complete </label>
                    <input
                        type="text"
                        placeholder="Enter Service Time"
                        value={serviceData.time}
                        onChange={(e) => setServiceData({...serviceData, time: e.target.value})}
                        className="w-full rounded-lg p-4 pe-12 text-sm shadow-sm border  focus:ring-purple-400 "
                        id="time"
                    />
                </div>

                {/* File Upload */}

                <form className="relative w-full mb-4" onSubmit={handleFileUpload}>
                    <label className="label-text text-2xl w-full" htmlFor="serviceImage">
                        Service Image
                    </label>
                    <div className="relative w-full">
                        <input
                            className="w-full rounded-lg p-4 text-sm shadow-sm border focus:ring-purple-400 pr-20"
                            type="file"
                            onChange={(e) => setNewImage(e.target.files[0])}
                            accept="image/*"
                            id="serviceImage"
                        />
                        <button
                            type="submit"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white px-4 py-2 text-sm rounded-lg opacity-80 hover:opacity-100 transition-opacity"
                        >
                            Upload
                        </button>
                    </div>
                </form>

                {/* Add or Update Button */}
                {editingService ? (
                    <button onClick={handleUpdateService} className="bg-purple-600 text-white px-4 py-2 text-sm rounded-lg opacity-80 hover:opacity-100 transition-opacity">Update
                        Service</button>
                ) : (
                    <button onClick={handleCreateService} className="bg-purple-600 text-white px-4 py-2 text-sm rounded-lg opacity-80 hover:opacity-100 transition-opacity">Add
                        Service</button>
                )}
            </div>

            {/* Service List */}

            <table className="w-full border">
                <thead>
                <tr>
                    <th className="border p-2">Title</th>
                    <th className="border p-2">Stack</th>
                    <th className="border p-2">Time</th>
                    <th className="border p-2">Image</th>
                    <th className="border p-2">Actions</th>
                </tr>
                </thead>
                <tbody>
                {services.map((service) => (
                    <tr key={service._id} className="border text-center ">
                        <td className="border p-2">{service.title}</td>
                        <td className="border p-2">{service.stack}</td>
                        <td className="border p-2">{service.time}</td>
                        <td className="border p-2 flex justify-center items-center w-full">
                            {service.img ?
                                <img src={`http://localhost:3000/file-upload/${service.img}`} alt={service.title}
                                     className="w-12 h-12 "/> : "No Image"}
                        </td>
                        <td className="border p-2">
                            <button
                                onClick={() => {
                                    setEditingService(service);
                                    setServiceData({
                                        title: service.title,
                                        stack: service.stack,
                                        time: service.time,
                                        img: service.img
                                    });
                                }}
                                className="text-blue-500 mr-2"
                            >
                                Edit
                            </button>
                            <button onClick={() => handleDeleteService(service._id)} className="text-red-500">Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ServiceComponent;