import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between p-7 bg-gray-300 shadow-md">
      {/* Logo with move animation */}
      <img 
        src="https://rajuvegesnafoundation.org/wp-content/uploads/2019/10/raju-vegesna-new-logo.png"
        alt="Logo"
        className="h-12 sm:h-14 animate-move-logo" // Increased logo size
      />
      
      {/* Navigation links with move animation */}
      <nav className="hidden md:flex space-x-12 animate-move-text"> {/* Increased space between links */}
        {[ 
          { name: "HOME", href: "/" },
          { name: "ABOUT US", href: "/about" },
          { name: "EVENTS", href: "/events" },
        //   { name: "PRESS", href: "/press" },
          { name: "CONTACT US", href: "/contact" },
          { name: "BLOG", href: "/blog" },
        //   { name: "NEWS", href: "/news" }
        ].map((item) => (
          <a 
            href={item.href}
            key={item.name}
            className="text-gray-900 font-semibold text-lg hover:text-blue-600"  // Increased font size
          >
            {item.name}
          </a>
        ))}
      </nav>
      
      {/* Mobile menu toggle button */}
      <button 
        className="md:hidden text-gray-700 text-3xl" // Increased icon size
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✖️' : '☰'}
      </button>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center space-y-4 md:hidden">
          {[ 
            { name: "HOME", href: "/" },
            { name: "ABOUT US", href: "/about" },
            { name: "FOCUS", href: "/focus" },
            { name: "PRESS", href: "/press" },
            { name: "CONTACT US", href: "/contact" },
            { name: "BLOG", href: "/blog" },
            { name: "NEWS", href: "/news" }
          ].map((item) => (
            <a 
              href={item.href}
              key={item.name}
              className="text-gray-900 text-2xl font-semibold hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
