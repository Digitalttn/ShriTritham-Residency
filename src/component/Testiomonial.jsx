import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import review1 from '../assets/review1.webp';
import review2 from '../assets/review4.jpg';
import review3 from '../assets/review3.jpg';
import { Helmet } from 'react-helmet';

const StarRating = ({ rating }) => {
  const stars = Array(5).fill(false).map((_, index) => index < rating);
  return (
    <div className="flex items-center">
      {stars.map((filled, index) => (
        <span key={index} className={`text-yellow-500 ${filled ? 'text-yellow-500' : 'text-gray-400'}`}>★</span>
      ))}
    </div>
  );
};

const Testiomonial = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration (in ms)
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    customPaging: i => (
      <div className="slick-dot bg-white w-2.5 h-2.5 rounded-full"></div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
      <meta property="og:url" content="https://shritrithamresidency.com/" />
        <meta name="description" content="Read testimonials from our satisfied guests at Shri Tritham Residency. Discover why our clients love their stay with us." />
        <meta property="og:title" content="Testimonials - Shri Tritham Residency" />
        <meta property="og:description" content="Read testimonials from our satisfied guests at Shri Tritham Residency. Discover why our clients love their stay with us." />
       
   
        <meta name="twitter:title" content="Testimonials - Shri Tritham Residency" />
        <meta name="twitter:description" content="Read testimonials from our satisfied guests at Shri Tritham Residency. Discover why our clients love their stay with us." />
      
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <section
        className="bg-cover bg-center py-12 mt-10"
        style={{ backgroundImage: 'url(https://wp.ditsolution.net/luxury/wp-content/uploads/2022/07/slider1.jpg)' }}
        aria-labelledby="testimonials-heading"
      >
        <div className="container mx-auto text-center">
          <h5 id="testimonials-heading" className="text-2xl font-semibold mb-2 text-gray-200" data-aos="fade-up">Testimonials</h5>
          <h3 className="text-3xl font-bold mb-8 text-white" data-aos="fade-up" data-aos-delay="200">What Our Clients Say</h3>
          <Slider {...settings}>
            <div className="shadow-black p-6 rounded-lg shadow-lg max-w-sm bg-black bg-opacity-80 hover:bg-opacity-100 transition duration-300 ease-in-out transform hover:scale-105" data-aos="fade-right">
              <img src={review1} alt="Review by Emily Johnson" className="w-20 h-20 object-cover rounded-full mb-4 mx-auto" />
              <p className="text-white mb-2">"Shri Tritham Residency exceeded my expectations. The rooms were beautifully designed and the service was impeccable. A perfect retreat for relaxation!"</p>
              <StarRating rating={5} />
              <h5 className="font-semibold text-gray-300 mt-2">Devansh </h5>
            </div>
            <div className="shadow-black p-6 rounded-lg shadow-lg max-w-sm bg-black bg-opacity-80 hover:bg-opacity-100 transition duration-300 ease-in-out transform hover:scale-105" data-aos="fade-up">
              <img src={review2} alt="Review by Michael Lee" className="w-20 h-20 object-cover rounded-full mb-4 mx-auto" />
              <p className="text-white mb-2">"My stay at Shri Tritham Residency was wonderful. The amenities were top-notch and the staff went out of their way to ensure a pleasant stay. Highly recommended!"</p>
              <StarRating rating={4} />
              <h5 className="font-semibold text-gray-300 mt-2"> Sheeltal sharma</h5>
            </div>
            <div className="shadow-black p-6 rounded-lg shadow-lg max-w-sm bg-black bg-opacity-80 hover:bg-opacity-100 transition duration-300 ease-in-out transform hover:scale-105" data-aos="fade-left">
              <img src={review3} alt="Review by Sarah Brown" className="w-20 h-20 object-cover rounded-full mb-4 mx-auto" />
              <p className="text-white mb-2">"A fantastic experience at Shri Tritham Residency. The staff were friendly and the facilities were modern and clean. I will definitely return."</p>
              <StarRating rating={4} />
              <h5 className="font-semibold text-gray-300 mt-2">Manish shah</h5>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Testiomonial;
