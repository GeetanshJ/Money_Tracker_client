import { createContext, useContext, useState } from "react";
import axios from "axios";
import { API_URL } from "../../App";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState('');

  const checkAuthFromServer = async () => {
    try {
      const res = await axios.post(`${API_URL}/auth/check`,{}, { withCredentials    : true });
      setIsAuthenticated(res.data.authenticated);
      setUser(res.data.user);
    } catch {
      setIsAuthenticated(false);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, checkAuthFromServer,user }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
