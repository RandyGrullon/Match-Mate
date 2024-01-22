// ProfilePage.jsx
import React from "react";
import Image from "next/image";
import ProfilePic from "../../public/images/profile.svg";
import BannerImage from "../../public/images/profile.svg";
import ProfileInfoCard from "@/components/ProfileInfoCard";
import MatchHistoryCard from "@/components/common/Cards/MatchHistoryCard ";
import MyTeamCard from "@/components/common/Cards/MyTeamCard";
import TournamentsHistoryCard from "@/components/common/Cards/TournamentsHistoryCard";

const ProfilePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen lg:pt-4">
      {/* Banner */}

      {/* Contenido del perfil */}
      <div className="max-w-3xl mx-auto bg-white rounded-md shadow-md lg:my-8 lg:p-8">
        <div className="relative h-40">
          <Image src={BannerImage} alt="Banner" layout="fill" objectFit="cover" />
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="flex-shrink-0 mb-4 lg:mb-0">
            <Image
              className="w-16 h-16 lg:w-24 lg:h-24 rounded-full border-2 border-black"
              src={ProfilePic}
              alt="Profile"
              height={64}
              width={64}
            />
          </div>
          <div className="lg:ml-8">
            <ProfileInfoCard />
          </div>
        </div>

        <div className="mb-8">
          <MatchHistoryCard />
        </div>

        <div className="mb-8">
          <MyTeamCard />
        </div>

        <div className="mb-8">
          <TournamentsHistoryCard />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
