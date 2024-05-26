import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('authToken'));
  const navigate = useNavigate();

  const login = (token, userType) => {
    localStorage.setItem('authToken', token);
    localStorage.setItem('userType', userType);
    setIsAuthenticated(true);
    navigate('/home');
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userType');
    setIsAuthenticated(false);
    navigate('/login');
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
