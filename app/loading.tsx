import React from 'react';

export default function Loader() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-900">
      {/* Spinner */}
      <div className="flex items-center space-x-2">
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce delay-100"></div>
        <div className="w-4 h-4 bg-pink-500 rounded-full animate-bounce delay-200"></div>
      </div>
      {/* Loading Text */}
      <p className="text-white text-lg mt-4 absolute bottom-10 animate-pulse">
        Loading your experience...
      </p>
    </div>
  );
}
