import React from "react";
import { NavLink } from "react-router-dom";
import "./SideBar.css"; // Import the CSS for styling

export default function SideBar() {
  // Sidebar items stored in an array
  const sidebarItems = [
    { name: "Dashboard", path: "/Dashboard" },
    { name: "Access Control", path: "/AccessControl" },
    { name: "Search", path: "/Search" }
  ];

  return (
    <div className="d-flex flex-column bg-light vh-100 p-3" style={{ width: "250px" }}>
      <ul className="nav flex-column">
        {sidebarItems.map((item, index) => (
          <li key={index} className="nav-item mb-2">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `btn w-100 nav-link d-flex align-items-center ${isActive ? "active-link" : "text-dark"}`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}