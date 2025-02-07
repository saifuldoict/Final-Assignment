import { useEffect, useState } from "react";
import { getAllServices } from "../apiCalls/apiCalls.js";
import Loader from "./Loader.jsx";

const GetAllService = ({ limit }) => {
    let baseUrl = "http://localhost:3000/file-upload";
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedService, setSelectedService] = useState(null);

    useEffect(() => {
        const getServices = async () => {
            setLoading(true);
            const result = await getAllServices();
            if (result) {
                setServices(result);
            }
            setLoading(false);
        };

        getServices();
    }, []);

    // Prevent background scrolling when modal is open
    useEffect(() => {
        if (selectedService) {
            document.body.style.overflow = "hidden"; // Disable background scroll
        } else {
            document.body.style.overflow = "auto"; // Enable scroll when modal closes
        }

        return () => {
            document.body.style.overflow = "auto"; // Reset scroll on unmount
        };
    }, [selectedService]);

    return (
        <div className="p-4">
            {loading && <Loader />}
            {!loading && services.length === 0 && <p>No Services found</p>}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {services.slice(0, limit).map((service, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition"
                        onClick={() => setSelectedService(service)}
                    >
                        {/* Smaller Image */}
                        <figure className="p-4 flex justify-center">
                            <img
                                className="w-32 h-32 object-cover rounded-lg"
                                src={`${baseUrl}/${service?.img}`}
                                alt={service?.title}
                            />
                        </figure>
                        <div className="px-4 pb-4 text-center">
                            <h2 className="text-lg font-semibold">{service?.title}</h2>
                            <p className="text-gray-600 text-sm">{service?.stack}</p>
                            <p className="text-gray-500 text-xs">{service?.time}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Full-Screen Scrollable Modal */}
            {selectedService && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white w-full max-w-2xl p-6 rounded-lg shadow-lg  overflow-y-auto">
                        <h2 className="text-2xl font-bold">{selectedService.title}</h2>

                        {/* Wrapping Image to Enable Scrolling */}
                        <div className="max-h-60 overflow-y-auto">
                            <img
                                className="w-full object-cover rounded-lg my-4"
                                src={`${baseUrl}/${selectedService.img}`}
                                alt={selectedService.title}
                            />
                        </div>

                        <p className="text-gray-700">{selectedService.stack}</p>
                        <p className="text-gray-500">{selectedService.time}</p>

                        <button
                            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                            onClick={() => setSelectedService(null)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GetAllService;
