import React from "react";
import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-[1.02] transition-transform">
      <img src={recipe.img} alt={recipe.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{recipe.name}</h2>
        <p className="text-gray-600 text-sm">{recipe.description}</p>
        <Link
          to={`/recipe/${recipe.id}`}
          className="inline-block mt-3 text-amber-600 font-medium hover:underline"
        >
          View Recipe →
        </Link>
      </div>
    </div>
  );
}
