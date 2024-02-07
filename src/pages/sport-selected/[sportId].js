// pages/sport-selected.js
import LoadingSpinner from "@/components/LoadingSpinner";
import Searchbar from "@/components/Searchbar";
import { useAuth } from "@/context/AuthContext";
import SportCard from "@/components/common/Cards/SportCard";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { sportInfo } from "../../../public/data/sportInfo";

const SportSelected = () => {
  const { user } = useAuth();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [selectedSportInfo, setSelectedSportInfo] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const sportName = router.query.sportId;

    // Filtrar los datos del deporte seleccionado
    if (sportName) {
      if (sportName === "All") {
        // Si se selecciona "All", mostrar todos los deportes
        setSelectedSportInfo(sportInfo);
      } else {
        // De lo contrario, filtrar por deporte seleccionado
        const filteredSportInfo = sportInfo.filter(
          (sport) => sport.name === sportName
        );
        setSelectedSportInfo(filteredSportInfo);
      }
    }
  }, [router.query]);

  return (
    <>
      {isLoading ? (
        <>
          <LoadingSpinner />
        </>
      ) : (
        <div className="min-h-screen">
          <div className="text-center text-4xl font-bold text-black">
            <h1 className="">Welcome to </h1>
            <h1 className="">MatchMate</h1>
          </div>
          <div className="p-4">
            <Searchbar />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 text-black">
            {selectedSportInfo.map((sport) => (
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
        </div>
      )}
    </>
  );
};

export default SportSelected;
