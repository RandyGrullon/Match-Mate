import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const SportCard = ({ name, image, quantity, limitOfPlayers, location }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/[sport]`, `/${sport.toLowerCase()}`);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-1 ">
      <div className="rounded-lg shadow-lg overflow-hidden">
        <div className="absolute inset-0 "></div>
        <div className="">
          <Image
            className="object-center object-cover h-auto w-full rounded-t-lg"
            src={image}
            alt="photo"
            width={5}
            height={5}
          />
        </div>

        <div className=" py-8 sm:py-6 bg-white">
          <p className="text-xl text-black font-bold m-2 pl-2">{name}</p>
          {/* Dos cuadros separados */}
          <div className="flex justify-between px-4 text-center">
            <div className="w-3/4 border-2">
              <p className="text-base text-black font-normal">{location}</p>
            </div>
            <div className="w-1/4 border-2">
              <p className="text-base text-black font-normal">
                {quantity}/{limitOfPlayers}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportCard;
