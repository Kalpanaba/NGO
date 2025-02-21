import React from "react";
import { FaDonate, FaLightbulb, FaHandsHelping } from "react-icons/fa";
import heart from "../../Asserts/heart.jpg";
import ngo1 from "../../Asserts/ngo1.jpg";
import ngo2 from "../../Asserts/ngo2.jpg";
import ngo4 from "../../Asserts/ngo4.jpg";
import image4 from "../../Asserts/image4.jpg";
import image5 from "../../Asserts/image5.jpg";
import image6 from "../../Asserts/image6.jpg";
import Footer from "../../common/Footer";

const Blog = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center px-6 py-8 bg-gray-100">
        <div className="w-full"></div>

        {/* Banner Section */}
        <div
          className="w-full h-96 md:h-[500px] bg-cover bg-center flex items-center justify-center text-white text-3xl font-bold"
          style={{ backgroundImage: `url(${heart})` }}
        >
          <div className="bg-black bg-opacity-50 p-8 md:p-12 lg:p-16 rounded-lg">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4">
              We Care for You
            </h1>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 lg:py-3 lg:px-8 rounded-lg">
              Tell Us More
            </button>
          </div>
        </div>

        {/* Heading and Icon Section */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center my-10">
          We Are
        </h2>
        <div className="flex flex-wrap justify-center gap-10 mb-8">
          {/* Donation Icon */}
          <div className="flex flex-col items-center">
            <div className="rounded-full p-4 md:p-6 lg:p-8 bg-red-500 text-white text-5xl md:text-6xl lg:text-7xl">
              <FaDonate />
            </div>
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mt-2">
              Give Donation
            </h3>
          </div>

          {/* Inspiration Icon */}
          <div className="flex flex-col items-center">
            <div className="rounded-full p-4 md:p-6 lg:p-8 bg-yellow-500 text-black text-5xl md:text-6xl lg:text-7xl">
              <FaLightbulb />
            </div>
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mt-2">
              Give Inspiration
            </h3>
          </div>

          {/* Volunteer Icon */}
          <div className="flex flex-col items-center">
            <div className="rounded-full p-4 md:p-6 lg:p-8 bg-green-500 text-white text-5xl md:text-6xl lg:text-7xl">
              <FaHandsHelping />
            </div>
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mt-2">
              Become Volunteer
            </h3>
          </div>
        </div>

        {/* Gallery Section */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center my-10">
          We All
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Gallery Images */}
          {[ngo1, ngo2, ngo4, image4, image5, image6].map((imgSrc, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={imgSrc}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 md:h-80 lg:h-96 object-cover"
              />
              {/* <div className="p-4 text-center">
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold"></h3>
          </div> */}
            </div>
          ))}
        </div>

        {/* Concluding Text */}
        <div className="max-w-4xl text-lg md:text-xl lg:text-2xl w-full bg-yellow-300 p-8 md:p-12 lg:p-16 rounded-lg shadow-lg mt-12 text-gray-800">
          <p className="mb-4">
            In our own small way, we have been contributing to the betterment of
            society through aiding in the empowerment of women, taking care of
            the elderly and infirm, supporting the provision of safe drinking
            water, conducting health camps and awareness workshops on health
            issues, and promoting sports tournaments for the elderly.
          </p>
          <p className="mb-4">
            The Foundation is our humble contribution; an effort to give back to
            society through various initiatives while always keeping the
            community’s welfare on top of our mind.
          </p>
          <p className="mb-4">
            I am charged with the responsibility of helping the communities in
            need as Chairman of the Foundation and feel deeply humbled by this
            opportunity to serve the differently-abled and economically
            disadvantaged. I shall strive always to do my best to fulfill this
            responsibility.
          </p>
          <p className="mb-4">
            Instead of cursing the darkness, I believe in lighting a small lamp
            to drive away the darkness from the lives of the people.
          </p>
          <p>
            The greatest scientist ever, Albert Einstein, once said: “Every day,
            I remind myself that my inner and outer life are based on the
            labours of other men, living and dead, and that I must exert myself
            in order to give in the same measure as I have received and am still
            receiving”.
          </p>
        </div>

        <div className="w-full mt-12">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Blog;
