// ProfileInfoCard.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faUserFriends,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

const ProfileInfoCard = ({ followers, followings }) => {
  return (
    <div className=" p-4 rounded-md  text-black w-full">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold">User Name</h2>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faCog}
            size="lg"
            className="text-gray-600 cursor-pointer"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex items-center mb-4">
          <div className="mr-4">
            <FontAwesomeIcon
              icon={faUsers}
              size="2x"
              className="text-gray-600"
            />
          </div>
          <div>
            <p className="text-sm text-gray-600">Followers</p>
            <p className="text-lg font-bold">{followers}</p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="mr-4">
            <FontAwesomeIcon
              icon={faUserFriends}
              size="2x"
              className="text-gray-600"
            />
          </div>
          <div>
            <p className="text-sm text-gray-600">Following</p>
            <p className="text-lg font-bold">{followings}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfoCard;
