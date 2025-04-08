import React from "react";
import { NavLink } from "react-router-dom";
import "./SideBar.css"; // Import the CSS for styling
import { useAuth } from "../contexts/Auth";

export default function SideBar() {
  const { user } = useAuth(); // Access the logged-in user's data

  // Dynamically generate sidebar items based on user permissions
  const sidebarItems = [
    { name: "Dashboard", path: "/Dashboard" }, // Always include Dashboard
    ...(user?.permission.map((perm) => ({
      name: perm.moduleName,
      path: `/${perm.moduleName.replace(/\s+/g, "")}`, // Generate a path based on the module name
    })) || []),
  ];

  return (
    <div
      className="d-flex flex-column bg-light vh-100 p-3"
      style={{ width: "250px" }}
    >
      <ul className="nav flex-column">
        {sidebarItems.map((item, index) => (
          <li key={index} className="nav-item mb-2">
            <NavLink
              to={item.path}
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
      </ul>
    </div>
  );
}
