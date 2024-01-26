import React, { useEffect, useState } from "react";
import Link from "next/link";
import SportCard from "../components/common/Cards/SportCard";
import Searchbar from "@/components/Searchbar";
import BaseballIllustration from "../../public/images/baseball.svg";
import FutbolIllustration from "../../public/images/futbol.svg";
import PadelIllustration from "../../public/images/padel.svg";
import TennisIllustration from "../../public/images/tennis.svg";
import { useAuth } from "../context/AuthContext";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useRouter } from "next/router";

const sportInfo = [
  {
    id: 1,
    name: "Padel",
    image: PadelIllustration,
    quantity: 2,
    limitOfPlayers: 4,
    location: "Padel Republic",
  },
  {
    id: 2,
    name: "Futbol",
    image: FutbolIllustration,
    quantity: 6,
    limitOfPlayers: 10,
    location: "SoccerTown",
  },
  {
    id: 3,
    name: "Tennis",
    image: TennisIllustration,
    quantity: 2,
    limitOfPlayers: 4,
    location: "Club Naco",
  },
  {
    id: 4,
    name: "Baseball",
    image: BaseballIllustration,
    quantity: 9,
    limitOfPlayers: 18,
    location: "Estadio Patria Mella",
  },
];

const HomePage = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <>
          <LoadingSpinner />
        </>
      ) : (
        <div className="min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-black">Welcome to </h1>
            <h1 className="text-4xl font-bold text-black">MatchMate</h1>
          </div>
          <div className="p-4">
            <Searchbar />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {sportInfo.map((sport) => (
              <Link
                key={sport.id}
                href={`/sports/${sport.id}`}
                passHref
              >
                  <SportCard
                    id={sport.id}
                    name={sport.name}
                    image={sport.image}
                    quantity={sport.quantity}
                    limitOfPlayers={sport.limitOfPlayers}
                    location={sport.location}
                  />
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
