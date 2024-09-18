import React from 'react';
import kedar2 from '../assets/kedar.webp';
import bhairav from '../assets/bhairavMandir.jpg';
import vishwa from '../assets/Vishwanath.jpg';
import triyugi from '../assets/triyugi.webp';
import deoria from '../assets/vasukiTal.webp';
import gaurikund from '../assets/gaurikund1.jpeg';

import Card from '../component/Card';
import AOS from 'aos';
import kedarImg2 from '../assets/kedarnath.jpg'; // Example additional image

const Explore = () => {
  // Initialize AOS within the component
  React.useEffect(() => {
    AOS.init({ duration: 1000 }); // You can adjust the duration as needed
  }, []);

  // Adding SEO meta tags and title
  React.useEffect(() => {
    document.title = "Explore Temples in Uttarakhand - Tritham Residency | Kedarnath, Bhairavnath, Vishwanath & Triyuginarayan";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', "Explore sacred temples like Kedarnath, Bhairavnath, Vishwanath, and Triyuginarayan in Uttarakhand while staying at Tritham Residency. Discover the history, significance, and beauty of these ancient pilgrimage sites.");
  }, []);

  return (
    <>
      {/* SEO Meta Tags */}
      <title>Explore from - Tritham Residency</title>
      <meta property="og:url" content="https://shritrithamresidency.com/explore" />
      <meta name="title" content="Explore Temples in Uttarakhand - Tritham Residency | Kedarnath, Bhairavnath, Vishwanath & Triyuginarayan" />
      <meta name="description" content="Explore sacred temples like Kedarnath, Bhairavnath, Vishwanath, and Triyuginarayan in Uttarakhand while staying at Tritham Residency. Discover the history, significance, and beauty of these ancient pilgrimage sites." />
      <meta name="keywords" content="Kedarnath Temple, Bhairavnath Mandir, Vishwanath Temple, Triyuginarayan Temple, Tritham Residency, Uttarakhand Pilgrimage, Temples in India, Hotels in Uttarakhand" />
      <meta name="robots" content="index, follow" />
   

      {/* Main Section */}
      <section className="bg-gray-100">
        <div className="container mx-auto">
          {/* Hero Image with Title */}
          <div className="relative mb-12" data-aos="fade-up">
            <img
              src={kedar2}
              alt="Kedarnath Temple in Uttarakhand"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
              <h1 className="text-4xl font-bold text-white">Explore </h1>
            </div>
          </div>

          {/* Cards Section */}
          <div className="flex flex-wrap justify-center gap-6">
            <Card
              image={kedar2}
              title="Kedarnath Temple"
              shortDescription="A significant Hindu temple located in the Garhwal Himalayan range."
              fullDescription="Kedarnath Temple is one of the twelve jyotirlinga of Shiva, located near the Mandakini river in Uttarakhand. Open only between April and November, it is a major pilgrimage site in India."
              additionalImages={[kedar2, kedarImg2]}
              data-aos="fade-up"
            />
            <Card
              image={bhairav}
              title="Shri Bhairavnath Mandir"
              shortDescription="An ancient shrine dedicated to Baba Bhairavnath, offering a view of Kedarnath Temple."
              fullDescription="The Shri Bhairavnath Mandir offers a bird's eye view of Kedarnath Temple and the valley. Dedicated to Baba Bhairavnath, the Kshetrapal of Kedarnath, the shrine is visited by devotees for blessings."
              additionalImages={[]}
              data-aos="fade-up"
            />
            <Card
              image={vishwa}
              title="Shri Kashi Vishwanath"
              shortDescription="A divine experience at the place where Lord Shiva vanished."
              fullDescription="Shri Kashi Vishwanath Temple is a must-visit site where Lord Shiva is believed to have vanished. GuptKashi offers visitors a spiritual experience with all the forms of Shiva visible here."
              additionalImages={[]}
              data-aos="fade-up"
            />
            <Card
              image={triyugi}
              title="Triyuginarayan Temple"
              shortDescription="A Hindu temple dedicated to Vishnu, known for its perpetual fire."
              fullDescription="Triyuginarayan Temple is famous for its perpetual fire that has burned since the divine marriage of Lord Shiva and Parvati. This ancient temple dedicated to Vishnu is a key pilgrimage site in Uttarakhand."
              additionalImages={[]}
              data-aos="fade-up"
            />
            <Card
              image={gaurikund}
              title="Gaurikund"
              shortDescription="The main temple of Guptkashi is dedicated to Lord Shiva as Vishwanath."
              fullDescription="
The hot water spring of Gaurikund is one of the holiest sites for Hindus, who come to take a dip in it. It is believed that taking a dip in the holy water of the pond will make a person pure. Surrounded by panoramic views, Gaurikund also serves as the starting point of the famous Kedarnath temple trek. The spring lies at a height of about 6,000 ft in the Garhwal Himalayas. Devotees also visit the Gauri Devi Temple dedicated to Goddess Parvati. It is believed that this was the site where Goddess Parvati had meditated for a long time to win Lord Shiva as her husband. The area is also associated with the legend of Lord Ganesha acquiring his elephant head."
              additionalImages={[]}
              data-aos="fade-up"
            />
            <Card
              image={deoria}
              title=" Vasuki Tal "
              shortDescription="Lord Vishnu bathed in Vasuki Tal during Rakshabandhan:"
              fullDescription="According to Hindu mythology, it is believed that Lord Vishnu bathed in this lake at the auspicious Raksha Bandhan festival. Hence, it was named as Vasuki Tal.The travellers can also savour a majestic view of the Chaukhamba peaks from Vasuki Tal. The great Himalayan ranges and the scenic vista around the placid lake lure the tourists for a rendezvous. In addition, the luscious terrains around the Vasuki Tal are suitable for trekking."
              additionalImages={[]}
              data-aos="fade-up"
            />
          
          </div>
        </div>
      </section>
    </>
  );
};

export default Explore;
