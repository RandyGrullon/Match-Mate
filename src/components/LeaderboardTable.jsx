import React from 'react';
import { useRouter } from 'next/router';

const LeaderboardTable = ({ data }) => {
  const router = useRouter();

  const handlePlayerClick = (playerId) => {
    router.push(`/profile/${playerId}`);
  };

  return (
    <div className="max-w-screen-md mx-auto mt-8">
      <table className="w-full border rounded-lg overflow-hidden">
        <thead className="bg-black text-white">
          <tr>
            <th className="py-2 px-4">Rank</th>
            <th className="py-2 px-4">Player Name</th>
            <th className="py-2 px-4">Score</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className="transition-all hover:bg-gray-100 cursor-pointer"
              onClick={() => handlePlayerClick(row.playerId)}
            >
              <td className="py-2 px-4">{index + 1}</td>
              <td className="py-2 px-4">{row.playerName}</td>
              <td className="py-2 px-4">{row.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderboardTable;
