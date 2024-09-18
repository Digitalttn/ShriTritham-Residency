import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 

import roomHero from '../assets/heroImg2.jpeg'; 
import room2 from '../assets/room1.jpeg';
import room3 from '../assets/room3.jpeg';
import room4 from '../assets/room4.jpeg';
import room5 from '../assets/room5.jpeg';
import res1 from '../assets/res2.jpeg';
import res2 from '../assets/restaurent.jpeg';



// import Modal from './Modal'; 

const Room = [
  {
    name: 'Executive Room',
    category: 'Executive Room',
    img: [
     room4,
     room2
    ],
  
  },
  {
    name: 'Family Suite Room',
    category: 'Family Suite Room',
    img: [
      room2,
      room3,
      room5,
    ],
   
  },
  {
    name: 'Restaurant',
    category: 'Restaurant',
    img: [
     res1,
     res2
    ],
   
  },
 ,
];

const RoomPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [date, setDate] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleCheckAvailability = () => {
    console.log('Checking availability for date:', date);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const filteredRooms = Room.filter((room) =>
    selectedCategory ? room.category === selectedCategory : true
  );

  return (
    <>
    <Helmet>
      <title>Luxury Rooms  - phata,Kedarnath Accommodation</title>
      <meta property="og:url" content="https://shritrithamresidency.com/room" />
      <meta name="description" content="Discover the luxury and comfort of Shri Trihtam residency Rooms in Phata, including executive and family suite rooms with modern amenities and services." />
      <meta name="keywords" content="Shri Trihtam Residency,phata,guptkashi, Kedarnath, Executive Room, Family Suite Room, Accommodation, Restaurant, Luxury Rooms, Hotel in Kedarnath" />
      <meta name="robots" content="index, follow" />
    </Helmet>

    <div>
      <section>
        <div className="relative w-full h-96">
          <img src={roomHero} alt="Luxury Accommodation in Kedarnath" className="w-full h-full object-cover filter brightness-50" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10">
            <h1 className="text-white text-xl lg:text-5xl font-extrabold tracking-wider shadow-lg" data-aos="fade-up">
              Accommodation In Shri Tritham
            </h1>
            <p className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white text-lg px-10 py-2 rounded">
              Room Details
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row gap-6">
        <article className="w-full h-[50%] md:w-1/3 p-4 bg-white border border-gray-200 rounded-lg shadow-lg" data-aos="fade-right">
          <h2 className='text-black font-bold text-2xl mb-5'>Shri Tritham Residency Rooms</h2>
          <hr className='bg-black'/>
          <h1 className="text-2xl font-semibold mb-4">Room Type</h1>
          <ul>
            {['Executive Room', 'Family Suite Room','Restaurant', ].map((category) => (
              <li key={category} className="my-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    value={category}
                    checked={selectedCategory === category}
                    onChange={() => handleCategoryChange(category)}
                    className="mr-2"
                  />
                  {category}
                </label>
              </li>
            ))}
          </ul>
          <div>
            <hr className='bg-black'/>
            <h1 className="text-2xl font-semibold text-black">Rules & Regulations</h1>
            <ul className="list-disc list-inside mt-4 text-gray-700">
              <li>No smoking inside the room</li>
              <li>Check-in: After 02:00pm</li>
              <li>Checkout: Before 11:00am</li>
              <li>No Pets</li>
              <li>Identification document is a must for hotel registration.</li>
            </ul>
          </div>
        </article>

        <article className="w-full md:w-2/3 p-4 bg-white border border-gray-200 rounded-lg shadow-lg" data-aos="fade-left">
          {filteredRooms.map((room, index) => (
            <section key={index} className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">{room.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {room.img.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={image}
                    alt={`${room.name} - Luxury Accommodation in Kedarnath`}
                    className="w-full h-64 object-cover rounded-lg cursor-pointer transition-transform transform hover:scale-105"
                    onClick={() => handleImageClick(image)}
                    data-aos="zoom-in"
                  />
                ))}
              </div>
            </section>
          ))}
        </article>
      </section>
    </div>
  </>
  );
};




export default RoomPage