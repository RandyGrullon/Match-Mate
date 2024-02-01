// components/SportImageSource.jsx
import React from "react";
import Image from "next/image";

const SportImageSource = ({ sport }) => {
  // Aquí deberías tener lógica para asignar la imagen correcta
  // a cada deporte en función del nombre o ID del deporte.
  // Por ejemplo, podrías tener un directorio de imágenes
  // y seleccionar la imagen en base al nombre del deporte.
  const getImageSource = (sport) => {
    switch (sport) {
      case "Football":
        return "/images/football.jpg";
      case "Basketball":
        return "/images/basketball.jpg";
      // Añade más casos según sea necesario
      default:
        return "/images/default-sport-image.jpg";
    }
  };

  const imageSource = getImageSource(sport);

  return (
    <div>
      <Image
        src={imageSource}
        alt={sport}
        width={150}
        height={100}
        className="rounded-md"
      />
    </div>
  );
};

export default SportImageSource;
