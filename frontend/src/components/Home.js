import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="homepage-container">
      {/* Hero Section */}
      <div className="hero-section text-center">
        <h1 className="hero-title">Stay ahead of the curve</h1>
        <p className="hero-subtitle">
          NewsNest delivers the latest topics and trends, so you're always in the loop on what matters most.
        </p>
        <div className="hero-buttons">
          <Link to="/register" className="btn btn-primary btn-lg me-2">
            Get started for free
          </Link>
          <Link to="/login" className="btn btn-outline-primary btn-lg">
            Log in to existing account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;