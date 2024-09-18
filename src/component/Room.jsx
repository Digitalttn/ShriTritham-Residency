import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import AOS from 'aos';
import 'aos/dist/aos.css';
import room1 from '../assets/room3.jpeg';
import room2 from '../assets/room1.jpeg';
import room3 from '../assets/room4.jpeg';
import room4 from '../assets/roomimg1.webp';

const Room = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Customize the animation duration
      once: true, // Animation occurs only once
    });
  }, []);

  return (
    <>
      <Helmet>
        <meta property="og:url" content="https://shritrithamresidency.com/" />
        <meta
          name="description"
          content="Discover our luxurious rooms and suites at Shri Tritham Residency. From deluxe rooms with king-size beds to executive suites with stunning views, find the perfect accommodation for your stay near the Kedarnath Temple."
        />
        <meta
          name="keywords"
          content="luxury rooms, suites, Shri Tritham Residency, Kedarnath hotel, deluxe room, executive suite"
        />
        <meta property="og:title" content="Rooms & Suites - Shri Tritham Residency" />
        <meta
          property="og:description"
          content="Explore the luxurious rooms and suites at Shri Tritham Residency. Enjoy deluxe accommodations, stunning views, and exceptional comfort during your stay near Kedarnath Temple."
        />
        <meta property="og:image" content={room1} />
      </Helmet>

      <div className="p-4 lg:p-8">
        {/* Heading Section */}
        <div className="text-center mb-6" data-aos="fade-down">
          <p className="text-md text-gray-600 font-semibold">THE LUXURY HOTEL</p>
          <h1 className="text-3xl font-bold text-gray-800 mt-1">Rooms & Suites</h1>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* First Image (Full width) */}
          <Link 
            to="/room" // Link to /room page
            className="lg:col-span-2 relative group"
            data-aos="zoom-in" // Apply zoom-in animation
          >
            <img 
              src={room1} 
              alt="Deluxe Room with King Size Bed" 
              className="w-full h-60 lg:h-72 object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-lg">
              <p className="text-white text-lg font-semibold">Deluxe Room - King Size Bed</p>
            </div>
          </Link>

          {/* Second Image (Rectangle) */}
          <Link 
            to="/room" // Link to /room page
            className="lg:row-span-2 relative group"
            data-aos="fade-right" // Apply fade-right animation
          >
            <img 
              src={room2} 
              alt="Executive Suite with Ocean View" 
              className="w-full h-60 lg:h-full object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-lg">
              <p className="text-white text-lg font-semibold">Executive Suite</p>
            </div>
          </Link>

          {/* Third Image */}
          <Link 
            to="/room" // Link to /room page
            className="relative group"
            data-aos="fade-up" // Apply fade-up animation
          >
            <img 
              src={room3} 
              alt="Junior Suite with Garden View" 
              className="w-full h-28 lg:h-36 object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-lg">
              <p className="text-white text-md font-semibold">Junior Suite - Garden View</p>
            </div>
          </Link>

          {/* Fourth Image */}
          <Link 
            to="/room" // Link to /room page
            className="relative group"
            data-aos="fade-left" // Apply fade-left animation
          >
            <img 
              src={room4} 
              alt="Standard Room with Twin Beds" 
              className="w-full h-28 lg:h-36 object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-lg">
              <p className="text-white text-md font-semibold">Standard Room - Twin Bed</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Room;
