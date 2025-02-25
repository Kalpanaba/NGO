// import React, { useState } from "react";
// import { IoMdClose } from "react-icons/io";
// import { IoMenuSharp } from "react-icons/io5";
// import logo2 from '../Asserts/nglog.png'
// import { useLocation } from 'react-router-dom';

// const NavBar = () => {


//   const [isOpen, setIsOpen] = useState(false);
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();

//   const isActive = (path) => location.pathname === path ? "text-red-500" : "";

//   return (
//     <>
//       <header className="sticky top-0 w-full z-10 flex items-center justify-between p-7 bg-white shadow-xl">
//         {/* Logo with move animation */}
      
//       <img src={logo2}alt="" className="w-24  h-20 object-cover" />

//         {/* Navigation links with move animation */}
//         <nav className="hidden md:flex space-x-12 ">
//           {" "}
//           {/* Increased space between links */}
//           {[
//             { name: "HOME", href: "/" },
//             { name: "ABOUT US", href: "/AboutUsPages" },
//             { name: "EventsPages", href: "/EventsPagesPages" },
//             //   { name: "PRESS", href: "/press" },
//             { name: "Contact", href: "/ContactPages" },
//             { name: "BLOG", href: "/BLOGPages" },
//             //   { name: "NEWS", href: "/news" }
//           ].map((item) => (
//             <a
//               href={item.href}
//               key={item.name}
//               className="text-gray-900 font-semibold text-lg" // Increased font size
//             >
//               {item.name}
//             </a>
//           ))}
//         </nav>

//         {/* Mobile menu toggle button */}
//         <button
//           className="md:hidden text-gray-700 " // Increased icon size
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <IoMdClose size={35} /> : <IoMenuSharp size={35} />}
//         </button>

//         {/* Mobile menu */}
//         {isOpen && (
//           <div className="absolute top-24 left-0 w-full  bg-white flex flex-col items-center justify-center space-y-4 md:hidden">
//             {[
//               { name: "HOME", href: "/" },
//               { name: "ABOUT US", href: "/AboutUsPages" },
//               { name: "EventsPages", href: "/EventsPagesPages" },
//               { name: "Contact", href: "/ContactPages" },

//               { name: "BLOG", href: "/BLOGPages" },
//               // { name: "NEWS", href: "/news" },
//             ].map((item) => (
//               <a
//                 href={item.href}
//                 key={item.name}
//                 className="text-gray-900 lg:text-xl font-semibold hover:text-red-700"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {item.name}
//               </a>
//             ))}
//           </div>
//         )}
//       </header>
//     </>
//   );
// };

// export default NavBar;

















import { useState } from "react";
import { MdKeyboardArrowDown, MdClose } from "react-icons/md";
import { FaGreaterThan } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { useLocation } from 'react-router-dom';
// import logo2 from '../Asserts/nglog.png'
import logo2 from '../Asserts/nglog.png'

import React from 'react'

const NavBar = () => {


  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? "text-red-500" : "";
  return (
    <header className="text-brown  w-full z-10 shadow-lg sticky top-0  bg-white px-5 lg:px-10">
      <div className="flex items-center justify-between py-4">
   
        <div className="">
          <a href="/">
            <img src={logo2} alt="images" className="w-24 h-20" />
          </a>
        </div>

        <nav className="items-center hidden lg:space-x-16  space-x-4 md:flex md:text-lg lg:text-lg font-semibold">

        <a href="/" className={`group relative w-max hover:text-red-600 ${isActive('/HomePages')} group`}>
        Home
            <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-red-600   group-hover:w-full"></span>
          </a>
     
          <a href="/EventsPages" className={`group relative w-max hover:text-red-600 ${isActive('/EventsPages')} group`}>
            Events
            <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-red-600   group-hover:w-full"></span>
          </a>

          

          <a href="/AboutUsPages" className={`group relative w-max hover:text-red-600 ${isActive('/AboutUsPages')} group`}>
        About
            <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-red-600   group-hover:w-full"></span>
          </a>
         
          <a href="/ContactPages" className={`group relative w-max hover:text-red-600 ${isActive('/ContactPages')} group`}>
            Contact
            <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-red-600    group-hover:w-full"></span>
          </a>
       
          <a href="/BlogPages" className={`group relative w-max   ${isActive('/BlogPages')} group`}>
            Blog
            <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-red-600   group-hover:w-full"></span>
          </a>

        
        </nav>


        <button onClick={() => setIsMenuOpen(true)} className="md:hidden">
          <IoMenu className="text-4xl" />
        </button>
      </div>


      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 text-black font-semibold text-xl transition-transform transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div className="absolute right-0 w-full h-50 bg-white text-center p-5 transition-transform transform shadow-lg bg-darkGrey text-tan"
          onClick={(e) => e.stopPropagation()}>

          <button onClick={() => setIsMenuOpen(false)} className="absolute text-tan focus:outline-none top-4 right-7">
            <MdClose size={30} />
          </button>

          <nav className="mt-8 space-y-5 flex flex-col items-center">
            <a href="/" className={` ${isActive('/')}`}>
              Home
            </a>
         
            <a href="/EventsPages" className={` ${isActive('/EventsPages')}`}>
              Event
            </a>

            <a href="/AboutUsPages" className={`  ${isActive('/AboutUsPages')}`}>
          About
            </a>
            <a href="/Contactpages" className={` ${isActive('/Contactpages')}`}>
              Contact
            </a>
         
            <a href="/BlogPages" className={` ${isActive('/BLOG')}`}>
              BLOG
            </a>

        
          </nav>
        </div>
      </div>
    </header>
  );
}

export default NavBar

