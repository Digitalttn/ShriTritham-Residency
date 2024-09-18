import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import hotel from "../assets/tri.jpeg";
import AboutHotel from "../component/AboutHotel";
import Room from "../component/Room";
import Facilities from "../component/Facilites";


// import VideoPage from '../component/VideoPage';
import Offers from "../component/Offers";
import Extra from "../component/Extra";
import Testiomonial from "../component/Testiomonial";
import { Link } from "react-router-dom";
import KedarnathPage from "../component/KedarnathPage";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // You can adjust the duration of the animations
    });
  }, []);
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
  };

  return (
    <>
      <Helmet>
        <title>Shri Tritham Residency - Luxury Hotel & Restaurant in phata,guptkashi </title>
        <meta property="og:url" content="https://shritrithamresidency.com/" />
        <meta
          name="description"
          content="Experience luxury and comfort at Shri Tritham Residency, a serene mountain retreat. Explore our rooms, amenities, and special offers in a breathtaking location."
        />
        
        <meta
          name="keywords"
          content="luxury hotel, mountain retreat, Shri Tritham Residency, accommodations, travel, luxury stay"
        />
        <meta name="author" content="Your Name or Company" />
        <meta
          property="og:title"
          content="Shri Tritham Residency - Luxury Mountain Retreat"
        />
        <meta
          property="og:description"
          content="Experience luxury and comfort at Shri Tritham Residency, a serene mountain retreat. Explore our rooms, amenities, and special offers in a breathtaking location."
        />
        <meta property="og:image" content={hotel} />
      </Helmet>

      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={hotel}
            alt="Hotel Background"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="bg-opacity-60 rounded-lg shadow-lg max-w-4xl mx-auto text-center text-white p-6 shadow-black"
            data-aos="fade-up" // Apply AOS animation here
          >
            {/* <h4 className="text-2xl font-bold mb-2" data-aos="fade-down" data-aos-delay="200">
              Welcome to Shri Tritham Residency
            </h4> */}
            <h1
              className="text-5xl mb-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Your Luxury Escape in the Mountains
              <hr className="w-full mt-3 mx-auto border-b-2 border-white" />
            </h1>
            <p className="text-xl mb-3" data-aos="fade-in" data-aos-delay="600">
              Located on the peaceful path to Shri Kedarnath, enjoy top comfort
              and luxury in stunning natural surroundings.
            </p>

            <button
              className="bg-yellow-700 px-3 py-3 rounded-md text-white hover:bg-[#506093] hover:text-white"
              data-aos="zoom-in"
              data-aos-delay="800"
            >
              <Link to="/room">Explore Rooms & Suites</Link>
            </button>
          </div>
        </div>
      </div>

      <AboutHotel />
      <KedarnathPage/>
      <Room />
      <Facilities />
      {/* <VideoPage /> */}
      <Offers />
      <Extra />
      <Testiomonial />
    </>
  );
};

export default Home;
