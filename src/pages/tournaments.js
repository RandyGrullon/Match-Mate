// pages/tournaments.jsx
import React, { useState } from "react";
import Modal from "react-modal";
import tournamentIllustration from "../../public/images/torneo.png";
import Searchbar from "@/components/Searchbar";
import TournamentCard from "@/components/TournamentCard";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faPlus } from "@fortawesome/free-solid-svg-icons";

// Configuración de react-modal
Modal.setAppElement("#__next");

const Tournaments = () => {
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);

  const openCreateModal = () => {
    setCreateModalOpen(true);
  };

  const closeCreateModal = () => {
    setCreateModalOpen(false);
  };

  // Datos de ejemplo para los torneos
  const tournaments = [
    { id: 1, name: "Tournament A", type: "Public", sport: "Baseball"},
    { id: 2, name: "Tournament B", type: "Private", sport: "Padel"},
    // ... más torneos
  ];

  return (
    <div className="text-black min-h-screen">
      {/* Ilustración centrada */}
      <div className="flex items-center justify-center">
        <h1 className="text-3xl font-bold mr-2">Tournaments</h1>
        <FontAwesomeIcon icon={faTrophy} className="text-3xl text-orange-300" />
      </div>
      <div className="flex justify-center items-center mb-6">
        {/* burn the bg of the image */}
        <Image
          src={tournamentIllustration}
          alt="Tournament Illustration"
          width={200}
          height={200}
        />
      </div>

      {/* Título de la página */}

      {/* Componente de búsqueda y botón de creación de torneo */}
      <div className="flex items-center mb-4">
        <Searchbar />
        <button
          className="ml-4 bg-blue-600 text-white w-12 h-10 rounded-full flex items-center justify-center"
          onClick={openCreateModal}
        >
          <FontAwesomeIcon icon={faPlus} className="text-md" />
        </button>
      </div>

      {/* Sección de tarjetas de torneos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {tournaments.map((tournament) => (
          <TournamentCard key={tournament.id} tournament={tournament} />
        ))}
      </div>

      {/* Modal para la creación de torneos */}
      <Modal
        isOpen={isCreateModalOpen}
        onRequestClose={closeCreateModal}
        contentLabel="Create Tournament Modal"
      >
        <div className="text-black">
          {/* Contenido del modal para crear torneos */}
          <h2>Create Tournament</h2>
          {/* ... otros campos del formulario */}
          <button onClick={closeCreateModal}>Close Modal</button>
        </div>
      </Modal>
    </div>
  );
};

export default Tournaments;
