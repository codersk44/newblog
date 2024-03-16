import React from "react";
import { NavLink } from "react-router-dom";
import { FaAppStoreIos, FaAlignJustify } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", link: "Home" },
    { path: "/blogs", link: "Blog" },
    { path: "/contact", link: "Contact" },
    { path: "/about", link: "About" },
    { path: "/services ", link: "Services" },
  ];

  return (
    <header className="bg-black">
      <nav className="px-4 py-4 max-w-7xl  mx-auto flex justify-between items-center  ">
        <a href="/" className="text-xl font-bold  text-white ">
          DESIGN <span className="text-orange-500">SK</span>{" "}
        </a>
        {/* nav */}
        <ul className="md:flex gap-12 text-lg hidden">
          {navItems.map(({ path, link }) => (
            <li className="text-white" key={path}>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                to={path}
              >
                {link}{" "}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* menu icon */}
        <div className="text-white lg:flex gap-4 items-center hidden    ">
          <a href="/" className="hover:text-orange-400">
            <FaAppStoreIos />
          </a>
          <a href="/" className="hover:text-orange-400">
            <FaFacebook />
          </a>
          <a href="/" className="hover:text-orange-400">
            <FaInstagramSquare />
          </a>
          <button className="bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in ">
            {" "}
            Log in
          </button>
        </div>
        {/* mobile menu btn */}
        <div>
          <button
            onClick={toggleMenu}
            className="cursor-pointer text-white  md:hidden "
          >
            <FaAlignJustify className="w-5 h-5" />
          </button>
        </div>
      </nav>
      {/* menuitems for mobile */}
      <div>
        <ul
          className={`md:hidden gap-12 text-lg block  space-y-4 px-4 py-6 mt-14 bg-white  ${
            isMenuOpen ? "fixed top-0 left-0 w-full transition-all" : "hidden"
          }`}
        >
          {navItems.map(({ path, link }) => (
            <li className="text-black" key={path}>
              <NavLink onClick={toggleMenu} to={path}>
                {link}{" "}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
