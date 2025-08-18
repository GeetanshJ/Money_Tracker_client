import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/Auth/AuthContext';

const Profile = () => {
    const navigate = useNavigate();
    const { isAuthenticated, checkAuthFromServer } = useAuth();
    useEffect(() => {
        checkAuthFromServer();
    }, [])


    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/");
        }
    }, [isAuthenticated]);

    return (
        <div>
            <div>
                <Navbar />
            </div>
        </div>)
}

export default Profile
