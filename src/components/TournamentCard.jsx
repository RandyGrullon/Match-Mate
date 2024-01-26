import React from "react";
import Link from "next/link";

const TournamentCard = ({ tournament }) => {
  const { id, name, type, sport } = tournament;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">{`${sport} Tournament`}</h2>
      <p className="text-sm text-gray-500 mb-2">{`Name: ${name}`}</p>
      <p className="text-sm text-gray-500 mb-2">{`Type: ${type}`}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">{`ID: ${id}`}</span>
        <Link
          href={`/tournaments/${id}`}
          passHref
          className="bg-blue-500 text-white px-3 py-1 rounded-full"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default TournamentCard;


