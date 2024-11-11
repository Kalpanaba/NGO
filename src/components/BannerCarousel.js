import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import newngo from '../Asserts/newngo.jpg'; 
import bannerngo from '../Asserts/bannerngo.jpg';
import newcharity from '../Asserts/newcharity.jpg';

const BannerCarousel = () => {
  const images = [newngo, bannerngo, newcharity];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-180 bg-gray-300 flex items-center justify-center overflow-hidden">
      {/* Banner Image */}
      <img 
        src={images[currentIndex]}
        alt="Banner" 
        className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
      />

      {/* Donate Button */}
      <button 
        className="absolute top-4 right-6 bg-red-500 text-white font-semibold flex items-center px-7 py-5 rounded-lg shadow-md hover:bg-red-600 transition-colors"
        onClick={() => alert('Thank you for considering a donation!')}
      >
        <FaHeart className="mr-3" /> Donate Us
      </button>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-center text-3xl font-bold">
          “Your donation can bring healing and 
          <br />
          hope to those in their greatest time of need”
        </h1>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={handlePrev} 
        className="absolute left-4 bg-white p-2 rounded-full shadow-md text-2xl font-bold"
      >
        ‹
      </button>
      <button 
        onClick={handleNext} 
        className="absolute right-4 bg-white p-2 rounded-full shadow-md text-2xl font-bold"
      >
        ›
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 flex space-x-2">
        {images.map((_, index) => (
          <span 
            key={index} 
            className={`h-2 w-2 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
