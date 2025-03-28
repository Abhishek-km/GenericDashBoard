import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about-page" style={{backgroundColor:"white"}}>
      <section className="about-hero">
        <h1>About Us</h1>
        <p>
          At PropertyManager, we are dedicated to simplifying property management for landlords, tenants, and property managers. 
          Our mission is to provide an all-in-one solution to streamline operations, improve communication, and enhance efficiency.
        </p>
      </section>

      <section className="about-values">
        <h2>Our Values</h2>
        <div className="values-container">
          <div className="value-card" style={{backgroundColor:"#007bff"}}>
            <h3>Innovation</h3>
            <p>We constantly innovate to bring the best solutions to our clients.</p>
          </div>
          <div className="value-card" style={{backgroundColor:"#007bff"}}>
            <h3>Integrity</h3>
            <p>We operate with transparency and honesty in everything we do.</p>
          </div>
          <div className="value-card" style={{backgroundColor:"#007bff"}}>
            <h3>Customer Focus</h3>
            <p>Your satisfaction is our top priority.</p>
          </div>
        </div>
      </section>

      <section className="about-team">
        <h2>Meet Our Team</h2>
        <p>
          Our team is made up of experienced professionals passionate about property management and technology. 
          Together, we work to deliver the best experience for our clients.
        </p>
      </section>
    </div>
  );
}