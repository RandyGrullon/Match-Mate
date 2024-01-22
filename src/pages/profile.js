import React from 'react';
import Image from 'next/image';

const ProfilePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
        <div className="flex items-center mb-6">
          <Image
            className="w-16 h-16 rounded-full mr-4"
            src="/profile-image.jpg"
            alt="Profile"
          />
          <div>
            <h1 className="text-2xl font-bold">John Doe</h1>
            <p className="text-gray-600">Username: johndoe</p>
          </div>
        </div>
        {/* Add additional profile details */}
      </div>
    </div>
  );
};

export default ProfilePage;
