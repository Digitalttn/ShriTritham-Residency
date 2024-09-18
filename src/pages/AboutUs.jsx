import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import { GrMapLocation } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";
import { GiLift } from "react-icons/gi";
import { SlStar } from "react-icons/sl";
import { IoTimerOutline } from "react-icons/io5";
import { FiGift } from "react-icons/fi";
import hotelhero from '../assets/shritritham.avif';
import hotel1 from "../assets/Aashiyana.png";
import hotel4 from "../assets/Dhanesh.png";
import hotel5 from "../assets/BEHLAshram.png";
import hotel6 from "../assets/BadriVilleResort.png";
import hotel7 from "../assets/HotelDivine.png";
import hotel8 from "../assets/Neelkanth.png";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      once: true, // Whether animation should happen only once
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Best Hotels in Rudraprayag and Kedarnath, Uttarakhand</title>
        <meta property="og:url" content="https://shritrithamresidency.com/about" />
        <meta name="description" content="Discover the best hotels in Rudraprayag and Kedarnath, Uttarakhand. Enjoy premium accommodations with stunning views, top-notch services, and proximity to Kedarnath Temple and other attractions." />
        <meta name="keywords" content="Best hotels in Rudraprayag, Kedarnath hotels, Uttarakhand accommodations, Kedarnath Temple hotels, hotels in Kedarnath, Rudraprayag stays, Uttarakhand tourism" />
      </Helmet>
      <section className="bg-gray-100 ">
        <div className="container mx-auto">
          <div className="relative">
            <img
              src={hotelhero}
              alt="Best hotels in Rudraprayag and Kedarnath, Uttarakhand"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
              data-aos="fade-up"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 rounded-lg">
              <h2 className="text-4xl font-bold text-white" data-aos="fade-down">
                About Us
              </h2>
            </div>
          </div>

          <div className="mt-10 text-center">
            <h4 className="text-4xl font-semibold text-gray-700 mb-4" data-aos="fade-up">
              Best Hotels in Phata, Guptkashi
            </h4>
            <p className="text-gray-600 max-w-2xl mx-auto" data-aos="fade-up">
              We offer premium accommodations at the best locations in Phata and Guptkashi. Whether you're on a pilgrimage to Kedarnath Temple or exploring the scenic beauty of the region, our hotels provide the perfect base for your stay.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition" data-aos="fade-right">
              <GrMapLocation className="text-4xl text-red-500 mb-4" />
              <h1 className="text-xl font-semibold text-gray-700 mb-2">Best Location</h1>
              <p className="text-gray-500">
                Our hotels are situated at prime locations, providing easy access to Kedarnath Temple and other attractions.
              </p>
            </div>
            <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition" data-aos="fade-left">
              <SlCalender className="text-4xl text-blue-500 mb-4" />
              <h1 className="text-xl font-semibold text-gray-700 mb-2">Free Cancellation</h1>
              <p className="text-gray-500">
                Book with peace of mind, knowing you can cancel anytime.
              </p>
            </div>
            <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition" data-aos="fade-left">
              <GiLift className="text-4xl text-blue-500 mb-4" />
              <h1 className="text-xl font-semibold text-gray-700 mb-2">Lift facility</h1>
              <p className="text-gray-500">
                Book with peace of mind, knowing you can cancel anytime.
              </p>
            </div>
            <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition" data-aos="fade-up">
              <SlStar className="text-4xl text-yellow-500 mb-4" />
              <h1 className="text-xl font-semibold text-gray-700 mb-2">High Rating</h1>
              <p className="text-gray-500">
                Our hotels are highly rated for comfort, cleanliness, and excellent service.
              </p>
            </div>
            <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition" data-aos="fade-right">
              <IoTimerOutline className="text-4xl text-green-500 mb-4" />
              <h1 className="text-xl font-semibold text-gray-700 mb-2">Quiet Hours</h1>
              <p className="text-gray-500">
                Enjoy peaceful surroundings with our designated quiet hours for restful nights.
              </p>
            </div>
            <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition" data-aos="fade-left">
              <FiGift className="text-4xl text-purple-500 mb-4" />
              <h1 className="text-xl font-semibold text-gray-700 mb-2">Special Offers</h1>
              <p className="text-gray-500">
                Take advantage of our special offers for pilgrims and tourists.
              </p>
            </div>
          </div>
        </div>
        
        <div className="slider-container mb-16 px-4 mt-3">
          <h2
            className="text-center text-4xl font-extrabold text-gray-800 mb-8"
            data-aos="fade-up"
          >
            Explore Our Other Hotels
          </h2>
          <Slider {...settings} className="relative">
            <div className="px-2" data-aos="fade-right">
              <img
                src={hotel1}
                alt="Hotel Aashiyana in Rudraprayag"
                className="w-full h-80 object-contain rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="px-2" data-aos="fade-up">
              <img
                src={hotel4}
                alt="Hotel Dhanesh near Kedarnath"
                className="w-full h-80 object-contain rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="px-2" data-aos="fade-left">
              <img
                src={hotel5}
                alt="Hotel BEHLAshram in Uttarakhand"
                className="w-full h-80 object-contain rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="px-2" data-aos="fade-right">
              <img
                src={hotel6}
                alt="Hotel BadriVille Resort near Kedarnath"
                className="w-full h-80 object-contain rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="px-2" data-aos="fade-left">
              <img
                src={hotel7}
                alt="Hotel Divine in Rudraprayag"
                className="w-full h-80 object-contain rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="px-2" data-aos="fade-up">
              <img
                src={hotel8}
                alt="Hotel Neelkanth near Kedarnath"
                className="w-full h-80 object-contain rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
