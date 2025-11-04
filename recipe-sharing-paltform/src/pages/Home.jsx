// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        🍳 Welcome to Recipe Sharing Platform
      </h1>
      <p className="text-lg text-gray-600 mb-8 max-w-lg">
        Share your favorite recipes and explore dishes submitted by other food lovers!
      </p>

      <div className="flex gap-4">
        <Link
          to="/submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit Recipe
        </Link>

        <Link
          to="/view"
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
        >
          View Recipes
        </Link>
      </div>
    </div>
  );
}
