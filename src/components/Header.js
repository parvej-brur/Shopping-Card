import React from "react";

const Header = () => {
  return (
    <div className="bg-gray-700 text-gray-100 flex items-center justify-between  mx-auto py-3 px-2 shadow">
      <div className="flex  items-center space-x-4  cursor-pointer">
        <h1 className="text-xl text-gray-200 border shadow-xl  px-1 rounded-lg font-bold hover:text-gray-200  hover:bg-gray-900 font-serif">
          Sikders World
        </h1>
        <h3 className="hover:text-gray-300 ">Home</h3>
        <h3 className="hover:text-gray-300 ">Features</h3>
        <h3 className="hover:text-gray-300 ">Pricing</h3>
      </div>
      <div className="space-x-1">
        <input
          className="border rounded pl-1 outline-none font-medium px-2 py-1 text-blue-800"
          type="text"
          placeholder="Search..."
        />
        <button className="border border-blue-300 px-3 rounded py-1 focus:outline-none ">
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;
