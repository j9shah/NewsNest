import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: null,
    userId: null,
    username: null,
    isFirstLogin: false
  });

  // Function to log in and set token, userId, and username
  const login = (token, userId, username, isFirstLogin = false) => {
    setAuthState({ token, userId, username, isFirstLogin });
    localStorage.setItem('token', token); 
  };

  const logout = () => {
    setAuthState({ token: null, userId: null, username: null, isFirstLogin: false });
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};