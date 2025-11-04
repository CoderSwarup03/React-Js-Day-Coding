import React from 'react'
import RecipeCard from "./RecipeCard";

const recipes = [
  {
    id: 1,
    name: "Creamy Pasta",
    img: "https://img.freepik.com/free-photo/delicious-spaghetti-white-plate_1232-1767.jpg",
    description: "A simple and creamy Italian pasta.",
  },
  {
    id: 2,
    name: "Paneer Curry",
    img: "https://img.freepik.com/free-photo/indian-paneer-curry_57665-6160.jpg",
    description: "Rich, spicy Indian cottage cheese curry.",
  },
  {
    id: 3,
    name: "Chocolate Cake",
    img: "https://img.freepik.com/free-photo/chocolate-cake_1203-7923.jpg",
    description: "Moist and decadent homemade cake.",
  },
];

export default function RecipeList() {
  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
