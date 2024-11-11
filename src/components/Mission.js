import React from 'react';

const Mission = () => (
  <section className="p-8 md:p-16 text-center space-y-6">
    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-blue-700">MISSION</h2>
    <p className="text-lg md:text-2xl lg:text-3xl text-orange-400 max-w-2xl mx-auto">
      To serve humanity and help create equitable societies by enabling access to education, clean water, and health.
    </p>
    <button className="mt-8 px-6 py-3 text-lg md:text-xl font-semibold text-white bg-red-500 rounded-lg shadow-lg hover:bg-orange-600 transition-transform duration-300 transform hover:scale-105">
      Become a Volunteer
    </button>
  </section>
);

export default Mission;
