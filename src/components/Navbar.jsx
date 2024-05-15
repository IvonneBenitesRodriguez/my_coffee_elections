import React, { useState } from "react";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import Contact from "../pages/Contact";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import logo from "../assets/logo.png";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={logo} style={{ width: "90px", height: "auto" }} />
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/recipes">Recipes</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/events">Events</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/events">Events</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
