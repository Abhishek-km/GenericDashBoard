import React, { createContext, useState, ReactNode, useContext } from "react"; // Added useContext

interface AuthContextType {
    user: string | null;
    login: (username: string) => void;
    logout: () => void;
    storetoken: (token: string) => void; // Add storetoken to the interface
}

export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<string | null>(null);

    const login = (username: string) => {
        setUser(username);
        // Store token in localStorage or cookies if needed
    };

    const logout = () => {
        setUser(null);
        // Remove token from storage
    };

    const storetoken = (token: string) => {
        localStorage.setItem("token", token); // Store token in local storage
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, storetoken }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext); // Correctly use useContext
};

export default AuthProvider;