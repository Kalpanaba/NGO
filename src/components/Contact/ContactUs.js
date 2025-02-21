import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';


const ContactUs = () => {
  return (
    <>

<div className="w-full flex flex-col items-center bg-gray-100">
    <div className="w-full">
    </div>
    
    <div className="w-full max-w-10xl bg-gray-200 rounded-lg shadow-lg px-6 py-10 md:px-10 lg:px-20 lg:py-20 mb-8">
      <h2 className="text-3xl font-bold text-blue-800 text-center mb-6">Contact Us</h2>
      
      {/* Horizontal contact info section */}
      <div className="flex flex-col items-center gap-8 md:flex-row md:justify-around">
        <div className="flex flex-col items-center text-center">
          <FaMapMarkerAlt className="text-blue-800 text-3xl mb-2" />
          <h3 className="text-2xl font-semibold">Address</h3>
          <p className="text-lg text-black">
            D.No.10-27-2/4, FACOR Layout, Raju Vegesna Building,<br />
            Kailashmetta Waltair Uplands, Visakhapatnam – 530003.<br />
            Andhra Pradesh.
          </p>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <FaPhoneAlt className="text-blue-800 text-3xl mb-2" />
          <h3 className="text-2xl font-semibold">Phone</h3>
          <p className="text-lg text-black">Phone: 0891-2553267, Fax: 0891-257382</p>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <FaEnvelope className="text-blue-800 text-3xl mb-2" />
          <h3 className="text-2xl font-semibold">Email</h3>
          <p className="text-lg text-black">E-mail: rajesh@rajuvegesnafoundation.org</p>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <FaClock className="text-blue-800 text-3xl mb-2" />
          <h3 className="text-2xl font-semibold">Office Hours</h3>
          <p className="text-lg text-black">Mon to Fri – 09.00am to 05.00pm</p>
        </div>
      </div>
    </div>
    
    {/* Google Map with full-width */}
    <div className="w-full max-w-6xl rounded-lg overflow-hidden shadow-lg mb-8 px-4 md:px-0">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5105315569053!2d83.31571841536894!3d17.68681598788779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395c4d9a4cf7ff%3A0xb7b6333d1abf78a!2sD.No.10-27-2%2F4%2C%20FACOR%20Layout%2C%20Raju%20Vegesna%20Building%2C%20Kailashmetta%20Waltair%20Uplands%2C%20Visakhapatnam%20%E2%80%93%20530003.%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1630222836174!5m2!1sen!2sin"
        width="100%"
        height="500"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    </div>

    {/* Larger Footer */}
    <div className="w-full py-10 text-white">
    </div>
  </div>
    
    
    
    
    </>
  )
}

export default ContactUs