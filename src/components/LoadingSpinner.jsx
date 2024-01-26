// LoadingSpinner.js
import React from 'react';
import Image from 'next/image';
import BeatLoader from 'react-spinners/BeatLoader';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      <div className="flex flex-col items-center">
        <Image
          src="/images/match-mate-logo.svg"
          alt="MatchMate Logo"
          width={75}
          height={75}
          className="mx-auto"
        />
        <BeatLoader
          className="mt-4"
          size={20}
        />
      </div>
    </div>
  );
};

export default LoadingSpinner;
