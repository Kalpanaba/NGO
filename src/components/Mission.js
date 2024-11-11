import React from 'react';

const Mission = () => (
  <section className="p-10 md:p-16 text-center space-y-8">
    <h2 className="text-6xl md:text-8xl text-blue-700 font-bold">MISSION</h2>
    <p className="mt-6 text-orange-400 text-4xl md:text-5xl">
      To serve humanity and help create equitable societies by enabling access 
      to education, clean water, and health.
    </p>
    
    {/* Become a Volunteer Button */}
    <button className="mt-10 px-8 py-4 text-2xl font-semibold text-white bg-red-500 rounded-lg shadow-lg hover:bg-orange-600 transition duration-300 ease-in-out transform hover:scale-105">
      Become a Volunteer
    </button>
  </section>
);

export default Mission;
