// pages/community.jsx
import BrowseSports from "@/components/BrowseSports";
import PopularAthletes from "@/components/PopularAthletes";
import Searchbar from "@/components/Searchbar";
import TrendingNow from "@/components/TrendingNow";
import React from "react";

const CommunityPage = () => {
  return (
    <div className="text-black flex flex-col gap-6">
      <div>
        <Searchbar />
      </div>
      <div>
        <PopularAthletes />
      </div>
      <div>
        <TrendingNow />
      </div>
      <div>
        <BrowseSports />
      </div>
    </div>
  );
};

export default CommunityPage;
