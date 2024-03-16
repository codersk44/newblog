import React from "react";
import "./App.css";

const Catselection = ({ onSelectCat, activeCat }) => {
  const categories = ["Startups", "Security", "AI", "Apps", "Tech", "Gadgets"];
  return (
    <div className=" px-4 mb-8 lg:space-x-16 flex flex-wrap items-center border-b-2 py-5 text-gray-500 font-bold ">
      <button
        onClick={() => onSelectCat(null)}
        className={`lg:ml-12   $(activeCat  ? "" :"active-button" )`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          onClick={() => onSelectCat(category)}
          className={`mr-2 space-x-16 ${
            activeCat === category ? "active-button" : ""
          }`}
          key={category}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Catselection;
