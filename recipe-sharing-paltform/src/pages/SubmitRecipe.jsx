// SubmitRecipe.jsx
import React from "react";
import { useState } from "react";
import { useRecipe } from "../context/RecipeContext";
import { useNavigate } from "react-router-dom";


export default function SubmitRecipe() {
  const { addRecipe } = useRecipe();
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState('')
  const [ingredients, setIngredients] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe({ title,url, ingredients, description });
    setTitle("");
    setIngredients("");
    setDescription("");
    navigate('/')
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
        <h2 className="text-xl font-bold mb-4">Submit Your Recipe</h2>
        <input
          className="border w-full mb-2 p-2 rounded"
          placeholder="Recipe Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="border w-full mb-2 p-2 rounded"
          placeholder="Recipe URL"

        />
        <textarea
          className="border w-full mb-2 p-2 rounded"
          placeholder="Ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <textarea
          className="border w-full mb-2 p-2 rounded"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Submit Recipe
        </button>
      </form>
    </>
  );
}
