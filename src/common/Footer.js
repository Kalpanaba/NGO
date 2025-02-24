import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { LiaInstagram } from "react-icons/lia";
import {
  PiFacebookLogoLight,
  PiTwitterLogo,
  PiYoutubeLogo,
} from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="bg-black  text-center py-5 mt-12">
      <div className="max-w-6xl text-white mx-auto px-10 md:flex lg:flex justify-between items-left">
        <div className="text-left">
          <h4 className="text-xl font-semibold text-white mb-4 ">QuickLinks</h4>
          <ul className="space-y-2  text-white ">
            <li>
              <a href="/AboutUsPages" className="transition duration-300  ">
                About Us
              </a>
            </li>

            <li>
              <a href="/EventsPages" className="transition duration-300">
                Events
              </a>
            </li>
            <li>
              <a href="/ContactPages" className="transition duration-300">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/BlogPages " className="transition duration-300">
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div className="">
          <div className="flex gap-5 mt-10 md:mt-0 lg:mt-0">
            <a
              href="/"
              className="transition duration-300 hover:bg-gray-600 rounded-lg"
            >
              <PiFacebookLogoLight size={30} />
            </a>
            <a
              href="/"
              className="transition duration-300  hover:bg-gray-600 rounded-lg"
            >
              <LiaInstagram size={30} />
            </a>{" "}
            <a
              href="/"
              className="transition duration-300  hover:bg-gray-600 rounded-lg"
            >
              <PiYoutubeLogo size={30} />
            </a>
            <a
              href="/"
              className="transition duration-300  hover:bg-gray-600 rounded-lg"
            >
              <PiTwitterLogo size={30} />
            </a>
            <a
              href="rajesh@rajuvegesnafoundation.org"
              className="transition duration-300  hover:bg-gray-600 rounded-lg"
            >
              <AiOutlineMail size={30} />
            </a>
          </div>

          <div className="text-left mt-7">
            <h1 className="hover:text-red-500">
              Location : D.No.10-27-2/4, FACOR Layout, Raju Vegesna Building,
            </h1>
            <h2 className="hover:text-red-500">
              Kailashmetta Waltair Uplands, Visakhapatnam – 530003. Andhra
              Pradesh.
            </h2>
            <h3 className="hover:text-red-500">
              Phone Number : 0891-2553267, Fax: 0891-257382
            </h3>
            <h4 className="hover:text-red-500">
              Email : rajesh@rajuvegesnafoundation.org
            </h4>
          </div>
        </div>
      </div>
      <div className="text-white  mt-10 p-3 md:p-0 lg:p-0   ">
        <p>
          Raju Vegesna Foundation (RVF) India is a not-for-profit organization
          founded by Mr. Raju Vegesna, a visionary entrepreneur from Andhra
          Pradesh, India.
        </p>
      </div>

      <div className="mt-8 border-t pt-4">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Raju Vegesna Foundation. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
