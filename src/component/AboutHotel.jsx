import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css';
import hotel from '../assets/shritritham2.avif';

const AboutHotel = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Customize the animation duration
    });
  }, []);

  return (
    <>
      <Helmet>
      <meta property="og:url" content="https://shritrithamresidency.com/" />
        <meta name="description" content="Shri Tritham Residency offers a serene and luxurious stay near the famous Kedarnath Temple. Experience modern amenities and breathtaking views in the heart of the Himalayas, ideal for pilgrims and travelers alike." />
        <meta name="keywords" content="Shri Tritham Residency, Kedarnath Temple, luxury hotel near Kedarnath, Himalayan retreat, peaceful stay, pilgrimage accommodation" />
        <meta property="og:title" content="About Shri Tritham Residency - Luxury Retreat Near Kedarnath Temple" />
        <meta property="og:description" content="Shri Tritham Residency provides a tranquil and luxurious stay near the sacred Kedarnath Temple. Enjoy top-notch amenities and stunning views in the Himalayas, perfect for pilgrims and travelers." />
        <meta property="og:image" content={hotel} />
       
      </Helmet>

      <div className="flex flex-col items-center justify-center p-6 lg:p-12 transition-transform duration-500 ease-in-out transform hover:scale-105">
        <div className="flex flex-col lg:flex-row items-center lg:items-center lg:justify-center gap-6 lg:gap-12 transition-all duration-500 ease-in-out">
          
          {/* Heading */}
          <div 
            className="text-center lg:text-center lg:w-1/3 opacity-100 transition-opacity duration-500 ease-in-out hover:opacity-80"
            data-aos="fade-right" // Apply fade-right animation
          >
            <p className="text-gray-600 text-lg font-semibold">Phata, Kedarnath</p>
            <h1 className="text-4xl font-bold text-gray-800 mt-4">
             Shri Tritham Residency -<br />
             Luxury Hotel and Restaurant In Guptkashi
            </h1>
          </div>
          
          {/* Image */}
          <div 
            className="lg:w-1/3 transition-transform duration-500 ease-in-out transform hover:scale-110"
            data-aos="zoom-in" // Apply zoom-in animation
          >
            <img 
              src={hotel} 
              alt="Shri Tritham Residency" 
              className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </div>
          
          {/* Paragraph */}
          <div 
            className="text-center lg:text-center lg:w-1/3 space-y-4 opacity-100 transition-opacity duration-500 ease-in-out hover:opacity-80"
            data-aos="fade-left" // Apply fade-left animation
          >
<p className="text-gray-700">
  Located in Phata near Helipad, on the way to the famous Kedarnath Temple, Shri Tritham Residency offers a peaceful and comfortable stay in the beautiful Himalayas. Our hotel is perfect for those looking for rest and relaxation before or after their visit to this holy Shiva temple.
</p>
<p className="text-gray-700">
  Enjoy modern comforts and stunning views of the Himalayas. our hotel is a great place for both travelers and pilgrims.
</p>

          </div>
        </div>
        <hr className="bg-black" data-aos="fade-up" data-aos-delay="400" />
      </div>
    </>
  );
};

export default AboutHotel;
