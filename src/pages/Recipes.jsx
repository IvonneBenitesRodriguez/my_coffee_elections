import React, { useState } from "react";
import "../styles/Recipes.css";

function Recipes() {
  const [randomDogImage, setRandomDogImage] = useState(null);

  const fetchRandomDogImage = async () => {
    try {
      const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
      if (!response.ok) {
        throw new Error("Network response was not ok today");
      }
      const data = await response.json();
      const breeds = Object.keys(data.message);
      const randomIndex = Math.floor(Math.random() * breeds.length);
      const randomBreed = breeds[randomIndex];
      const randomRecipe = {
        strCategory: randomBreed,
        strCategoryDescription: `A delightful recipe involving the ${randomBreed} breed.`,
        strCategoryImage: randomBreed,
      };

      setRandomRecipe(randomRecipe);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  return (
    <div className="recipes">
      <h1 className="recipeTitle">Enjoy our recipes</h1>
      <p>
        {""}
        For a small meeting with your friends, or a celebration, you have a tons
        of tasty recipes you can use, only assure yourself to click in this
        button :
      </p>
      <button onClick={fetchRandomDogRecipe}>Open me</button>
      {randomRecipe && (
        <div className="randomRecipe">
          <h2>{randomRecipe.strCategory}</h2>
          <p>{randomRecipe.strCategoryDescription}</p>
          <img
            src={randomRecipe.strCategoryImage}
            alt={`A ${randomRecipe.strCategory} dog`}
          />
        </div>
      )}
    </div>
  );
}

export default Recipes;
