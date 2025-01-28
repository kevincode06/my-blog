import React from 'react';
import './Home.css'; // Link to the CSS file

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-container">
        <div className="home-images">
          <div className="image-item">
            <img
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2"
              alt="Creativity"
              className="home-image"
            />
            <p className="image-details">Embrace creativity and let your imagination shine.</p>
          </div>
          <div className="image-item">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              alt="Lifestyle"
              className="home-image"
            />
            <p className="image-details">Discover a lifestyle filled with balance and beauty.</p>
          </div>
          <div className="image-item">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
              alt="Technology"
              className="home-image"
            />
            <p className="image-details">Stay ahead with the latest in technology and innovation.</p>
          </div>
        </div>
        <div className="home-content">
          <h1>Welcome to My Blog</h1>
          <p>
            Dive into a world of insights, stories, and inspiration! Explore our posts and discover a 
            variety of topics that keep you informed and entertained.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
