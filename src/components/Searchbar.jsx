import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faFilter } from "@fortawesome/free-solid-svg-icons";
import Filter from "./Filter";

const Searchbar = () => {
  const [filterModalIsOpen, setFilterModalIsOpen] = useState(false);

  const openFilterModal = () => {
    setFilterModalIsOpen(true);
  };

  const closeFilterModal = () => {
    setFilterModalIsOpen(false);
  };

  return (
    <div className="pt-2  mx-auto text-gray-600 lg:w-[800px] w-full">
      <div className="flex items-center">
        <div className="border-2 border-gray-300 bg-white h-10   w-full  rounded-lg text-sm flex justify-between">
        <div>
        <button className="m-2 focus:text-red-500 text-black" onClick={openFilterModal}>
            <FontAwesomeIcon icon={faFilter} className="" />
          </button>
          <input
            className=""
            type="search"
            name="search"
            placeholder="Search"
          />
        </div>
          <button type="submit" className="m-2">
            <FontAwesomeIcon
              icon={faSearch}
              className="text-gray-600 focus:text-red-500 h-4 w-4 fill-current"
            />
          </button>
        </div>
      </div>

      <Filter isOpen={filterModalIsOpen} onRequestClose={closeFilterModal} />
    </div>
  );
};

export default Searchbar;
