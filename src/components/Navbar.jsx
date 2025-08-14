import React from 'react';
import { NavLink } from "react-router-dom"
import "./Navbar.css"
const Navbar = () => {
    return (
        <nav>
            <div>Money Tracker</div>
            <NavLink to="/home" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About Us</NavLink>
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>SignUp/Login</NavLink>
            <NavLink to="/profile" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Profile</NavLink>


        </nav>
    );
};



export default Navbar;