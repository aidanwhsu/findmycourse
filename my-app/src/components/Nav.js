import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    if (path === '/' || path === '/home') {
      return location.pathname === '/' || location.pathname === '/home';
    }
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          FindMyCourse
        </Link>
        
        <button className="nav-toggle" onClick={toggleMenu}>
          ☰
        </button>
        
        <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/about" 
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/courses" 
              className={`nav-link ${isActive('/courses') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;