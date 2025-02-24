import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoMenuSharp } from "react-icons/io5";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 w-full z-10 flex items-center justify-between p-7 bg-white shadow-xl">
        {/* Logo with move animation */}
        <img
          src="https://rajuvegesnafoundation.org/wp-content/uploads/2019/10/raju-vegesna-new-logo.png"
          alt="Logo"
        />

        {/* Navigation links with move animation */}
        <nav className="hidden md:flex space-x-12 ">
          {" "}
          {/* Increased space between links */}
          {[
            { name: "HOME", href: "/" },
            { name: "ABOUT US", href: "/AboutUsPages" },
            { name: "EVENTS", href: "/EventsPages" },
            //   { name: "PRESS", href: "/press" },
            { name: "CONTACT US", href: "/ContactPages" },
            { name: "BLOG", href: "/BlogPages" },
            //   { name: "NEWS", href: "/news" }
          ].map((item) => (
            <a
              href={item.href}
              key={item.name}
              className="text-gray-900 font-semibold" // Increased font size
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile menu toggle button */}
        <button
          className="md:hidden text-gray-700 " // Increased icon size
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoMdClose size={35} /> : <IoMenuSharp size={35} />}
        </button>

        {/* Mobile menu */}
        {isOpen && (
          <div className="normal absolute top-24 left-0 w-full p-5 bg-white flex flex-col items-center justify-center space-y-4 md:hidden">
            {[
              { name: "HOME", href: "/" },
              { name: "ABOUT US", href: "/AboutUsPages" },
              { name: "EVENTS", href: "/EventsPages" },
              { name: "CONTACT US", href: "/ContactPages" },

              { name: "BLOG", href: "/BlogPages" },
              // { name: "NEWS", href: "/news" },
            ].map((item) => (
              <a
                href={item.href}
                key={item.name}
                className=" normal text-gray-900 lg:text-xl font-semibold hover:text-red-700"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  );
};

export default NavBar;
