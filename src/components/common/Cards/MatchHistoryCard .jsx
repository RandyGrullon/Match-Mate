// MatchHistoryCard.jsx
import React from 'react';

const MatchHistoryCard = () => {
  const matchHistoryData = [
    { date: '2022-01-01', opponent: 'Team A', result: 'Win' },
    { date: '2022-01-05', opponent: 'Team B', result: 'Loss' },
    // ... más datos ...
  ];

  return (
    <div className="bg-white p-4 rounded-md shadow-md text-black">
      <h2 className="text-lg font-semibold mb-4">Match History</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border">Date</th>
            <th className="py-2 px-4 border">Opponent</th>
            <th className="py-2 px-4 border">Result</th>
          </tr>
        </thead>
        <tbody>
          {matchHistoryData.map((match, index) => (
            <tr key={index} className="text-center">
              <td className="py-2 px-4 border">{match.date}</td>
              <td className="py-2 px-4 border">{match.opponent}</td>
              <td className={`py-2 px-4 border ${match.result === 'Win' ? 'text-green-600' : 'text-red-600'}`}>
                {match.result}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MatchHistoryCard;
