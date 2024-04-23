import React from "react";
import Home from "./Home";
import Recipes from "./Recipes";
import Contact from "./Contact";
import "../styles/main.css";

function Navbar() {
    return (
            <nav>
                <ul className="flex justify-evenly text-lg pt-3">
                    <li className="flex justify-evenly"><Home /></li>
                    <li className="flex justify-evenly"><Recipes /></li>
                    <li className="flex justify-evenly"><Contact /></li>
                </ul>
            </nav>
    );
}

export default Navbar;
