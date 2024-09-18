// src/components/Whatsapp.js

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const Whatsapp = () => {
    const phoneNumber = '9258126088';

    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Need assistance or have inquiries? Chat with us directly on WhatsApp at Shri Tritham Residency for quick responses and personalized help."
                />
                <meta
                    name="keywords"
                    content="WhatsApp chat, hotel inquiry, Shri Tritham Residency, contact hotel, quick assistance"
                />
                <meta property="og:title" content="Chat with Us on WhatsApp" />
                <meta
                    property="og:description"
                    content="Click here to chat with Shri Tritham Residency via WhatsApp. Quick assistance and answers to all your queries."
                />
                <meta property="og:url" content={`https://wa.me/${phoneNumber}`} />
               
                
            </Helmet>

            <a
                href={`https://wa.me/${phoneNumber}`}
                rel="noopener noreferrer"
                className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-colors duration-200"
            >
                <FaWhatsapp size={24} />
                <span className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-800 text-black text-xs py-1 px-2 rounded-lg shadow-lg">
                    Chat with us!
                </span>
                <div className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-ping"></div>
            </a>
        </>
    );
};

export default Whatsapp;
