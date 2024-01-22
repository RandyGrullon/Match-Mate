// // components/TournamentBracket.jsx
// import React, { useState } from 'react';
// import TournamentBracket from 'react-tournament-bracket';

// const generateRandomTeams = (numTeams) => {
//   const teams = [];
//   for (let i = 1; i <= numTeams; i++) {
//     teams.push({ name: `Team ${i}` });
//   }
//   return teams;
// };

// const BracketComponent = () => {
//   const [teams, setTeams] = useState(generateRandomTeams(8)); // Cambia el número según tus necesidades
//   const [results, setResults] = useState([]);

//   const handleRandomizeTeams = () => {
//     setTeams(generateRandomTeams(teams.length));
//     setResults([]);
//   };

//   const handleMatchResult = (match) => {
//     const newResults = [...results];
//     newResults[match.matchIndex] = match.winner;
//     setResults(newResults);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4 text-center">Tournament Bracket</h1>
//       <div className="text-center mb-4">
//         <button
//           onClick={handleRandomizeTeams}
//           className="bg-blue-500 text-white px-4 py-2 rounded-md"
//         >
//           Randomize Teams
//         </button>
//       </div>
//       <div className="max-w-screen-lg mx-auto">
//         <TournamentBracket
//           teams={teams}
//           results={results}
//           onResult={handleMatchResult}
//         />
//       </div>
//     </div>
//   );
// };

// export default BracketComponent;
