import React from "react";
import Shop from "../assets/shop.jpeg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Shop})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About us</h1>
        <p>
          {" "}
          This virtual coffee shop was founded in 1997. It began with 3 friends
          who met each other in Spain. and their own mixtures of coffee. Now, 33
          years after Bella Coffee sells pure coffee to 123 countries. Its
          unique mixtures and aromas made of this coffee a perfect choice. This
          virtual coffee shop was founded in 1997. It began with 3 friends who
          met each other in Spain. They loved how to cook, and invent their own
          food preparations, and their own mixtures of coffee. Now, 33 years
          after Bella Coffee sells pure coffee to 123 countries. Its unique
          mixtures and aromas made of this coffee a perfect choice. This virtual
          coffee shop was founded in 1997. It began with 3 friends who met each
          other in Spain. They loved how to cook, and invent their own food
          preparations, and their own mixtures of coffee. Now, 33 years after
          Bella Coffee sells pure coffee to 123 countries. Its unique mixtures
          and aromas made of this coffee a perfect choice.
        </p>
      </div>
    </div>
  );
}

export default About;
