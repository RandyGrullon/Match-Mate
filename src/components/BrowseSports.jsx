// components/BrowseSports.jsx
import React, { useState } from "react";
import SportsTag from "./SportsTag";
import SportImage from "./SportImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const BrowseSports = () => {
  const [isSearchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen((prev) => !prev);
  };

  const sportsTags = ["Tennis", "Padel", "Futbol", "Baseball"];

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Browse Sports</h1>
        <div>
          {isSearchOpen && (
            <input
              type="text"
              placeholder="Search sports..."
              className="border rounded-full border-gray-500 px-4 py-1"
            />
          )}
          <button className="pl-2" onClick={toggleSearch}>
            <FontAwesomeIcon icon={faSearch} className="" />
          </button>
        </div>
      </div>
      <div className="mt-4 flex space-x-2 overflow-x-auto">
        {sportsTags.map((tag) => (
          <SportsTag key={tag} tag={tag} />
        ))}
      </div>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 pb-10">
        {sportsTags.map((sport, index) => (
          <SportImage key={index} sport={sport} />
        ))}
      </div>
    </div>
  );
};

export default BrowseSports;
