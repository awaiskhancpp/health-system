import React from "react";
// import { link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between red-200">
        <a href="/" className="text-lg font-bold">Healthcare System</a>
        <div>
          <a href="/dashboard" className="px-4">Dashboard</a>
          <a href="/profile" className="px-4">Profile</a>
        </div>
      </div>
    </nav>
  );
};
