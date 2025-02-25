

import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import contact from '../../Asserts/contact.avif'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  const data = [
    {
      id: 1,
      icon: <FaMapMarkerAlt />,
      title: 'Address',
      h1: 'D.No.10-27-2/4, FACOR Layout, Raju Vegesna Building,',
      h2: 'Kailashmetta Waltair Uplands, Visakhapatnam – 530003.',
      h3: 'Andhra Pradesh.',
    },
    {
      id: 2,
      icon: <FaPhoneAlt />,
      title: 'Phone',
      h1: 'Phone: 0891-2553267',
      h2: 'Fax: 0891-257382',
    },
    {
      id: 3,
      icon: <FaEnvelope />,
      title: 'Email',
      h1: 'rajesh@rajuvegesnaf oundation. org',
    },
    {
      id: 4,
      icon: <FaClock />,
      title: 'Office Hours',
      h1: 'Mon to Fri – 09.00am to 05.00pm',
    },
  ];

  return (


    <div>

      <div className="relative">
        <div>
        <img src={contact} alt="" className="w-full object-cover   sm:h-72 md:h-96" />
        </div>
<div className="absolute  sm:top-20 top-10  sm:left-20 left-10">
<h1 className="text-white  md:text-6xl sm:text-4xl text-2xl font-semibold">Contact</h1>
</div>

      </div>
    <div className="lg:mx-36 mt-16 md:mx-10 mx-5">
      <div className="flex flex-col md:flex-row gap-10 items-center ">
    
        <div className="w-full md:w-1/2 p-5   rounded-lg shadow-lg">
          {data.map((content) => ( 
            <div key={content.id} className="hover:drop-shadow-3xl w-full rounded-lg">
              <div className="flex gap-5 mt-5">
                <div>
                  <h1 className="text-white bg-blue-600 p-3 rounded-full text-xl">{content.icon}</h1>
                </div>

                <div className="text-black  text-md md:text-lg">
                  <h1 className="text-2xl font-semibold">{content.title}</h1>
                  <h1 className="pt-1">{content.h1}</h1>
                  <h2>{content.h2}</h2>
                  <h3>{content.h3}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

 
        <div className="w-full md:w-1/2  md:mt-10 mt-5 md:p-8 border border-gray-200 rounded-lg shadow-lg ">
          <div className=" p-5 ">
            <h2 className=" md:text-3xl text-2xl font-semibold text-start mb-6">User Information Form</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
       
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

      
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-lg font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

      
              <div>
                <label htmlFor="address" className="block text-lg font-medium text-gray-700">
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="mt-1 p-4 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

        
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full py-2 px-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;

