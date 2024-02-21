import React from "react";
import { useState } from "react";
import {siteLogo} from "../assets";
import {navLinks} from "../constants";
const Navbar = () => {
    return (
        <nav className="w-full flex py-6 justify-between items-center navbar">
            <img src={siteLogo} alt="marketwiz" className="w" />
        </nav>
    )
}

export default Navbar;