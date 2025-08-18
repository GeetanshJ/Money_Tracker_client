import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/Auth/AuthContext';

const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated, checkAuthFromServer, user } = useAuth();
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
      <Navbar />
      Welcome {user.name}
    </div>
  )
}


export default Home;