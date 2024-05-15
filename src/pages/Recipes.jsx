// import React, { useState } from "react";
import React, { useState } from "react";
import "../styles/Recipes.css";

function Recipes() {
  const [randomRecipe, setRandomRecipe] = useState(null);

  const fetchRandomRecipe = async () => {
    try {
      const response = await fetch(
        `https://api.sampleapis.com/recipes/recipes`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok today");
      }
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomDish = data[randomIndex];
      setRandomRecipe(randomDish);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  return (
    <div className="recipes">
      <h1 className="recipeTitle">Enjoy our recipes</h1>
      <p>
        For a small meeting with your friends, or a celebration, you have a tons
        of tasty recipes you can use, only assure yourself to click in this
        button:
      </p>
      <button onClick={fetchRandomRecipe} className="btnRecipes">
        Open me
      </button>
      {randomRecipe && (
        <div className="randomRecipe">
          <h2 className="randomRecipeTitle">{randomRecipe.title}</h2>
          <p className="randomRecipeCategory">{randomRecipe.cuisine}</p>
          <span className="randomingredient">
            {randomRecipe.mainIngredient}
          </span>
          <img
            src={randomRecipe.photoUrl}
            width={"220px"}
            alt={randomRecipe.title}
            className="randomRecipeImage"
          />
        </div>
      )}
    </div>
  );
}

export default Recipes;
