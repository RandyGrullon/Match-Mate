// pages/tournament/[tournamentId].jsx
import React from 'react';
import { useRouter } from 'next/router';
import LeaderboardTable from '../../components/LeaderboardTable';

const TournamentPage = () => {
  const router = useRouter();
  const { tournamentId } = router.query;

  // Datos de ejemplo para equipos y jugadores
  const teamLeaderboardColumns = ['Rank', 'Team Name', 'Wins', 'Losses'];
  const teamLeaderboardData = [
    { teamId: 1, teamName: 'Team A', wins: 5, losses: 2 },
    { teamId: 2, teamName: 'Team B', wins: 4, losses: 3 },
    // ... más datos
  ];

  const playerLeaderboardColumns = ['Rank', 'Player Name', 'Score'];
  const playerLeaderboardData = [
    { playerId: 1, playerName: 'Player 1', score: 100 },
    { playerId: 2, playerName: 'Player 2', score: 90 },
    // ... más datos
  ];

  const mvpCandidates = [
    { playerId: 1, playerName: 'Player 1', score: 100 },
    { playerId: 2, playerName: 'Player 2', score: 90 },
    // ... más datos
  ];

  // Función para calcular el MVP (puede variar según tus reglas de torneo)
  const calculateMVP = () => {
    // Aquí puedes implementar la lógica para determinar el MVP
    const mvp = mvpCandidates.reduce((prev, current) =>
      prev.score > current.score ? prev : current
    );
    return mvp;
  };

  const mvp = calculateMVP();

  return (
    <div className=" min-h-screen text-black">
      <h1 className="text-3xl font-bold mb-4">Tournament: {tournamentId}</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Team Leaderboard</h2>
        <LeaderboardTable columns={teamLeaderboardColumns} data={teamLeaderboardData} />
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Player Leaderboard</h2>
        <LeaderboardTable columns={playerLeaderboardColumns} data={playerLeaderboardData} />
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">MVP of the Tournament</h2>
        {mvp ? (
          <div>
            <p className="mb-2">{`Player: ${mvp.playerName}`}</p>
            <p>{`Score: ${mvp.score}`}</p>
          </div>
        ) : (
          <p>No MVP determined yet.</p>
        )}
      </div>
    </div>
  );
};

export default TournamentPage;
