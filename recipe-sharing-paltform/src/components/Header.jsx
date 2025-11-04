import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold text-amber-600">
          🍳 RecipeShare
        </Link>
        <nav className="flex space-x-4">
          <Link to="/" className="hover:text-amber-600">Home</Link>
          <Link to="/submit" className="hover:text-amber-600">Submit Recipe</Link>
        </nav>
      </div>
    </header>
  );
}
