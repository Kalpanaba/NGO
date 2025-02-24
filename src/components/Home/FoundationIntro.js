import React from 'react';
import { FaHandsHelping, FaDonate, FaPhoneAlt } from 'react-icons/fa';
import ngonew from '../../Asserts/ngonew.jpg';

const FoundationIntro = () => (
  <section className=" p-5 md:px-10 lg:px-36 lg:pt-10 flex flex-col lg:flex-row items-center lg:items-stretch gap-8">
    {/* Left Section with Background Image and Text Overlay */}
    <div className="relative w-full lg:w-1/2 h-96 lg:h-auto overflow-hidden rounded-lg shadow-lg">
      <img
        src={ngonew}
        alt="Foundation Background"
        className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-8 text-white space-y-4">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
          Welcome to Our Foundation
        </h1>
        <p className="text-xl md:text-3xl font-semibold italic">Shram | Seva | Shiksha</p>
        <p className="max-w-md text-orange-200 leading-relaxed">
          The concepts of Shram, Shiksha, and Seva guide the Raju Vegesna Foundation. Shram means hard work, Shiksha is learning, and Seva represents serving selflessly.
        </p>
      </div>
    </div>

    {/* Right Section with Information Boxes */}
    <div className="flex flex-col w-full lg:w-1/2 space-y-8">
      {/* Volunteer Box */}
      <div className="flex items-center bg-white p-8 rounded-lg shadow-lg space-x-6 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
        <div className="p-4 bg-orange-500 rounded-full">
          <FaHandsHelping size={28} color="orange" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-left text-blue-900">Become a Volunteer</h2>
          <p className="text-gray-700">
            Reach out to us if you’re looking to support a cause or give back to society.
          </p>
        </div>
      </div>

      {/* Donate Box */}
      <div className="flex items-center text-left bg-white p-8 rounded-lg shadow-lg space-x-6 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
        <div className="p-4 bg-orange-500 rounded-full">
          <FaDonate size={28} color="red" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-left  text-blue-900">Donate a Scholarship</h2>
          <p className="text-gray-700">
            Here’s your chance to help the best students across communities.
          </p>
        </div>
      </div>

      {/* Contact Us Box */}
      <div className="flex items-center bg-white p-8 rounded-lg shadow-lg space-x-6 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
        <div className="p-4 bg-orange-500 rounded-full">
          <FaPhoneAlt size={28} color="blue" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-left text-blue-900">Contact Us</h2>
          <p className="text-gray-700">
            We at Raju Vegesna Foundation believe in the core values of giving and the pure joy of working selflessly for the development of communities.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default FoundationIntro;
