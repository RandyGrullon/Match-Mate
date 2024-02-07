// components/SportImage.jsx
import React from "react";
import SportImageSource from "./SportImageSource";

const SportImage = ({ sport }) => {
  return (
    <div className="border border-gray-300 p-4 rounded-md">
      <SportImageSource sport={sport} />
    </div>
  );
};

export default SportImage;