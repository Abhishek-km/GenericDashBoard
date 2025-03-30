import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer footer-bottom">
      <p>
        &copy; {new Date().getFullYear()} PropertyManager. All rights reserved.
      </p>
    </footer>
  );
}
