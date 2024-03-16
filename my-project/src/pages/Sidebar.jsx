import React, { useEffect } from "react";
import { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [popBlog, setpopBlog] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => setpopBlog(data.slice(0, 15)));
  }, []);

  return (
    <div>
      <div>
        <h3 className="text-3xl font-semibold  px-4 "> Letest Blogs </h3>
        <div>
          {popBlog.slice(0, 5).map((blog) => (
            <div
              key={blog.id}
              className="my-5 border-b-2  border-spacing-2 px-4 "
            >
              <h4 className="font-medium mb-2">{blog.title}</h4>
              <Link className="hover:text-orange-500 inline-flex font-medium items-center py-1 ">
                Learn More <FaLongArrowAltRight className="mt-1  ml-2" />{" "}
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* populerblog */}
      <div>
        <h3 className="text-3xl font-semibold  px-4  mt-20 ">
          {" "}
          Populer Blogs{" "}
        </h3>
        <div>
          {popBlog.slice(6, 11).map((blog) => (
            <div
              key={blog.id}
              className="my-5 border-b-2  border-spacing-2 px-4 "
            >
              <h4 className="font-medium mb-2">{blog.title}</h4>
              <Link className="hover:text-orange-500 inline-flex font-medium items-center py-1 ">
                Learn More <FaLongArrowAltRight className="mt-1  ml-2" />{" "}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
