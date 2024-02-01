// components/PopularAthletes.jsx
import React from "react";
import AthleteCard from "./AthleteCard"; // Crea este componente si no existe

const PopularAthletes = () => {
  // Mock data de atletas populares
  const popularAthletesData = [
    {
      id: 1,
      name: "John Doe",
      followers: 5000,
      profileImage: "/images/john_doe.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      followers: 4500,
      profileImage: "/images/john_doe.jpg",
    },
    {
        id: 3,
        name: "Alex Johnson",
        followers: 4000,
        profileImage: "/images/alex_johnson.jpg",
        
    },
    {
        id: 4,
        name: "Emma Brown",
        followers: 3500,
        profileImage: "/images/emma_brown.jpg",
    },
    {
        id: 5,
        name: "Michael Davis",
        followers: 3000,
        profileImage: "/images/michael_davis.jpg",
    },
    {
        id: 6,
        name: "Sophia Wilson",
        followers: 2500,
        profileImage: "/images/sophia_wilson.jpg",
    },
    {
        id: 7,
        name: "William Lee",
        followers: 2000,
        profileImage: "/images/william_lee.jpg",
    },
    {
        id: 8,
        name: "Olivia Martinez",
        followers: 1500,
        profileImage: "/images/olivia_martinez.jpg",
    },
    {
        id: 9,
        name: "James Taylor",
        followers: 1000,
        profileImage: "/images/james_taylor.jpg",
    },
    {
        id: 10,
        name: "Amelia Garcia",
        followers: 500,
        profileImage: "/images/amelia_garcia.jpg",
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Popular Athletes</h1>
        <button className="text-black cursor-pointer">View All</button>
      </div>
      <div className="flex space-x-4 overflow-x-scroll mt-4 ">
        {popularAthletesData.map((athlete) => (
          <AthleteCard key={athlete.id} athlete={athlete} />
        ))}
      </div>
    </div>
  );
};

export default PopularAthletes;
