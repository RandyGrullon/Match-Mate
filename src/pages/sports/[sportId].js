import { useRouter } from "next/router";
import Image from "next/image";
import LeaderboardTable from "@/components/LeaderboardTable";
import Modal from "react-modal"; // Importar la biblioteca react-modal
import { useState } from "react";

const sportInfo = [
  {
    id: 1,
    name: "Padel",
    illustration: "/images/padel.png",
    quantity: 2,
    limitOfPlayers: 4,
    location: "Padel Republic",
  },
  {
    id: 2,
    name: "Futbol",
    illustration: "/images/futbol.png",
    quantity: 6,
    limitOfPlayers: 10,
    location: "SoccerTown",
  },
  {
    id: 3,
    name: "Tennis",
    illustration: "/images/tennis.png",
    quantity: 2,
    limitOfPlayers: 4,
    location: "Club Naco",
  },
  {
    id: 4,
    name: "Baseball",
    illustration: "/images/baseball.png",
    quantity: 9,
    limitOfPlayers: 18,
    location: "Estadio Patria Mella",
  },
];

const data = [
  { playerId: 1, playerName: "Player 1", score: 100 },
  { playerId: 2, playerName: "Player 2", score: 90 },
  // ... más datos
];

Modal.setAppElement("#__next"); // Necesario para que react-modal funcione correctamente con Next.js

const SportPage = () => {
  const router = useRouter();
  const { sportId } = router.query;
  const sport = sportInfo.find((s) => s.id === Number(sportId));

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleJoinGame = () => {
    openModal();
  };

  return (
    <div className="p-4 text-black">
      {sport ? (
        <>
          <div className="flex items-center mb-4 text-black">
            <Image
              src={sport.illustration}
              alt={sport.name}
              width={100}
              height={100}
            />
          </div>

          <div className="flex items-center mb-4">
            <div className="flex items-center gap-4">
              <span className="text-xl font-bold">{sport.name}</span>
              <span className="text-gray-500">{`${sport.quantity}/${sport.limitOfPlayers} jugadores`}</span>
              <span className="text-gray-500">{sport.location}</span>
              <button
                onClick={handleJoinGame}
                className="bg-blue-500 text-white px-4 py-2 rounded-full"
              >
                Unirse al juego
              </button>
            </div>
          </div>

          <LeaderboardTable
            columns={["Rank", "Player Name", "Score"]}
            data={data}
          />

          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Confirmación"
          >
            {/* confirmacion */}
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-2xl font-bold">Confirmación</h2>
              <p>¿Estás seguro que quieres unirte al juego?</p>
              <div className="flex gap-4">
                <button
                  onClick={closeModal}
                  className="bg-red-500 text-white px-4 py-2 rounded-full"
                >
                  Cancelar
                </button>
                <button
                  onClick={closeModal}
                  className="bg-blue-500 text-white px-4 py-2 rounded-full"
                >
                  Confirmar
                </button>
              </div>
            </div>
          </Modal>
        </>
      ) : (
        <div className="flex justify-center text-black">
          <p>Deporte no encontrado</p>
        </div>
      )}
    </div>
  );
};

export default SportPage;
