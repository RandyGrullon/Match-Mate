// components/Notificaciones.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const Notificaciones = ({ count }) => {
  return ( 
    <div className="mr-4 relative inline-block">
      {/* Icono de campana para notificaciones */}
      <FontAwesomeIcon icon={faBell} size="lg" className="text-black" />

      {/* Número de notificaciones sin leer */}
      {count > 0 && (
        <span className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-red-500 text-white px-1 py-0.7 rounded-full text-xs">
          {count}
        </span>
      )}
    </div>
  );
};

export default Notificaciones;
