import React, { useState, useEffect } from 'react';
import './Component.css';
import logo from 'K:/CODING/frontend/App/spotify/src/assets/logo.svg';
import search from 'K:/CODING/frontend/App/spotify/src/assets/search.svg';
import home from 'K:/CODING/frontend/App/spotify/src/assets/home.svg';
const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left section */}
      <div className="nav-left">
        <img src={logo} alt="Spotify" className="nav-logo" />
        <button className="nav-button">
          <img src={home} alt="Home" className="nav-img" />
          <span>Home</span>
        </button>
      </div>

      {/* Center section */}
      <div className="nav-center">
        <div className="search-container">
          <div className="search-icon">
            <img src={search} alt="Search" className="nav-img" />
          </div>
          <input
            type="search"
            placeholder="What do you want to listen to?"
            className="search-input"
          />
        </div>
      </div>

      {/* Right section */}
      <div className="nav-right">
        <button className="signup-button">Sign up</button>
        <button className="login-button">Log in</button>
      </div>
    </nav>
  );
};

export default Navbar;