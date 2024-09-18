import React from 'react';
import { FaInstagramSquare } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { IoLogoYoutube } from "react-icons/io5";
import { Helmet } from 'react-helmet';

const Footer = () => {
  return (
    <>
      {/* Meta Tags */}
      <Helmet>
      
        <meta name="description" content="Contact us at Shri Tritham Residency for luxury accommodations and top-notch services. Find our address, email, and phone numbers." />
        <meta property="og:title" content="Contact Us - Travel To Niravana" />
        <meta property="og:description" content="Reach out to us for inquiries and more information about Shri Tritham Residency. We are here to assist you." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shritrithamresidency.com/" />
        <meta property="og:url" content="https://www.youtube.com/@Traveltonirvanaharidwar" />
        
        <meta name="twitter:title" content="Contact Us - Shri Tritham Residency" />
        <meta name="twitter:description" content="Reach out to us for inquiries and more information about Shri Tritham Residency. We are here to assist you." />
        
      </Helmet>

      {/* Footer Section */}
      <footer className="bg-black text-white py-10 mt-9">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">
          
          {/* Luxury Section */}
          <section aria-labelledby="luxury-heading">
            <h2 id="luxury-heading" className="text-2xl font-bold mb-4">Shri Tritham Residency</h2>
            <p className="text-gray-400">
            Welcome to Shri Tritham Residency, your peaceful getaway in Guptkashi. 
  Enjoy warm hospitality, comfortable rooms, and stunning views of the Himalayas. 
  Whether you're here for a spiritual journey or a relaxing break, our hotel has everything 
  you need to make your stay special. 
</p>
            <div className="mt-4 flex gap-3 text-3xl ">
              <a href="https://www.instagram.com/p/C9buaWwBLSf/?igsh=M3YwZWdvOTRjZ2h5" aria-label="Instagram">
                <FaInstagramSquare className='text-orange-600' />
              </a>
              <a href="https://www.facebook.com/traveltonirvana/" aria-label="Facebook">
                <CiFacebook className='text-blue-400' />
              </a>
              <a href="https://www.youtube.com/@Traveltonirvanaharidwar" aria-label="YouTube">
                <IoLogoYoutube className='text-red-900' />
              </a>
            </div>
          </section>
          
          {/* General Links Section */}
          <nav aria-labelledby="general-links-heading">
            <h2 id="general-links-heading" className="text-2xl font-bold mb-4">General</h2>
            <ul className="text-gray-400 space-y-2">
              <li className="hover:text-white">
                <a href="/" aria-label="Home"><span className="mr-2">→</span>Home</a>
              </li>
              <li className="hover:text-white">
                <a href="/about" aria-label="About"><span className="mr-2">→</span>About</a>
              </li>
              <li className="hover:text-white">
                <a href="/accommodation" aria-label="Accommodation"><span className="mr-2">→</span>Accommodation</a>
              </li>
              <li className="hover:text-white">
                <a href="/services" aria-label="Services"><span className="mr-2">→</span>Services</a>
              </li>
            </ul>
          </nav>
          
          {/* Contact Us Section */}
          <address aria-labelledby="contact-us-heading">
            <h2 id="contact-us-heading" className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-400">
              Shop 2 & 3, Second Floor, Surya Complex<br />
              Ranipur More, Haridwar, Uttarakhand<br />
              Pin Code – 249401
            </p>
            <p className="text-gray-400 mt-4">
              <a href="mailto:salesinfo@traveltonirvana.com">salesinfo@traveltonirvana.com</a>
            </p>
            <p className="text-gray-400 mt-2">
              <a href="tel:+919258126088">9258126088</a>, <a href="tel:+919258126089">9258126089</a>, <a href="tel:+919389301916">9389301916</a>
            </p>
          </address>
          
        </div>
      </footer>
    </>
  );
}

export default Footer;
