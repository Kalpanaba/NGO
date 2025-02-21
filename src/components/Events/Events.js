import React from 'react'
import ngo2 from '../../Asserts/ngo2.jpg';
import image8 from '../../Asserts/image8.jpg';
import image7 from '../../Asserts/image7.jpg';
import image3 from '../../Asserts/image3.jpg';

const Events = () => {
  return (
    <>

<div className="p-8">
      <div className="w-full">
      </div>

      {/* Header */}
      <h2 className="text-4xl font-bold text-center text-blue-800 mb-10">Upcoming Events</h2>
      
      {/* Cards Section */}
      <div className="space-y-8">
        
        {/* Volunteer In-Person Card */}
        <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={ngo2} alt="Volunteer In-Person" className="w-1/2 h-full object-cover transform transition duration-500 hover:scale-105" />
          <div className="p-6 w-1/2">
            <h4 className="text-4xl font-semibold text-blue-800">Volunteer In-Person</h4>
            <p className="text-gray-700 text-4xl mt-2">Join us for in-person volunteer opportunities to make a direct impact in the community.</p>
          </div>
        </div>
        
        {/* Events Card */}
        <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={image8} alt="Events" className="w-1/2 h-full object-cover transform transition duration-500 hover:scale-105" />
          <div className="p-6 w-1/2">
            <h4 className="text-4xl font-semibold text-blue-800">Special Events</h4>
            <p className="text-gray-700 text-4xl mt-2">Engage in our special events organized to celebrate and uplift the community.</p>
          </div>
        </div>
        
        {/* Disabled Vocational Training Card */}
        <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={image7} alt="Disabled Vocational Training" className="w-1/2 h-full object-cover transform transition duration-500 hover:scale-105" />
          <div className="p-6 w-1/2">
            <h4 className="text-4xl font-semibold text-blue-800">Disabled Vocational Training</h4>
            <p className="text-gray-700 text-4xl mt-2">Training programs designed for people with disabilities to develop vocational skills.</p>
          </div>
        </div>
        
        {/* Family Gathering and Events Card */}
        <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={image3} alt="Family Gathering and Events" className="w-1/2 h-full object-cover transform transition duration-500 hover:scale-105" />
          <div className="p-6 w-1/2">
            <h4 className="text-4xl font-semibold text-blue-800">Family Gathering and Events</h4>
            <p className="text-gray-700  text-4xl mt-2">Enjoy our family gatherings and events to build strong bonds within the community.</p>
          </div>
        </div>
      </div>

      {/* Join Us Button */}
      <div className="flex justify-center mt-12 mb-16">
        <button className="bg-blue-600 text-4xl text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
          Join Us
        </button>
      </div>

      <div className="w-full">
      </div>
    </div>


    
    
    </>
  )
}

export default Events