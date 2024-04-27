import React from "react";
import Home from "./Home";
import Recipes from "./Recipes";
import Contact from "./Contact";
import "../styles/main.css";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
            <nav>
                <ul className="flex justify-evenly text-lg pt-3">
                    <Link to="/" className="flex justify-evenly"><Home /></Link>
                    <Link to="/Recipes" className="flex justify-evenly"><Recipes /></Link>
                    <Link to="/Contact" className="flex justify-evenly"><Contact /></Link>
                </ul>
            </nav>
    );
}

export default Navbar;
