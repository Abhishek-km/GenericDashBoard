import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Import useNavigate
import "./SideBar.css"; // Import the CSS for styling
import { useAuth } from "../contexts/Auth";

export default function SideBar() {
  const { user } = useAuth(); // Access the logged-in user's data
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  // Always include Dashboard
  const baseItems = [{ name: "Dashboard", path: "/Dashboard" },{ name: "Log Out", path: "/logout" }];

  // Create sidebar items from permissions
  const permissionItems = (user?.permission || []).map((perm) => ({
    name: perm.moduleName,
    path: `/${perm.moduleName.replace(/\s+/g, "")}`,
    moduleId: perm.moduleId, // Include moduleId
    canRead: perm.canRead,
  }));

  // State to track which parent item is expanded
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const handleAccessControlClick = (moduleId: number) => {
    // Navigate to AccessControl page and pass moduleId as state
    navigate("/AccessControl", { state: { moduleId } });
  };

  const toggleExpand = (moduleId: number, path: string) => {
    // Navigate to the parent item's page
    navigate(path);

    // Toggle the expanded state for the clicked item
    setExpandedItem((prev) => (prev === moduleId ? null : moduleId));
  };

  return (
    <div
      className="d-flex flex-column bg-light vh-100 p-3"
      style={{ width: "250px" }}
    >
      <ul className="nav flex-column">
        {/* Render base items like Dashboard */}
        {baseItems.map((item, index) => (
          <li key={index} className="nav-item mb-2">
            <NavLink
              to={item.path}
              end // Ensure exact matching for the Dashboard link
              className={({ isActive }) =>
                `btn w-100 nav-link d-flex align-items-center ${
                  isActive ? "active-link" : "text-dark"
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}

        {/* Render permission-based items */}
        {permissionItems.map((perm, index) => (
          <li key={index} className="nav-item mb-2">
            <button
              className={`btn w-100 nav-link d-flex align-items-center ${
                expandedItem === perm.moduleId ? "active-link" : "text-dark"
              }`}
              onClick={() => toggleExpand(perm.moduleId, perm.path)}
            >
              {perm.name}
            </button>
            {/* Add Access Control as a child if canRead is true and the item is expanded */}
            {perm.canRead && expandedItem === perm.moduleId && (
              <ul className="nav flex-column ms-3">
                <li className="nav-item">
                  <button
                    className="btn w-100 nav-link d-flex align-items-center text-dark"
                    onClick={() => handleAccessControlClick(perm.moduleId)}
                  >
                    Access Control
                  </button>
                </li>
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}