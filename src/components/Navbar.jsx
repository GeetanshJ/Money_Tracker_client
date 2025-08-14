import React from 'react';
import { NavLink } from "react-router-dom"
import "./Navbar.css"
const Navbar = ({ isLogin }) => {
    return (
        <nav>
            <div>Money Tracker</div>
            {isLogin && (
                <>
                    <NavLink to="/home" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About Us</NavLink>
                    <NavLink to="/profile" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Profile</NavLink>
                </>
            )}

            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>SignUp/Login</NavLink>


        </nav>
    );
};



export default Navbar;