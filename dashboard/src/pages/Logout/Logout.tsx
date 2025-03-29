import React, { useEffect } from 'react';
import { Navigate } from 'react-router';
import { useAuth } from '../../contexts/Auth'; // Import useAuth

export default function Logout() {
  const { logout } = useAuth() || {}; // Destructure logout from useAuth

  useEffect(() => {
    if (logout) {
      logout(); // Call the logout function from Auth context
    }
    window.location.href = '/login'; // Redirect to login page
  }, [logout]);

  return <Navigate to="/login" />;
}
