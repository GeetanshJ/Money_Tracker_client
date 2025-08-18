import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../App";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState('');

  const checkAuthFromServer = async () => {
    try {
      const res = await axios.post(`${API_URL}/auth/check`, {}, { withCredentials: true });
      setIsAuthenticated(res.data.authenticated);
      setUser(res.data.user.user);

    } catch {
      setIsAuthenticated(false);
    }
  };
  
  useEffect(() => {
    checkAuthFromServer();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, checkAuthFromServer, user, setIsAuthenticated, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
