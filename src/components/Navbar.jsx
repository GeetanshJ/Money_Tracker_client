import React, { useState } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from '../Context/Auth/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { API_URL } from '../App';
import axios from 'axios';
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const { setIsAuthenticated ,setUser} = useAuth();

    const handleAuth = async() => {
        const res = await axios.post(`${API_URL}/auth/logout`);
        setIsAuthenticated(res.data.authenticated);
        setUser(res.data.user);
    }

    return (
        <nav>
            <div className="logo">Money Tracker</div>
            <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? (
                    <FontAwesomeIcon icon={faXmark} size="lg" color="white" />
                ) : (
                    <FontAwesomeIcon icon={faBars} size="lg" color="white" />
                )}
            </div>
            <div className={`nav-links ${menuOpen ? "show" : ""}`}>
                {location.pathname !== "/" && (
                    <>
                        <NavLink to="/home" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                            Home
                        </NavLink>
                        <NavLink to="/about" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                            About Us
                        </NavLink>
                        <NavLink to="/profile" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                            Profile
                        </NavLink>
                        <button onClick={ () => {handleAuth();setMenuOpen(false); }} className="nav-link-button">
                            Logout
                        </button>
                        <NavLink to="/" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                            SignUp/Login
                        </NavLink>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
