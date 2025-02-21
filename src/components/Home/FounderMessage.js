import React from "react";

const FounderMessage = () => (
  <section className=" p-3 md:p-12 flex flex-col md:space-x-10 md:flex-row items-center rounded-lg overflow-hidden">
    <div className="relative mb-8 md:mb-0 md:w-1/3 flex-shrink-0 md:mr-8">
      <img
        src="https://rajuvegesnafoundation.org/wp-content/uploads/2019/07/chairman-img.jpg"
        alt="Founder"
        className="w-52 sm:w-64 md:w-full h-auto object-cover rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
      />
    </div>
    <div className="md:w-2/3 md:text-left">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-black">
        Founder's Message
      </h2>
      <p className=" text-lg leading-relaxed">
        We at Raju Vegesna Foundation believe in the core values of giving and
        the pure joy of working selflessly for the development of communities.
        For us, helping the needy and disadvantaged is not merely a corporate
        social responsibility but a deep-felt personal commitment to spread
        happiness among rural communities.
        <br />
        <br />
        In our own small way, we have been contributing to the betterment of
        society through aiding in the empowerment of women, taking care of the
        elderly and infirm, supporting the provision of safe drinking water,
        conducting health camps and awareness workshops on health issues, and
        promoting sports tournaments for the elderly.
        <br />
        <br />
        The Foundation is our humble contribution; an effort to give back to
        society through various initiatives while always keeping the community’s
        welfare on top of our mind.
      </p>
    </div>
  </section>
);

export default FounderMessage;
