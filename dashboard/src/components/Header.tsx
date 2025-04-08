import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/Auth"; // Import useAuth
import "./Header.css"; // Import the CSS for styling

export default function Header() {
  const { user } = useAuth() || {}; // Destructure user and logout from useAuth

  const navbarCollapseRef = useRef<HTMLDivElement | null>(null);

  const handleNavItemClick = () => {
    if (
      navbarCollapseRef.current &&
      navbarCollapseRef.current.classList.contains("show")
    ) {
      navbarCollapseRef.current.classList.remove("show");
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary header-container">
        <div className="container-fluid">
          <img
            src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
            alt="Bootstrap"
            width="30"
            height="24"
          />
          <NavLink className="navbar-brand" to="/">
            Company name
          </NavLink>

          {/* Toggle button for smaller screens */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            ref={navbarCollapseRef}
          >
            {/* Navigation links */}
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  aria-current="page"
                  to="/"
                  onClick={handleNavItemClick}
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/about"
                  onClick={handleNavItemClick}
                >
                  About Us
                </NavLink>
              </li>

              {/* Show Login/Register if no user is logged in */}
              {!user ? (
                <>
                  <li className="nav-item">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                      to="/login"
                      onClick={handleNavItemClick}
                    >
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                      to="/register"
                      onClick={handleNavItemClick}
                    >
                      New Registration
                    </NavLink>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    to="/logout"
                    onClick={handleNavItemClick} // Handle logout logic here
                  >
                    Logout
                  </NavLink>
                </li>
              )}
            </ul>

            {/* Collaboration button */}
            <ul className="navbar-nav ms-3">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "btn btn-primary active" : "btn btn-primary"
                  }
                  to="/contact"
                  role="button"
                  onClick={handleNavItemClick}
                >
                  Let's Collaborate
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
