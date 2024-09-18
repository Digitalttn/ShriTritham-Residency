// src/components/Modal.js

import React from 'react';
import ReactDOM from 'react-dom';
import { IoClose } from 'react-icons/io5';

const Modal = ({ isOpen, onClose, images, title, description }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          <IoClose className="text-2xl" />
        </button>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex flex-wrap gap-4">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${title} ${index}`}
              className="w-full h-40 object-cover rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
