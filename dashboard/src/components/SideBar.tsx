import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideBar.css'; // Import the CSS for styling

export default function SideBar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Menu</h2>
      <ul className="sidebar-menu">
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? 'sidebar-link active' : 'sidebar-link')}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/accesscontrol"
            className={({ isActive }) => (isActive ? 'sidebar-link active' : 'sidebar-link')}
          >
            Access Control
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/search"
            className={({ isActive }) => (isActive ? 'sidebar-link active' : 'sidebar-link')}
          >
            Search
          </NavLink>
        </li>
      </ul>
    </div>
  );
}