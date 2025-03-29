import React from 'react';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="not-found-page">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">Oops! The page you are looking for does not exist.</p>
      <a href="/" className="btn btn-home">Go Back to Home</a>
    </div>
  );
}