import React from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Filter = ({ isOpen, onRequestClose }) => {
  const [sportFilter, setSportFilter] = React.useState("");
  const [locationFilter, setLocationFilter] = React.useState("");
  const [visibilityFilter, setVisibilityFilter] = React.useState("");

  const handleApplyFilters = () => {
    console.log("Filtros aplicados:", {
      sport: sportFilter,
      location: locationFilter,
      visibility: visibilityFilter,
    });
    onRequestClose();
  };

  const handleResetFilters = () => {
    setSportFilter("");
    setLocationFilter("");
    setVisibilityFilter("");
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Filter Modal"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Filters</h2>
        <button onClick={onRequestClose}>
          <FontAwesomeIcon icon={faTimes} className="text-gray-600" />
        </button>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Sport
        </label>
        <select
          value={sportFilter}
          onChange={(e) => setSportFilter(e.target.value)}
          className="border-2 border-gray-300 bg-white h-10 px-3 rounded-lg text-sm text-black focus:outline-none w-full"
        >
          <option value="">Select...</option>
          {/* Agrega opciones de deportes según tus necesidades */}
          <option value="sport1">Sport 1</option>
          <option value="sport2">Sport 2</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Location
        </label>
        <select
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          className="border-2 border-gray-300 bg-white h-10 px-3 rounded-lg text-sm text-black focus:outline-none w-full"
        >
          <option value="">Select...</option>
          {/* Agrega opciones de ubicación según tus necesidades */}
          <option value="location1">Location 1</option>
          <option value="location2">Location 2</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Visibility
        </label>
        <select
          value={visibilityFilter}
          onChange={(e) => setVisibilityFilter(e.target.value)}
          className="border-2 border-gray-300 bg-white h-10 px-3 rounded-lg text-sm text-black focus:outline-none w-full"
        >
          <option value="">Select...</option>
          <option value="public">Public</option>
          <option value="private">Private</option>
        </select>
      </div>

      <div className="flex justify-end mt-4">
        <button
          onClick={handleResetFilters}
          className="text-sm text-gray-600 mr-4"
        >
          Reset
        </button>
        <button
          onClick={handleApplyFilters}
          className="text-sm text-white bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg"
        >
          Apply Filters
        </button>
      </div>
    </Modal>
  );
};

export default Filter;
