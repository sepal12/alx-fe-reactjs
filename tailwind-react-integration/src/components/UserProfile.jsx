// src/components/UserProfile.js
import React from "react";

// src/components/UserProfile.jsx
import React from 'react';

function UserProfile() {
  return (
    <div className="bg-gray-100 p-4 sm:p-4 md:p-8 max-w-xs sm:max-w-sm md:max-w-sm mx-auto my-10 sm:my-16 md:my-20 rounded-lg shadow-lg">
      <img 
        src="https://via.placeholder.com/150" 
        alt="User profile" 
        className="rounded-full w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 mx-auto"
      />
      <h1 className="text-lg sm:text-xl md:text-xl text-blue-800 my-3 sm:my-4 md:my-5 text-center">
        John Doe
      </h1>
      <p className="text-sm sm:text-base text-gray-600 text-center">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;