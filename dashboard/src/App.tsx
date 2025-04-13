import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouting from "./routing/AppRouting";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import { useAuth } from "./contexts/Auth"; // Import useAuth

function App() {
  const { user, logout } = useAuth() || {}; // Destructure user and logout from useAuth

  return (
    <div className="App">
      <Router>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          {!user ? <Header /> : <></>} {/* Header component */}
          <div style={{ display: "flex", flex: 1 }}>
            {" "}
            {/* Main content area */}
            {user ? <SideBar /> : <></>} {/* Sidebar on the left */}
            <div style={{ flex: 1, padding: "20px" }}>
              {" "}
              {/* Content area on the right */}
              <AppRouting /> {/* Render the routes or data here */}
            </div>
          </div>
          <Footer /> {/* Footer component */}
        </div>
      </Router>
    </div>
  );
}

export default App;
