import React, { useEffect, useState } from 'react';
import image1 from '../Asserts/image1.jpeg';
import image2 from '../Asserts/image2.jpg';
import image3 from '../Asserts/image3.jpg';
import image4 from '../Asserts/image4.jpg';
import image5 from '../Asserts/image5.jpg';
import image6 from '../Asserts/image6.jpg';
import image7 from '../Asserts/image7.jpg';
import image8 from '../Asserts/image8.jpg';
import image9 from '../Asserts/image9.jpg';
import 'animate.css';

const images = [
  { id: 1, src: image1 },
  { id: 2, src: image2 },
  { id: 3, src: image3 },
  { id: 4, src: image4 },
  { id: 5, src: image5 },
  { id: 6, src: image6 },
  { id: 7, src: image7 },
  { id: 8, src: image8 },
  { id: 9, src: image9 },
];

const ImageGallery = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 300); // Adding a slight delay for the effect to kick in
  }, []);

  return (
    <div className="p-8">
      {/* Gallery Title */}
      <h2 className="text-blue-700 text-5xl font-semibold text-center mb-8 font-['Roboto']">
        Our Gallery
      </h2>

      {/* Image Grid */}
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-700 ${
              loaded
                ? index % 2 === 0
                  ? 'animate__animated animate__fadeInLeft'  // Left-to-right for even indexes
                  : 'animate__animated animate__fadeInRight' // Right-to-left for odd indexes
                : 'opacity-0'
            }`}
            style={{
              animationDelay: `${index * 0.2}s`, // Stagger the animations
            }}
          >
            <img
              src={image.src}
              alt={` ${image.id}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
