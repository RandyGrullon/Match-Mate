// components/BrowseSports.jsx
import React, { useState } from "react";
import SportsTag from "./SportsTag"; // Crea este componente si no existe
import SportImage from "./SportImage"; // Crea este componente si no existe

const BrowseSports = () => {
  const [isSearchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen((prev) => !prev);
  };

  // Mock data de deportes
  const sportsTags = [
    "All",
    "Football",
    "Basketball",
    "Tennis",
    "Padel",
    "Futbol",
    "Baseball",
    // Agrega más deportes según sea necesario
  ];

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Browse Sports</h1>
        <div className="relative">
          <button className="text-blue-500" onClick={toggleSearch}>
            🔍
          </button>
          {isSearchOpen && (
            <input
              type="text"
              placeholder="Search sports..."
              className="border p-1 absolute top-8 right-0"
            />
          )}
        </div>
      </div>
      <div className="mt-4 flex space-x-2 overflow-x-auto">
        {sportsTags.map((tag) => (
          <SportsTag key={tag} tag={tag} />
        ))}
      </div>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Aquí puedes ajustar el número de columnas según tu diseño */}
        {/* Renderiza SportImage para cada deporte */}
        {sportsTags.map((sport, index) => (
          <SportImage key={index} sport={sport} />
        ))}
      </div>
    </div>
  );
};

export default BrowseSports;
