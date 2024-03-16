import React from "react";
import Blogpage from "./Blogpage";

const Blog = () => {
  return (
    <div>
      <div className=" py-40 bg-black text-center text-white px-4">
        <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5  blogimg ">
          Blog Page
        </h2>
      </div>
      {/* all blogs display  */}
      <div className=' max-w-7xl mx-auto  ' >
        <Blogpage />
      </div>
    </div>
  );
};

export default Blog;
