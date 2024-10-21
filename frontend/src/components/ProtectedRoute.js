import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

const ProtectedRoute = ({ children }) => {
  const { authState } = useContext(AuthContext); 

  // If the user is not logged in, redirect to the login page
  if (!authState.token) {
    return <Navigate to="/login" />;
  }

  // If the user is logged in, render the child components (News, Saved Articles, etc.)
  return children;
};

export default ProtectedRoute;