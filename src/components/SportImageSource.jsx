// components/SportImageSource.jsx
import React from "react";
import Image from "next/image";
import futbolImage from "../../public/images/futbol.png";
import BaseballImage from "../../public/images/baseball.png";
import padelImage from "../../public/images/padel.png";
import tennisImage from "../../public/images/tennis.png";

const SportImageSource = ({ sport }) => {

  const getRandomHeight = () => {
    return Math.floor(Math.random() * (400 - 200) + 200); 
  };

  const getHeight = getRandomHeight();

  const getImageSource = (sport) => {
    switch (sport) {
      case "Futbol":
        return futbolImage;
      case "Baseball":
        return BaseballImage;
      case "Padel":
        return padelImage;
        case "Tennis":
        return tennisImage;
      default:
        return "/images/padel.png";
    }
  };

  const imageSource = getImageSource(sport);

  return (
    <div>
      <Image
        src={imageSource}
        alt={sport}
        width={200}
        height={getHeight}
        className="rounded-md"
      />
    </div>
  );
};

export default SportImageSource;
