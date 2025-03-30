import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Home.css';

export default function Home() {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="home-page">
      <h1>Welcome to the Home Page</h1>
      <button onClick={() => navigate('/about')}>Go to About Page</button> {/* Use navigate to go to another page */}
      <p>This is a simple home page.</p>
      <p>Click the button above to navigate to the About page.</p>
      <p>Here you can add more content or components as needed.</p>
    </div>
  );
}