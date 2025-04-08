import React, { createContext, useState, useContext, useEffect } from "react";

// Define Permission and User types
interface Permission {
  moduleId: number;
  moduleName: string;
  groupId: number;
  groupName: string;
  roleId: number;
  roleName: string;
  canRead: boolean;
  canAdd: boolean;
  canUpdate: boolean;
  canDelete: boolean;
}

interface User {
  userID: string;
  username: string;
  type: string;
  permission: Permission[]; // Changed to an array of Permission objects
}

interface AuthContextType {
  user: User | null;
  login: (
    userID: string,
    username: string,
    type: string,
    token: string,
    permissions: Permission[]
  ) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
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

  const login = (
    userID: string,
    username: string,
    type: string,
    token: string,
    permissions: Permission[]
  ) => {
    const userData: User = { userID, username, type, permission: permissions };
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
