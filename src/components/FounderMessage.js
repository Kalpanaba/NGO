import React from 'react';

const FounderMessage = () => (
  <section className="relative p-6 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between bg-blue-400 shadow-lg rounded-lg overflow-hidden">
    <div className="relative md:absolute md:left-4 md:top-1/2 transform md:-translate-y-1/2">
      <img
        src="https://rajuvegesnafoundation.org/wp-content/uploads/2019/07/chairman-img.jpg"
        alt="Founder"
        className="w-52 sm:w-64 md:w-80 lg:w-96 h-auto object-cover transform transition-transform duration-300 hover:scale-105 rounded-lg"
      />
    </div>

    <div className="max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl p-6 md:p-8 lg:p-10 text-white text-center md:text-left z-10 shadow-lg mt-8 md:mt-0 ml-auto">
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-black font-bold mb-6">Founder's Message</h2>
      <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
        We at Raju Vegesna Foundation believe in the core values of giving and the pure joy of working selflessly for the development of communities. For us, helping the needy and disadvantaged is not merely a corporate social responsibility but a deep-felt personal commitment to spread happiness among rural communities.
        <br /><br />
        In our own small way, we have been contributing to the betterment of society through aiding in the empowerment of women, taking care of the elderly and infirm, supporting the provision of safe drinking water, conducting health camps and awareness workshops on health issues, and promoting sports tournaments for the elderly.
        <br /><br />
        The Foundation is our humble contribution; an effort to give back to society through various initiatives while always keeping the community’s welfare on top of our mind.
      </p>
    </div>
  </section>
);

export default FounderMessage;
