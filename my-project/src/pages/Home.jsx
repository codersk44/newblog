import React from "react";
import Banner from "../assets/comp/Banner";
import Blogpage from "./Blogpage";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="max-w-7xl mx-auto ">
        <Blogpage />
      </div>
    </div>
  );
};

export default Home;
