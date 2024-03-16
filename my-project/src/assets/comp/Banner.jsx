import React from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="px-4 py-32 bg-black mx-auto ">
      <div className="text-white text-center  ">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5   ">
          Welcome To Our Blogs
        </h1>
        <p className="text-4xl lg:w-3/5 mx-auto mb-5 ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
          necessitatibus aperiam laboriosam voluptas totam quia ea beatae fuga
          animi repellat culpa rem odit, magni inventore! Enim sequi voluptates
          deleniti accusantium.
        </p>
        <Link className="hover:text-orange-500 inline-flex font-medium items-center py-1 ">
          Learn More <FaLongArrowAltRight className="mt-1  ml-2" />{" "}
        </Link>
      </div>
    </div>
  );
};

export default Banner;
