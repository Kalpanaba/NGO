import React from 'react';
import butterflyIcon from '../Asserts/butterfly.jpg'; 

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-center py-12 mt-12">
      <div className="max-w-6xl mx-auto px-10 flex justify-between items-left">

        {/* Moving Butterfly Icon */}
        <div className="animate-bounce mr-4  ">
          <img src={butterflyIcon} alt="Butterfly Icon" className="h-12 w-12" />
        </div>

        {/* Quick Links */}
        <div className="text-right">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">QuickLinks</h4>
          <ul className="space-y-2 text-lg">
            <li>
              <a href="#about" className="text-gray-800 hover:text-blue-700 transition duration-300">
                AboutUs
              </a>
            </li>
            <li>
              <a href="#get-involved" className="text-gray-800 hover:text-blue-700 transition duration-300">
                GetInvolved
              </a> 
            </li>
            <li>
              <a href="#support" className="text-gray-800 hover:text-blue-700 transition duration-300">
                SupportUs
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-800 hover:text-blue-700 transition duration-300">
                ContactUs
              </a>
            </li>
          </ul>
        </div>

        {/* Logo and Text Description */}
        <div className="text-right ml-4">
          <img
            src="https://rajuvegesnafoundation.org/wp-content/uploads/2019/10/raju-vegesna-new-logo.png"
            alt="Logo"
            className="h-20 sm:h-24 lg:h-32"
          />
          <p className="text-lg text-gray-700 mt-4">
            Raju Vegesna Foundation (RVF) India is a not-for-profit organization founded by Mr. Raju Vegesna, a visionary entrepreneur from Andhra Pradesh, India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
