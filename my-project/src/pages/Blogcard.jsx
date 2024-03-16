import React from "react";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

const Blogcard = ({ blogs ,currentPage,selectedCat,pagesize  }) => {
  const filteredBlogs = blogs.
  filter((blogs) => !selectedCat || blogs.category === selectedCat)
  .slice ((currentPage -1)* pagesize ,currentPage *pagesize )   ;
  console.log(filteredBlogs);

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 ">
      {filteredBlogs.map((blog) => (
        <Link key={blog.id} className="p-5 shadow-lg rounded cursor-pointer ">
          <div>
            <img src={blog.image} alt="" className="w-full" />
            <h3 className=" mt-4 mb-2 font-bold hover:text-blue-500 cursor-pointer ">
              {blog.title}
            </h3>
            <p className=" mb-2 text-gray-800 ">
              <FaUserAlt className=" inline-flex items-center mr-2  " />{" "}
              {blog.author}
            </p>
            <p>Published:{blog.published_date}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blogcard;
