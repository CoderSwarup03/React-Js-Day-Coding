// ViewRecipes.jsx
import React from "react";
import { useRecipe } from "../context/RecipeContext";

export default function ViewRecipes() {
  const { recipes } = useRecipe();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">All Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes yet. Submit one!</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {recipes.map((recipe, index) => (
            <div key={index} className="p-4 border rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{recipe.title}</h3>
              <p className="text-gray-600">{recipe.description}</p>
              <p className="mt-2"><strong>Ingredients:</strong> {recipe.ingredients}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
