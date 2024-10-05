import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../config/authConfig';

/**
 * Explanation
 * to="/login": This specifies the path to which you want to navigate.
 * replace: This prop replaces the current entry in the history stack, so the user can't navigate back to the original page
 * using the back button.
 */

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
