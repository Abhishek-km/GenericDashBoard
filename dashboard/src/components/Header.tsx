import React from 'react'
import { Link } from 'react-router'
import { NavLink } from 'react-router'
import './Header.css'

export default function Header() {
  return (
    <>
        <header>
            <div className="container">
            <div className="container">
                <Link to="/" className="logo">Logo</Link>
            </div>

            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/register">Register</NavLink></li>
                </ul>
            </nav>
            </div>
        </header>
    </>
      

  )
}
