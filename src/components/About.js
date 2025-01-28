import React from 'react';
import './About.css'; // Link to the CSS file

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <img
          src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68" // Replace with the actual image URL
          alt="About us"
          className="about-image"
        />
        <div className="about-content">
          <h1>About Us</h1>
          <p>
            Welcome to our blog platform! Here, we celebrate the art of beauty and fashion, offering
            insights, trends, and tips to empower individuals to express their unique style. Whether
            you're looking for the latest fashion trends, skincare tips, or makeup tutorials, our
            platform is dedicated to keeping you informed and inspired.
          </p>
          <p>
            Join us on this journey of creativity and self-expression. Let's redefine beauty and fashion
together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;