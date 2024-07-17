// src/components/LoadingDots.jsx
import React from "react";

const LoadingDots = () => {
  return (
    <div className="flex space-x-2 justify-center items-center min-h-[20vh]">
      <div
        className="bg-blue-500 rounded-full h-3 w-3 animate-bounce"
        style={{ animationDelay: "0s" }}
      ></div>
      <div
        className="bg-green-500 rounded-full h-3 w-3 animate-bounce"
        style={{ animationDelay: "0.3s" }}
      ></div>
      <div
        className="bg-red-500 rounded-full h-3 w-3 animate-bounce"
        style={{ animationDelay: "0.4s" }}
      ></div>
      <div
        className="bg-yellow-500 rounded-full h-3 w-3 animate-bounce"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="bg-black rounded-full h-3 w-3 animate-bounce"
        style={{ animationDelay: "0.5s" }}
      ></div>
    </div>
  );
};

export default LoadingDots;
