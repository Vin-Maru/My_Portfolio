import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './styles/header.css';
import Logo from './assets/logo.jpg';
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  const [isNavVisible, setNavVisible] = useState(false);
  const navRef = useRef(null);
  const togglerRef = useRef(null);

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target) && !togglerRef.current.contains(event.target)) {
      setNavVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="navbar text-white p-3">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="upper-logo">
          <Link to="/">
            <img src={Logo} alt="My profile" className="logo" />
          </Link>
        </div>
        <button
          ref={togglerRef}
          className="navbar-toggler"
          type="button"
          onClick={() => setNavVisible(!isNavVisible)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          ref={navRef}
          className={`nav-links ${isNavVisible ? 'show' : ''}`}
        >
          <Link className="nav-link" to="/" onClick={() => setNavVisible(false)}>
            <FaHome className="nav-icon" /> Home
          </Link>
          <Link className="nav-link" to="/about" onClick={() => setNavVisible(false)}>
            <FaUser className="nav-icon" /> About
          </Link>
          <Link className="nav-link" to="/projects" onClick={() => setNavVisible(false)}>
            <FaProjectDiagram className="nav-icon" /> Projects
          </Link>
          <Link className="nav-link" to="/contact" onClick={() => setNavVisible(false)}>
            <FaEnvelope className="nav-icon" /> Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
