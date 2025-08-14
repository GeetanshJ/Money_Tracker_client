import React,{useEffect} from 'react'
import Navbar from '../../components/Navbar'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../components/Auth/AuthContext';
import { checkAuth } from "../../components/Auth/AuthContext";

const Home = () => {
      useEffect(() => {
        checkAuth();
        return () => {
          
        }
      }, [])
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) navigate("/login");
  return (
    <div>
      <div>
        <Navbar />
      </div>
    </div>
  )
}


export default Home;