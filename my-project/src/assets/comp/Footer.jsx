import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-gray-900">
      <div className=" px-4 pt-16 mx-auto sm:max-w-xl md :max-w-full  lg:max-w-screen-xl md:px-24 lg:px-4 ">
        <div className="grid mb-8 lg:grid-cols-6  ">
          <div className="grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4">
            {/* ca-1 */}
            <div className="">
              <p className="font-medium tracking-wide text-gray-200">
                Category
              </p>
              <ul>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 transition-colors duration-300 hover:text-orange-500"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 transition-colors duration-300 hover:text-orange-500"
                  >
                    World
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 transition-colors duration-300 hover:text-orange-500"
                  >
                    USA
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 transition-colors duration-300 hover:text-orange-500"
                  >
                    RUSSIA
                  </a>
                </li>
              </ul>
            </div>
            {/* ct2 */}
            <div className="">
              <p className="font-medium tracking-wide text-gray-200">OS</p>
              <ul>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 transition-colors duration-300 hover:text-orange-500"
                  >
                    MACOS
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 transition-colors duration-300 hover:text-orange-500"
                  >
                    ANDROID
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 transition-colors duration-300 hover:text-orange-500"
                  >
                    APPLE
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 transition-colors duration-300 hover:text-orange-500"
                  >
                    IOS
                  </a>
                </li>
              </ul>
            </div>
            {/* ca3 */}
            <div className="">
              <p className="font-medium tracking-wide text-gray-200">TECH</p>
              <ul>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 transition-colors duration-300 hover:text-orange-500"
                  >
                    INTERN
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 transition-colors duration-300 hover:text-orange-500"
                  >
                    FRONTEND
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 transition-colors duration-300 hover:text-orange-500"
                  >
                    REACT
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 transition-colors duration-300 hover:text-orange-500"
                  >
                    JS
                  </a>
                </li>
              </ul>
            </div>
            {/* ca4 */}
            <div className="">
              <p className="font-medium tracking-wide text-gray-200">SOCIAL</p>
              <ul>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 transition-colors duration-300 hover:text-orange-500"
                  >
                    INSTA
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 transition-colors duration-300 hover:text-orange-500"
                  >
                    FACEBOOK
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 transition-colors duration-300 hover:text-orange-500"
                  >
                    WHATSAPP
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 transition-colors duration-300 hover:text-orange-500"
                  >
                    API
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* sub */}

          <div className="md:max-w-md lg: col-span-2 lg:mt-0 mt-5">
            <p className="font-medium tracking-wide text-gray-200">
              Subscribe For Update
            </p>
            <form className="mt-4 flex flex-col md:flex-row ">
              <input
                type="email"
                name="email"
                id="email"
                className="flex-grow w-full h-12 px-4  mb-3 transition duration-200 bg-white  border border-gray-300 rounded shadow-sm aspect-auto md:mr-2 md:mb-0 focus:border-purple-500 focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide 
                text-white transition duration-200 rounded shadow-md  hover:bg-orange-600 focus:outline-none border "
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-400 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
              explicabo dolorem commodi molestiae expedita temporibus, alias
              ducimus, illo suscipit vero dolor! Tenetur?
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row ">
          <p className="text-sm text-gray-400">
            Copyrights 2023 | All right reserved.{" "}
            <FaCopyright className=" inline-flex m-2 border-none outline-none" />
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href=""
              className="text-gray-500 transition-all duration-300 hover:text-orange-500"
            >
              <FaTwitter className="h-6 w-6" />
            </a>
            <a
              href=""
              className="text-gray-500 transition-all duration-300 hover:text-orange-500"
            >
              <FaSquareInstagram className="h-6 w-6" />
            </a>
            <a
              href=""
              className="text-gray-500 transition-all duration-300 hover:text-orange-500"
            >
              <FaFacebook className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
