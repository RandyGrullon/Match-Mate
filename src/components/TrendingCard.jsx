// components/TrendingCard.jsx
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShare } from "@fortawesome/free-solid-svg-icons";

const TrendingCard = ({ post }) => {
  const { author, date, content, likes, shares } = post;

  return (
    <div className="border border-gray-300 p-4 rounded-lg mb-4">
      <div className="flex items-center mb-2">
        {/* Puedes usar la imagen del autor aquí */}
        <Image
          src="/images/padel.png"
          alt={author}
          width={30}
          height={30}
          className="w-8 h-8 object-cover rounded-full mr-2"
        />
        <p className="text-sm font-semibold">{author}</p>
        <p className="text-gray-500 text-xs ml-auto">{date}</p>
      </div>
      <p className="mb-2">{content}</p>
      <div className="flex items-center">
        <button className="text-gray-500 text-sm mr-2 ">
          {likes}
          <FontAwesomeIcon icon={faHeart} size="sm" className="pl-1" />
        </button>
        <button className="text-gray-500 text-sm">
          {shares}
          <FontAwesomeIcon icon={faShare} size="sm" className="pl-1" />
        </button>
      </div>
      {/* Aquí puedes agregar el botón de like y compartir según tu diseño */}
    </div>
  );
};

export default TrendingCard;
