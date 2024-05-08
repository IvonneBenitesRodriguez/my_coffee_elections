import React, { useState } from "react";
import "../styles/Recipes.css";

function Recipes() {
  const [randomHouse, setRandomHouse] = useState(null);

  const fetchRandomHouse = async () => {
    try {
      const response = await fetch(
        `https://anapioficeandfire.com/api/houses/378`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok today");
      }
      const data = await response.json();
      // const houses = Object.keys(data.message);
      // const randomIndex = Math.floor(Math.random() * houses.length);
      // const randomHouses = houses[randomIndex];
      const randomHouse = {
        name: randomHouse,
        region: `${randomHouse} region.`,
        words: randomHouse,
      };

      setRandomHouse(randomHouse);
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
      <button onClick={fetchRandomHouse}>Open me</button>
      {randomHouse && (
        <div className="randomRecipe">
          <h2>{randomHouse.name}</h2>
          <p>{randomHouse.region}</p>
        </div>
      )}
    </div>
  );
}

export default Recipes;
