import React from 'react';

const TournamentsHistoryCard = () => {
  // Ejemplo de datos del historial de torneos
  const tournamentsHistoryData = [
    { date: '2022-02-01', tournament: 'Tournament X', result: 'Win', team: 'Team A' },
    { date: '2022-02-10', tournament: 'Tournament Y', result: 'Loss', team: 'Team B' },
    // ... más datos ...
  ];

  return (
    <div className="bg-white p-4 rounded-md shadow-md text-black">
      <h2 className="text-lg font-semibold mb-4">Tournaments History</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border">Date</th>
            <th className="py-2 px-4 border">Tournament</th>
            <th className="py-2 px-4 border">Result</th>
            <th className="py-2 px-4 border">Team</th>
          </tr>
        </thead>
        <tbody>
          {tournamentsHistoryData.map((tournament, index) => (
            <tr key={index} className="text-center">
              <td className="py-2 px-4 border">{tournament.date}</td>
              <td className="py-2 px-4 border">{tournament.tournament}</td>
              <td className={`py-2 px-4 border ${tournament.result === 'Win' ? 'text-green-600' : 'text-red-600'}`}>
                {tournament.result}
              </td>
              <td className="py-2 px-4 border">{tournament.team}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TournamentsHistoryCard;
