import React from "react";

import image10 from "../../Asserts/image10.jpg";
import image9 from "../../Asserts/image9.jpg";
import image8 from "../../Asserts/image8.jpg";
import image2 from "../../Asserts/image2.jpg";
import image3 from "../../Asserts/image3.jpg";
import image5 from "../../Asserts/image5.jpg";

const CoreValues = () => {
  return (
    <>
      <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-center">
        OUR CORE VALUES
      </h2>

      {/* Gallery Section */}
      <div className="p-3 md:max-w-5xl lg:p-0 grid md:grid-cols-2 lg:grid-cols-3 gap-2 mx-auto lg:max-w-7xl mt-10">
        {[image10, image9, image8, image2, image3, image5].map(
          (imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={`Gallery ${index + 1}`}
              className="rounded-lg shadow-lg w-full h-64 md:h-80 object-cover"
            />
          )
        )}
      </div>
    </>
  );
};

export default CoreValues;
