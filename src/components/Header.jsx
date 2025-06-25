import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header id="home" className="header fade-in">
      <div className="container">
        <div className="header-content">
          <h1 className="header-title">
            Hi, I'm <span>Rashan</span>
          </h1>
          <h2 className="header-subtitle">Senior Software Engineer</h2>
          <p className="header-text">
            I build exceptional digital experiences with modern technologies
          </p>
          <a href="#contact" className="btn cta-btn">
            Contact Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;