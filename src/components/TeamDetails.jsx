import React from "react";
import Link from "next/link";

const TeamDetails = ({ teamName, members, teamId }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md mb-4">
      <h2 className="text-xl font-bold mb-4">{teamName}</h2>
      <p className="text-gray-600 mb-4">Members: {members.join(", ")}</p>
      {/* Add additional team details */}
      <Link href={`/teams/${teamId}`} className="text-blue-500 hover:underline">
        View Details
      </Link>
    </div>
  );
};

export default TeamDetails;
