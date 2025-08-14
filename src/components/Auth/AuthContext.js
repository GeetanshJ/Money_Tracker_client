import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../App";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  const checkAuthFromServer = async () => {
    try {
      const res = await axios.post(`${API_URL}/auth/check`, { withCredentials: true });
      setIsAuthenticated(res.data.authenticated);
    } catch {
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    checkAuthFromServer(); 
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, checkAuthFromServer }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
export const checkAuth = () => AuthProvider.checkAuthFromServer;
