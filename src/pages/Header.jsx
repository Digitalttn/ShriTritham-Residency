import React, { useState, useEffect } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { FaHome, FaBed, FaInfoCircle, FaPhone } from 'react-icons/fa';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle the drawer
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // Scroll event to detect header background change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Shri Tritham Residency</title>
        <meta property="og:url" content="https://shritrithamresidency.com/" />
        <meta name="description" content="Welcome to Shri Tritham Residency. Enjoy a luxurious stay with exceptional service and stunning views. Explore our rooms, amenities, and nearby attractions." />
        <meta name="keywords" content="Shri Tritham Residency, luxury hotel, rooms, accommodations, travel, explore" />
        <meta property="og:title" content="Shri Tritham Residency" />
        <meta property="og:description" content="Welcome to Shri Tritham Residency. Enjoy a luxurious stay with exceptional service and stunning views. Explore our rooms, amenities, and nearby attractions." />
        
      </Helmet>

      <header className={`fixed w-full top-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-black' : 'bg-transparent'} text-white`}>
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-center lg:px-20 py-4 transition-all duration-300">
          {/* Logo */}
          <div className="text-3xl md:text-3xl lg:text-4xl text-white font-bold cursive">
            <h1 style={{ fontFamily: "'Cursive', sans-serif" }}>Shri Tritham Residency</h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex flex-grow items-center justify-center gap-8">
            <ul className="flex space-x-6">
              <li>
                <Link
                  to="/"
                  className="text-white hover:underline text-2xl font-semibold hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/room"
                  className="text-white hover:underline text-2xl font-semibold hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Rooms
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white hover:underline text-2xl font-semibold hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/explore"
                  className="text-white hover:underline text-2xl font-semibold hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Explore
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white hover:underline text-2xl font-semibold hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <CiMenuFries onClick={toggleDrawer} className="text-3xl cursor-pointer text-white" />
          </div>
        </div>

        {/* Drawer Background Overlay for Mobile */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${isDrawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={toggleDrawer}
        />

        {/* Drawer for Small Screens */}
        <div
          className={`fixed top-0 right-0 h-full w-[300px] bg-black text-white shadow-lg transform transition-transform ease-in-out duration-300 ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}
        >
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Menu</h2>
            <ul>
              <li className="py-2 flex items-center gap-2">
                <FaHome className="text-lg" />
                <Link to="/" onClick={toggleDrawer} className="transition duration-300 ease-in-out transform hover:scale-105">
                  Home
                </Link>
              </li>
              <li className="py-2 flex items-center gap-2">
                <FaBed className="text-lg" />
                <Link to="/room" onClick={toggleDrawer} className="transition duration-300 ease-in-out transform hover:scale-105">
                  Rooms
                </Link>
              </li>
              <li className="py-2 flex items-center gap-2">
                <FaInfoCircle className="text-lg" />
                <Link to="/about" onClick={toggleDrawer} className="transition duration-300 ease-in-out transform hover:scale-105">
                  About Us
                </Link>
              </li>
              <li className="py-2 flex items-center gap-2">
                <MdOutlineTravelExplore className="text-lg" />
                <Link to="/explore" onClick={toggleDrawer} className="transition duration-300 ease-in-out transform hover:scale-105">
                  Explore
                </Link>
              </li>
              <li className="py-2 flex items-center gap-2">
                <FaPhone className="text-lg" />
                <Link to="/contact" onClick={toggleDrawer} className="transition duration-300 ease-in-out transform hover:scale-105">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <button onClick={toggleDrawer} className="absolute top-4 right-4 text-white text-2xl">
            &times;
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
