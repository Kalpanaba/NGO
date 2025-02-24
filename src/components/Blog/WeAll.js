import React from "react";
import ngo1 from "../../Asserts/ngo1.jpg";
import ngo2 from "../../Asserts/ngo2.jpg";
import ngo4 from "../../Asserts/ngo4.jpg";
import image4 from "../../Asserts/image4.jpg";
import image5 from "../../Asserts/image5.jpg";

const WeAll = () => {
  return (
    <>
      {/* Gallery Section */}
      <h2 className="mt-10 text-3xl md:text-3xl lg:text-4xl font-bold text-center">
        We All
      </h2>
      <div className="p-5 md:px-10 lg:px-36 lg:pt-10  grid md:grid-cols-3 gap-3">
        {/* Gallery Images */}

        <div className="md:col-span-2">
          <img className=" w-full h-80 object-cover" src={ngo1} alt="" />
        </div>

        <div className="">
          <img className="w-full h-80 object-cover" src={ngo2} alt="" />
        </div>

        <div>
          <img className="w-full h-80 object-cover" src={image4} alt="" />
        </div>
        <div>
          <img className="w-full h-80 object-cover" src={image5} alt="" />
        </div>
        <div>
          <img
            className="w-full h-80 object-cover col-span-3"
            src={ngo4}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default WeAll;
