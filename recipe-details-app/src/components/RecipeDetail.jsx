import React from 'react'
import { useParams, Link } from "react-router-dom";

const recipeData = {
  1: {
    name: "Creamy Pasta",
    img: "https://img.freepik.com/free-photo/delicious-spaghetti-white-plate_1232-1767.jpg",
    ingredients: ["Pasta", "Cream", "Cheese", "Salt"],
    steps: ["Boil pasta", "Add cream", "Mix and serve hot"],
  },
  2: {
    name: "Paneer Curry",
    img: "https://img.freepik.com/free-photo/indian-paneer-curry_57665-6160.jpg",
    ingredients: ["Paneer", "Tomato", "Spices", "Cream"],
    steps: ["Cook tomatoes", "Add paneer", "Mix with spices", "Serve with rice"],
  },
  3: {
    name: "Chocolate Cake",
    img: "https://img.freepik.com/free-photo/chocolate-cake_1203-7923.jpg",
    ingredients: ["Flour", "Cocoa", "Butter", "Sugar", "Eggs"],
    steps: ["Mix ingredients", "Bake for 30 min", "Cool and serve"],
  },
};

export default function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipeData[id];

  if (!recipe) {
    return <p className="text-center mt-10 text-gray-500">Recipe not found!</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img src={recipe.img} alt={recipe.name} className="w-full h-64 object-cover rounded-xl shadow-md" />
      <h1 className="text-3xl font-bold mt-6">{recipe.name}</h1>
      <h2 className="text-xl font-semibold mt-4">Ingredients:</h2>
      <ul className="list-disc pl-6 text-gray-700">
        {recipe.ingredients.map((item, i) => <li key={i}>{item}</li>)}
      </ul>

      <h2 className="text-xl font-semibold mt-4">Steps:</h2>
      <ol className="list-decimal pl-6 text-gray-700">
        {recipe.steps.map((step, i) => <li key={i}>{step}</li>)}
      </ol>

      <Link to="/" className="inline-block mt-6 text-amber-600 hover:underline">
        ← Back to Recipes
      </Link>
    </div>
  );
}
