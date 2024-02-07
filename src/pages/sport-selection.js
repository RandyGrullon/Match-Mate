// pages/sport-selection.js
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFutbol,
  faBaseballBall,
  faTableTennis,
  faRankingStar,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const sportCardsInfo = [
    {
        id: 1,
        name: "Futbol",
        icon: faFutbol,
    },
    {
        id: 2,
        name: "Baseball",
        icon: faBaseballBall,
    },
    {
        id: 3,
        name: "Tennis",
        icon: faTableTennis,
    },
    {
        id: 4,
        name: "All",
        icon: faRankingStar
    }
];

const SportSelectionPage = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center mb-8">
        <Link href="/" passHref>
          <Image
            src="/images/match-mate-logo.svg"
            alt="MatchMate Logo"
            className="h-24 w-24"
            width={60}
            height={60}
          />
        </Link>
        <h1 className="text-3xl text-black font-bold mr-2">Sport Selection</h1>
      </div>
      <div className="text-black grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {sportCardsInfo.map((sport) => (
          <Link href={`/sport-selected/${sport.name}`} passHref key={sport.id}>
            <div className="flex flex-col items-center justify-center bg-white p-4 rounded-lg cursor-pointer transition duration-300 ease-in-out hover:shadow-lg">
              <FontAwesomeIcon icon={sport.icon} className="text-5xl mb-2" />
              <p className="text-xl font-semibold">{sport.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SportSelectionPage;
