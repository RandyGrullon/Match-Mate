import React from 'react';

const MyTeamCard = () => {
  // Ejemplo de datos de "My Team"
  const myTeamData = [
    { date: '2022-01-10', opponent: 'Team C', result: 'Win' },
    { date: '2022-01-15', opponent: 'Team D', result: 'Win' },
    // ... más datos ...
  ];

  return (
    <div className="bg-white p-4 rounded-md shadow-md text-black">
      <h2 className="text-lg font-semibold mb-4">My Team Matches</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border">Date</th>
            <th className="py-2 px-4 border">Opponent</th>
            <th className="py-2 px-4 border">Result</th>
          </tr>
        </thead>
        <tbody>
          {myTeamData.map((match, index) => (
            <tr key={index} className="text-center">
              <td className="py-2 px-4 border">{match.date}</td>
              <td className="py-2 px-4 border">{match.opponent}</td>
              <td className="py-2 px-4 border text-green-600">{match.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyTeamCard;
