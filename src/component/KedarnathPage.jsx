import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import kedar from '../assets/kedarnath.jpg'; // Ensure this image path is correct
import { Helmet } from 'react-helmet';

const KedarnathPage = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <Helmet>
        <meta property="og:url" content="https://shritrithamresidency.com/" />
        <meta
          name="description"
          content="Discover the spiritual tranquility of Kedarnath Temple. Stay at Shri Tritham Residency, the ideal retreat for pilgrims visiting this sacred site in the Himalayas."
        />
        <meta
          name="keywords"
          content="Kedarnath Temple, Shri Tritham Residency, pilgrimage, spiritual retreat, Himalayas, Kedarnath travel, Char Dham, luxury hotel near Kedarnath"
        />
        <meta property="og:title" content="Kedarnath Temple - A Sacred Pilgrimage" />
        <meta
          property="og:description"
          content="Stay at Shri Tritham Residency and experience the spiritual essence of Kedarnath Temple, a revered pilgrimage site in the majestic Himalayas."
        />
        <meta property="og:image" content={kedar} />
      </Helmet>

      <div className="w-full min-h-screen bg-gradient-to-b from-gray-100 to-gray-300">
        {/* Page Header */}
        <header className="bg-gray-900 text-white text-center py-8 md:py-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Kedarnath Temple</h1>
          <p className="text-md md:text-lg max-w-4xl mx-auto">
            Experience the spiritual tranquility of Kedarnath Temple, a revered shrine nestled in the Himalayas.
          </p>
        </header>

        {/* Main Content */}
        <main className="p-4 md:p-16">
          <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto space-y-8 md:space-y-0">
            {/* Image Section */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <img
                src={kedar}
                alt="Kedarnath Temple"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Text Content */}
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">About Kedarnath Temple</h2>
              <p className="text-base md:text-lg leading-relaxed mb-4">
                Kedarnath Temple is one of the four Char Dham pilgrimage sites and is dedicated to Lord Shiva. 
                It is situated at an altitude of 3,583 meters (11,755 ft) above sea level in the Kedarnath range of the Himalayas.
                The temple is known for its serene location and spiritual significance. Pilgrims from around the world visit Kedarnath
                for a chance to seek blessings and experience the divine ambiance of this sacred place.
              </p>
              {isExpanded && (
                <p className="text-base md:text-lg leading-relaxed mb-4">
                  The temple is believed to have been originally built by the Pandavas and later rebuilt by Adi Shankaracharya. 
                  The scenic beauty of the surroundings, including the snow-capped peaks and lush valleys, adds to the temple's charm.
                  The journey to Kedarnath involves a trek of around 16 kilometers from the nearest road head at Gaurikund.
                </p>
              )}
              <p className={`text-base md:text-lg leading-relaxed mb-4 ${isExpanded ? 'hidden' : 'block'}`}>
                Visiting Kedarnath Temple offers a unique blend of spiritual and natural experiences. It is an opportunity to connect
                with the divine while immersing oneself in the breathtaking beauty of the Himalayas.
              </p>
              <button
                onClick={toggleText}
                className="text-blue-500 hover:text-blue-600 font-semibold mb-4 transition ease-in-out duration-200"
              >
                {isExpanded ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-8 md:mt-12">
            <Link
              to="/contact"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 md:px-8 md:py-4 rounded-md shadow-lg transition ease-in-out duration-300"
            >
              Get in Touch for More Information
            </Link>
          </div>
        </main>
      </div>
    </>
  );
};

export default KedarnathPage;
