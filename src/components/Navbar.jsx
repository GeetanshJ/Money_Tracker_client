import React from 'react';
import { NavLink ,useLocation} from "react-router-dom"
import "./Navbar.css"
const Navbar = ({ isLogin }) => {
    const location = useLocation();
    console.log(location.pathname)
    return (
        <nav>
            <div>Money Tracker</div>
            {location.pathname !== "/" && (
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