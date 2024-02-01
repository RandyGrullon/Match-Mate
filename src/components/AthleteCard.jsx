// components/AthleteCard.jsx
import React from "react";
import Image from "next/image";

const AthleteCard = ({ athlete }) => {
  const { name, followers, profileImage } = athlete;

  return (
    <div className="flex flex-col items-center">
      <div className="flex-grow w-24">
          <Image
            src={"/images/padel.png"}
            alt={name}
            width={150}
            height={150}
            className="w-28 h-24 object-cover rounded-full mb-2"
          />
        <p className="text-sm font-semibold">{name}</p>
        <p className="text-gray-500 text-xs">{`${followers} followers`}</p>
      </div>
      <button className="bg-blue-500 text-white px-2 py-1 rounded-full mt-2">
        Follow
      </button>
    </div>
  );
};

export default AthleteCard;
