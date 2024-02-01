// components/TrendingNow.jsx
import React, { useState } from "react";
import TrendingCard from "./TrendingCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

// mock
const TrendingNow = () => {
  const trendingPostsData = [
    {
      id: 1,
      author: "John Doe",
      date: "2024-01-25",
      content: "¡Increíble partido hoy! 🏀 #Basketball",
      likes: 25,
      shares: 10,
    },
    {
      id: 2,
      author: "Jane Smith",
      date: "2024-01-24",
      content: "Gran día en la cancha de tenis. 🎾 #TennisLife",
      likes: 30,
      shares: 15,
    },
    {
      id: 3,
      author: "Alex Johnson",
      date: "2024-01-23",
      content: "¡Ganamos el partido! #Soccer",
      likes: 40,
      shares: 20,
    },
    {
      id: 4,
      author: "Emma Brown",
      date: "2024-01-22",
      content: "Gran entrenamiento hoy. #Fitness",
      likes: 50,
      shares: 25,
    },
    {
      id: 5,
      author: "Michael Davis",
      date: "2024-01-21",
      content: "Gran día en la cancha de tenis. 🎾 #TennisLife",
      likes: 60,
      shares: 30,
    },
  ];

  const [currentPostIndex, setCurrentPostIndex] = useState(0);

  const changePost = (direction) => {
    if (direction === "left") {
      setCurrentPostIndex((prevIndex) =>
        prevIndex === 0 ? trendingPostsData.length - 1 : prevIndex - 1
      );
    } else if (direction === "right") {
      setCurrentPostIndex((prevIndex) =>
        prevIndex === trendingPostsData.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Trending Now</h1>
        <div className="flex space-x-6">
          <button
            className="focus:outline-none"
            onClick={() => changePost("left")}
          >
            <FontAwesomeIcon icon={faChevronLeft} size="lg" />
          </button>
          <button
            className="focus:outline-none"
            onClick={() => changePost("right")}
          >
            <FontAwesomeIcon icon={faChevronRight} size="lg" />
          </button>
        </div>
      </div>
      <div className="mt-4">
        {trendingPostsData.slice(currentPostIndex, currentPostIndex + 1).map((post) => (
          <TrendingCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default TrendingNow;
