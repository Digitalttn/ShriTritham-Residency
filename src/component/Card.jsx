// src/components/Card.js

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Modal from './Model';

const Card = ({ image, title, shortDescription, fullDescription, additionalImages }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
     <Helmet>
        <meta name="keywords" content={`${title}, hotel, luxury hotel, accommodations, Shri Tritham Residency`} />
        <meta property="og:url" content="https://shritrithamresidency.com/" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://yourwebsite.com" />
      </Helmet>
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden max-w-sm w-full">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <div className="p-6">
        <h1 className="text-xl font-semibold text-gray-800 mb-3">{title}</h1>
        <p className="text-gray-600 text-sm">{shortDescription}</p>
        <button
          className="mt-3 text-blue-600 hover:underline"
          onClick={() => setIsModalOpen(true)}
        >
          See More
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={additionalImages}
        title={title}
        description={fullDescription}
      />
    </div>
    </>
  );
};

export default Card;
