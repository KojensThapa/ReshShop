import React, { useState } from "react";
import { HiCursorClick } from "react-icons/hi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

const SearchBar = () => {
  const [searchTearm, setSearchTearm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search term:", searchTearm);
    setIsOpen(false)
  }
  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-300 ${
        isOpen
          ? "absolute p-0 top-0 left-0 w-full bg-white h-24 z-50"
          : "w-auto"
      }`}
    >
      {isOpen ? (
        <form onSubmit={handleSearch} className="relative w-full flex items-center justify-center">
          <div className="relative md:w-1/2 sm:w-full">
            <input
              type="text"
              placeholder="Search"
              value={searchTearm}
              onChange={(e) => setSearchTearm(e.target.value)}
              className="bg-gray-100 px-4 py-2 pl-12 pr-2 rounded-lg focus:outline-none w-full placeholder:text-gray-700"
            ></input>

            {/* Search Icons */}
            <button className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-700 text-gray-800">
              <HiMagnifyingGlass className="h-6 w-6" />
            </button>

            <button
            className=" absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
            onClick={handleSearchToggle}
          >
            <RxCross2 className="w-6 h-6 font-bold" />
          </button>
          </div>

          {/* close button */}
          
        </form>
      ) : (
        <button onClick={handleSearchToggle}>
          <HiMagnifyingGlass className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
