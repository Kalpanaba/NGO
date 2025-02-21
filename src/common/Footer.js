import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black  text-center py-12 mt-12">
      <div className="max-w-6xl text-white mx-auto px-10 flex justify-between items-left">
        <div className="text-right">
          <h4 className="text-xl font-semibold text-white mb-4 ">QuickLinks</h4>
          <ul className="space-y-2 text-lg text-white">
            <li>
              <a href="#about" className="transition duration-300">
                AboutUs
              </a>
            </li>
            <li>
              <a href="#get-involved" className=" transition duration-300">
                GetInvolved
              </a>
            </li>
            <li>
              <a href="#support" className=" transition duration-300">
                SupportUs
              </a>
            </li>
            <li>
              <a href="#contact" className="transition duration-300">
                ContactUs
              </a>
            </li>
          </ul>
        </div>

        {/* Logo and Text Description */}
        <div className="text-right ml-4 ">
         
          <p className="text-lg text-white mt-4">
            Raju Vegesna Foundation (RVF) India is a not-for-profit organization
            founded by Mr. Raju Vegesna, a visionary entrepreneur from Andhra
            Pradesh, India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
