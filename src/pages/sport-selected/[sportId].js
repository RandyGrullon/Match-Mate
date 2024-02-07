// pages/sport-selected.js
import LoadingSpinner from "@/components/LoadingSpinner";
import Searchbar from "@/components/Searchbar";
import { useAuth } from "@/context/AuthContext";
import SportCard from "@/components/common/Cards/SportCard";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Pagination from "@/components/Pagination"; // Ruta al componente Pagination
import { sportInfo } from "../../../public/data/sportInfo";

const SportSelected = () => {
  const { user } = useAuth();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedSportInfo, setSelectedSportInfo] = useState([]);
  const ITEMS_PER_PAGE = 5; // Cantidad de elementos por página

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const sportName = router.query.sportId;

    if (sportName) {
      if (sportName === "All") {
        setSelectedSportInfo(sportInfo);
      } else {
        const filteredSportInfo = sportInfo.filter(
          (sport) => sport.name === sportName
        );
        setSelectedSportInfo(filteredSportInfo);
      }
    }
  }, [router.query]);

  // Función para cambiar de página
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Calcula los elementos que se mostrarán en la página actual
  const filteredSportInfo = selectedSportInfo.slice(
    currentPage * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="min-h-screen">
          <div className="text-center text-4xl font-bold text-black">
            <h1>Welcome to</h1>
            <h1>MatchMate</h1>
          </div>
          <div className="p-4">
            <Searchbar />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 text-black">
            {filteredSportInfo.map((sport) => (
              <SportCard
                key={sport.id}
                id={sport.id}
                name={sport.name}
                image={sport.image}
                quantity={sport.quantity}
                limitOfPlayers={sport.limitOfPlayers}
                location={sport.location}
              />
            ))}
          </div>
          <div className="flex  justify-center mt-4 text-black ">
            <Pagination
              pageCount={Math.ceil(selectedSportInfo.length / ITEMS_PER_PAGE)}
              onPageChange={handlePageChange}
              initialPage={currentPage}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SportSelected;
