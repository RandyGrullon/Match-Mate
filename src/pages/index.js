import React from "react";
import SportCard from "../components/common/Cards/SportCard";
import Searchbar from "@/components/Searchbar";
import BaseballIllustration from "../../public/images/baseball.svg";
import FutbolIllustration from "../../public/images/futbol.svg";
import PadelIllustration from "../../public/images/padel.svg";
import TennisIllustration from "../../public/images/tennis.svg";
import { useAuth } from "../context/AuthContext"
import { useRouter } from "next/router";
const sportInfo = [
  {
    name: "Padel",
    image: PadelIllustration,
    quantity: 2,
    limitOfPlayers: 4,
    location: "Padel Republic",
  },
  {
    name: "Futbol",
    image: FutbolIllustration,
    quantity: 6,
    limitOfPlayers: 10,
    location: "SoccerTown",
  },
  {
    name: "Tennis",
    image: TennisIllustration,
    quantity: 2,
    limitOfPlayers: 4,
    location: "Club Naco",
  },
  {
    name: "Baseball",
    image: BaseballIllustration,
    quantity: 9,
    limitOfPlayers: 18,
    location: "Estadio Patria Mella",
  },
  {
    name: "Baseball",
    image: BaseballIllustration,
    quantity: 5,
    limitOfPlayers: 10,
    location: "Club Naco",
  },
  {
    name: "Baseball",
    image: BaseballIllustration,
    quantity: 6,
    limitOfPlayers: 12,
    location: "Club Naco",
  },
  {
    name: "Baseball",
    image: BaseballIllustration,
    quantity: 2,
    limitOfPlayers: 4,
    location: "Club Naco",
  },
  {
    name: "Baseball",
    image: BaseballIllustration,
    quantity: 2,
    limitOfPlayers: 4,
    location: "Club Naco",
  },
  {
    name: "Baseball",
    image: BaseballIllustration,
    quantity: 2,
    limitOfPlayers: 4,
    location: "Club Naco",
  },
  {
    name: "Baseball",
    image: BaseballIllustration,
    quantity: 2,
    limitOfPlayers: 4,
    location: "Club Naco",
  },
  {
    name: "Baseball",
    image: BaseballIllustration,
    quantity: 2,
    limitOfPlayers: 4,
    location: "Club Naco",
  },
  {
    name: "Baseball",
    image: BaseballIllustration,
    quantity: 2,
    limitOfPlayers: 4,
    location: "Club Naco",
  },
  {
    name: "Baseball",
    image: BaseballIllustration,
    quantity: 2,
    limitOfPlayers: 4,
    location: "Club Naco",
  },
  {
    name: "Baseball",
    image: BaseballIllustration,
    quantity: 2,
    limitOfPlayers: 4,
    location: "Club Naco",
  },
];

const HomePage = () => {
  const { user } = useAuth();
  const router = useRouter();

  // if (typeof window !== 'undefined' && !user) {
  //   router.push('/auth/login');
  // }

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-black">Welcome to </h1>
        <h1 className="text-4xl font-bold text-black">MatchMate</h1>
      </div>
      {/*  */}
      <div className="p-4">
        <Searchbar />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {sportInfo.map((sport) => (
          <SportCard
            key={sport.name}
            name={sport.name}
            image={sport.image}
            quantity={sport.quantity}
            limitOfPlayers={sport.limitOfPlayers}
            location={sport.location}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
