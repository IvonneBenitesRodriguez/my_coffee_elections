import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import { Link } from "react-router-dom";
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our coffee options</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <Link to="/products">
              <MenuItem
                key={key}
                image={menuItem.image}
                name={menuItem.name}
                price={menuItem.price}
                description={menuItem.description}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
