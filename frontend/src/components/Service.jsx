// src/components/ServiceSection.js
import React from 'react';

const services = [
  {
    id: 1,
    title: 'Web Development',
    stack: 'Building responsive and dynamic websites using modern technologies.',
    img: '🌐',
  },
  {
    id: 2,
    title: 'Mobile App Development',
    stack: 'Creating user-friendly mobile applications for both iOS and Android platforms.',
    img: '📱',
  },
  {
    id: 3,
    title: 'UI/UX Design',
    stack: 'Designing intuitive user interfaces and enhancing user experience.',
    img: '🎨',
  },
  {
    id: 4,
    title: 'API Development',
    stack: 'Developing robust APIs for seamless integration with various services.',
    img: '🔌',
  },
  {
    id: 5,
    title: 'E-commerce Solutions',
    stack: 'Creating scalable e-commerce platforms to help businesses grow online.',
    img: '🛒',
  },
  {
    id: 6,
    title: 'SEO Optimization',
    stack: 'Optimizing websites to improve visibility and ranking on search engines.',
    img: '🔍',
  },
];

const ServiceSection = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-6">My Srvices</h2>
      <p className="text-lg text-center mb-4">
         offer a range of services to help you achieve your business goals.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-lg shadow-md p-4">
            <div className="text-4xl text-center mb-2">{service.img}</div>
            <h3 className="text-xl font-semibold text-center">{service.title}</h3>
            <p className="text-gray-600 text-center mt-2">{service.stack}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;