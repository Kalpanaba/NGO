import React from 'react';
import schoolbanner from '../Asserts/schoolbanner.jpg';
import image10 from '../Asserts/image10.jpg';
import image9 from '../Asserts/image9.jpg';
import image8 from '../Asserts/image8.jpg';
import image2 from '../Asserts/image2.jpg';
import image3 from '../Asserts/image3.jpg';
import image5 from '../Asserts/image5.jpg';
import Footer from '../components/Footer';
import Header from './Header';
import safedrinkingwater from '../Asserts/safedrinkingwater.jpg';
import PublicHealthImage from '../Asserts/PublicHealthImage.jpg';
import socailinitiatives from '../Asserts/socailinitiatives.jpg';
import sports from '../Asserts/sports.jpg';
import womenandelders from '../Asserts/womenandelders.jpg';
import aboutuseducation from '../Asserts/aboutuseducation.jpg';

const About = () => (
  <div className="w-full flex flex-col items-center">
    <div className="w-full">
      <Header />
    </div>

    {/* Banner Section */}
    <div
      className="w-full h-96 md:h-[30rem] lg:h-[40rem] bg-cover bg-center mb-8"
      style={{ backgroundImage: `url(${schoolbanner})` }}
    />

    {/* Main Content Section */}
    <div className="max-w-7xl w-full px-6 md:px-16 lg:px-32 py-12 flex flex-col lg:flex-row gap-12">
      <article className="text-pretty">
        <h3 className="font-semibold text-5xl md:text-6xl text-blue-800 mb-6 text-center lg:text-left">
          Empowered women and girls can lift their entire families and communities out of poverty.
        </h3>
        <p className="text-2xl md:text-3xl text-black leading-relaxed text-justify">
          We are a not-for-profit organization that builds capacity of communities to ensure empowerment for marginalized women and girls. Our sustainable and holistic interventions in Health, Livelihood, Education, and Disaster Relief & Resilience provide innovative solutions to deep-rooted development problems.
          <br /><br />
          Along with access to the international confederation of expertise, we integrate internal knowledge and a strong network of partnerships to deliver outcomes at scale to varied stakeholders.
        </p>
      </article>
    </div>

    {/* Core Values Header */}
    <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-800 my-8">OUR CORE VALUES</h2>

    {/* Gallery Section */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl w-full px-6 mb-12">
      {[image10, image9, image8, image2, image3, image5].map((imgSrc, index) => (
        <img
          key={index}
          src={imgSrc}
          alt={`Gallery ${index + 1}`}
          className="rounded-lg shadow-lg w-full h-64 md:h-80 object-cover"
        />
      ))}
    </div>

    {/* Our Focus Areas Section */}
    <div className="w-full max-w-7xl px-6 mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-800 mb-8">Our Focus Areas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { img: aboutuseducation, title: 'EDUCATION' },
          { img: PublicHealthImage, title: 'HEALTH' },
          { img: safedrinkingwater, title: 'SAFE DRINKING WATER' },
          { img: socailinitiatives, title: 'SOCIAL INITIATIVES' },
          { img: womenandelders, title: 'WOMEN & ELDERLY' },
          { img: sports, title: 'SPORTS' },
        ].map((focusArea, index) => (
          <div key={index} className="flex flex-col items-center bg-gray-100 rounded-lg p-8 shadow-lg">
            <img src={focusArea.img} alt={focusArea.title} className="w-full h-64 md:h-72 lg:h-80 object-cover rounded-lg mb-6" />
            <h4 className="text-2xl md:text-3xl font-semibold text-blue-800 text-center">{focusArea.title}</h4>
          </div>
        ))}
      </div>
    </div>

    {/* Footer */}
    <div className="w-full">
      <Footer />
    </div>
  </div>
);

export default About;
