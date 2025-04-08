import React, { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { useAuth } from "../../contexts/Auth"; // Import useAuth

export default function Logout() {
  const { logout } = useAuth() || {}; // Destructure logout from useAuth
  const [redirect, setRedirect] = useState(false); // State to handle redirection

  useEffect(() => {
    if (logout) {
      logout(); // Call the logout function from Auth context
      setRedirect(true); // Set redirect to true after logout
    }
  }, [logout]);

  if (redirect) {
    return <Navigate to="/Login" />; // Redirect to the login page
  }

  return null; // Render nothing while logging out
}
