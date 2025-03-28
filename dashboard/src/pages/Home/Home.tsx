import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Home.css';

export default function Home() {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to PropertyManager</h1>
          <p className="hero-subtitle">
            Simplify the way you manage your housing properties with our all-in-one solution.
          </p>
          <button className="btn btn-primary" onClick={() => navigate('/register')}>
            Get Started
          </button>
        </div>
        <div className="hero-image">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_1280.jpg"
            alt="Housing Management"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2 className="section-title">Our Services</h2>
        <div className="services-container">
          <div className="service-card" style={{backgroundColor:"skyblue"}}>
            <h3>Property Listings</h3>
            <p>Manage and showcase your properties with ease.</p>
          </div>
          <div className="service-card" style={{backgroundColor:"SKYBLUE"}}>
            <h3>Tenant Management</h3>
            <p>Keep track of tenants, leases, and payments effortlessly.</p>
          </div>
          <div className="service-card" style={{backgroundColor:"SKYBLUE"}}>
            <h3>Maintenance Requests</h3>
            <p>Streamline maintenance requests and track progress in real-time.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section">
        <h2>Ready to Simplify Property Management?</h2>
        <p>Join thousands of property managers who trust us to streamline their operations.</p>
        <button className="btn btn-secondary" onClick={() => navigate('/contact')}>
          Contact Us
        </button>
      </section>
    </div>
  );
}