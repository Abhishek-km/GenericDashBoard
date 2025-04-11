import React from "react";
import { NavLink } from "react-router-dom";
import "./SideBar.css"; // Import the CSS for styling
import { useAuth } from "../contexts/Auth";

export default function SideBar() {
  const { user } = useAuth(); // Access the logged-in user's data

  // Always include Dashboard
  const baseItems = [{ name: "Dashboard", path: "/Dashboard" }];

  // Create sidebar items from permissions
  const permissionItems = (user?.permission || []).map((perm) => ({
    name: perm.moduleName,
    path: `/${perm.moduleName.replace(/\s+/g, "")}`,
  }));

  // Add Access Control if any permission has canRead = true
  const showAccessControl = user?.permission?.some((perm) => perm.canRead);
  const accessControlItem = showAccessControl
    ? [{ name: "Access Control", path: "/AccessControl" }]
    : [];

  // Final sidebar items
  const sidebarItems = [...baseItems, ...permissionItems, ...accessControlItem];

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
