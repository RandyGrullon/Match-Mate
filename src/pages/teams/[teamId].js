import React from 'react';
import { useRouter } from 'next/router';
import TeamDetails from '../../components/TeamDetails';

const TeamDetailsPage = () => {
  const router = useRouter();
  const { teamId } = router.query;

  // Fetch team details based on teamId from API or other data source
  const teamDetails = {
    id: teamId,
    name: 'Dynamic Team',
    members: ['User1', 'User2', 'User3'],
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-md mx-auto">
        <TeamDetails teamName={teamDetails.name} members={teamDetails.members} />
        {/* Add additional team details */}
      </div>
    </div>
  );
};

export default TeamDetailsPage;
