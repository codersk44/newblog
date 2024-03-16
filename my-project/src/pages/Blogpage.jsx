import React, { useEffect, useState } from "react";
import Blogcard from "./Blogcard";
import Pagination from "./Pagination";
import Catselection from "../Catselection";
import Sidebar from "./Sidebar";

const Blogpage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pagesize = 12;
  const [selectedCat, setSelectedCat] = useState(null);
  const [activeCat, setActiveCat] = useState();
  useEffect(() => {
    async function fetchBlogs() {
      let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pagesize} `;
      //filter cat
      if (selectedCat) {
        url += `&category=${selectedCat}`;
      }

      const response = await fetch(url);
      const data = await response.json();
      setBlogs(data);
    }
    fetchBlogs();
  }, [currentPage, pagesize, selectedCat]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleCategoryChange = (category) => {
    setSelectedCat(category);
    setCurrentPage(1);
    setActiveCat(category);
  };

  console.log(blogs);
  return (
    <div>
      {/* category */}
      <div>
        <Catselection
          onSelectCat={handleCategoryChange}
          selectedCat={selectedCat}
          activeCat={activeCat}
        />
      </div>
      {/* blogcard */}
      <div className=" flex flex-col lg:flex-row gap-12 ">
        <Blogcard
          blogs={blogs}
          currentPage={currentPage}
          selectedCat={selectedCat}
          pagesize={pagesize}
        />

        {/* sidebar */}

        <div>
          <Sidebar />
        </div>
      </div>

      {/* pagination */}
      <div>
        <Pagination
          onPageChange={handlePageChange}
          currentPage={currentPage}
          blogs={blogs}
          pagesize={pagesize}
        />{" "}
      </div>
    </div>
  );
};

export default Blogpage;
