import React, { useState } from "react";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import Contact from "../pages/Contact";
import "../styles/Navbar.css";
import styled from "styled-components";
import BurgerButton from "../components/BurgerButton";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import logo from "../assets/logo.png";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <NavContainer>
        <img src={logo} alt="Logo" style={{ width: "90px", height: "auto" }} />
        <div className={`links ${clicked ? "active" : ""}`}>
          <Link to="/" onClick={handleClick}>
            Home
          </Link>
          <Link to="/menu" onClick={handleClick}>
            Menu
          </Link>
          <Link to="/about" onClick={handleClick}>
            About
          </Link>
          <Link to="/recipes" onClick={handleClick}>
            Recipes
          </Link>
          <Link to="/contact" onClick={handleClick}>
            Contact
          </Link>
          <Link to="/events" onClick={handleClick}>
            Events
          </Link>
        </div>
        <div className="burger">
          <BurgerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? "active" : ""}`}></BgDiv>
      </NavContainer>
    </>
  );
}

export default Navbar;

const NavContainer = styled.nav`
  img {
    padding-left: 8%;
  }
  padding: 0 4rem;
  background-color: #0c317a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links {
    position: absolute;
    top: -700px;
    padding-right: 8%;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.5s ease;
    a {
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a {
      color: white;
      margin-top: 1rem;
      font-size: 2rem;
    }
  }
  .burger {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

const BgDiv = styled.div`
  background-color: #f70776;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.6s ease;

  &.active {
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
