import React from 'react';
import TeamDetails from '../components/TeamDetails';

const TeamsPage = () => {
  const teams = [
    { id: 1, name: 'Team A', members: ['User1', 'User2'] },
    { id: 2, name: 'Team B', members: ['User3', 'User4'] },
    // Add more teams
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-md mx-auto">
        {teams.map((team) => (
          <TeamDetails key={team.id} teamName={team.name} members={team.members} />
        ))}
      </div>
    </div>
  );
};

export default TeamsPage;
