import { Menu } from "@mui/base";
import React from "react";

function MenuItem({ image, name, price, description }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1> {name} </h1>
      <p> ${price} </p>
      <span>{description}</span>
    </div>
  );
}
export default MenuItem;
