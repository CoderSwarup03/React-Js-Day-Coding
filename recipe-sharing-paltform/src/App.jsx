// App.jsx
import React from "react";
import { RecipeProvider } from "./context/RecipeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SubmitRecipe from "./pages/SubmitRecipe";
import ViewRecipes from "./pages/ViewRecipes";

export default function App() {
  return (
    <RecipeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/submit" element={<SubmitRecipe />} />
          <Route path="/view" element={<ViewRecipes />} />
        </Routes>
      </BrowserRouter>
    </RecipeProvider>
  );
}
