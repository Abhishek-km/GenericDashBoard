import { NavLink } from 'react-router'
import './Header.css'

export default function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img
            src="https://static.vecteezy.com/system/resources/previews/035/642/255/non_2x/property-dashboard-icon-line-illustration-vector.jpg"
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-text-top me-2"
          />
          <strong>Comp name</strong>
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link " aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/contact">
                ContactUs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/login">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/015/271/968/non_2x/business-man-flat-icon-design-human-resource-and-businessman-icon-concept-man-icon-in-trendy-flat-style-symbol-for-your-web-site-design-logo-app-vector.jpg"
                  alt="Logo"
                  width="30"
                  height="30"
                  className="d-inline-block align-text-top me-2"
                />
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/register">
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
      

  )
}
