import React from 'react';
import offer1 from '../assets/offer1.jpg';
import offer2 from '../assets/offer2.jpg';
import offer3 from '../assets/offer3.jpg';
import { Helmet } from 'react-helmet';

const Offers = () => {
  return (
    <>
      <Helmet>
      <meta property="og:url" content="https://shritrithamresidency.com/" />
        <meta name="description" content="Discover exclusive offers for char dham Yatra. Enjoy discounts on premium rooms, family packages with free breakfast, and weekend getaway deals with complimentary dinners and luxury accommodations." />
        <meta name="keywords" content="hotel offers, exclusive hotel deals, premium room discounts, family packages, weekend getaway, hotel promotions" />
        <meta property="og:title" content="Exclusive Hotel Offers | Shri Tritham Residency| Char Dham Yatra" />
        <meta property="og:description" content="Explore the best hotel offers at Shri Tritham Residency. From discounts on premium rooms to family packages and weekend getaways, we have deals that make your stay memorable." />
        <meta property="og:image" content={offer1} />
        <meta property="og:image" content={offer2} />
        <meta property="og:image" content={offer3} />
      </Helmet>

      <section className="max-w-6xl mx-auto py-12 px-4" aria-labelledby="offers-heading">
        {/* Title Section */}
        <header className="text-center mb-12" data-aos="fade-up">
          <h1 id="offers-heading" className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Best <span className="text-[#4e5f88]">Hotel Offers</span>
          </h1>
        </header>

        {/* Offers Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <a href="https://traveltonirvana.com/" target="_blank" rel="noopener noreferrer">
            <article className="relative overflow-hidden rounded-lg shadow-lg group" data-aos="fade-up">
              <img
                src={offer1}
                alt="Exclusive Hotel Offer 1: Discount on premium rooms and luxury amenities."
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">Exclusive Offer 1</p>
              </div>
            </article>
          </a>

          <a href="https://traveltonirvana.com/" target="_blank" rel="noopener noreferrer">
            <article className="relative overflow-hidden rounded-lg shadow-lg group" data-aos="fade-up" data-aos-delay="100">
              <img
                src={offer2}
                alt="Special Hotel Offer 2: Family packages with free breakfast and kids' activities."
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">Exclusive Offer 2</p>
              </div>
            </article>
          </a>

          <a href="https://traveltonirvana.com/" target="_blank" rel="noopener noreferrer">
            <article className="relative overflow-hidden rounded-lg shadow-lg group" data-aos="fade-up" data-aos-delay="200">
              <img
                src={offer3}
                alt="Weekend Getaway Offer 3: Package with complimentary dinner and luxury accommodations."
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">Exclusive Offer 3</p>
              </div>
            </article>
          </a>
        </div>
      </section>
    </>
  );
};

export default Offers;
