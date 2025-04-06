import React, { createContext, useState, useContext, useEffect } from "react";

// Define User and AuthContext types
interface User {
  userID: string;
  username:string;
  type: string;
}

interface AuthContextType {
  user: User | null;
  login: (userID: string,username:string, type: string, token: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const isAuthenticated = !!user; // Returns true if user is logged in

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setUser(null); // Auto logout if token is missing
    }
  }, []);

  const login = (userID: string, username:string, type: string, token: string) => {
    const userData: User = {userID,username, type};
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook for using authentication
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

export default AuthProvider;
