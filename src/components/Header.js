/*import React, { useState, useEffect } from 'react';
import '../Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isMenuOpen && !event.target.closest('.menu-icon') && !event.target.closest('.mobile-menu')) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="header-logo">
        <a href="/">MyPortfolio</a>
      </div>

      {/* Desktop Navigation */
      /*<nav className="desktop-nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#qualifications">Qualifications</a></li>
          <li><a href="#certificates">Certificates</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Mobile Menu Toggle *//*
      <div 
        className="menu-icon"
        onClick={toggleMenu}
        aria-label="Toggle mobile menu" 
        aria-expanded={isMenuOpen ? 'true' : 'false'}
      >
        <i className="fas fa-bars"></i>
      </div>*/

      /* Mobile Navigation *//*
      {isMenuOpen && (
        <nav className="mobile-menu">
          <a href="#home" onClick={toggleMenu}>Home</a>
          <a href="#about" onClick={toggleMenu}>About</a>
          <a href="#qualifications" onClick={toggleMenu}>Qualifications</a>
          <a href="#certificates" onClick={toggleMenu}>Certificates</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </nav>
      )}
    </header>
  );
};

export default Header;*/
import React, { useState, useEffect } from 'react';
import '../Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isMenuOpen && !event.target.closest('.menu-icon') && !event.target.closest('.mobile-menu')) {
        setIsMenuOpen(false);
      }
    };

    // Close mobile menu when pressing the "Esc" key
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('keydown', handleEscKey);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="header-logo">
        <a href="/">MyPortfolio</a>
      </div>

      {/* Desktop Navigation */}
      <nav className="desktop-nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#qualifications">Qualifications</a></li>
          <li><a href="#certificates">Certificates</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Mobile Menu Toggle */}
      <div 
        className="menu-icon"
        onClick={toggleMenu}
        aria-label="Toggle mobile menu" 
        aria-expanded={isMenuOpen ? 'true' : 'false'}
      >
        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="mobile-menu">
          <a href="#home" onClick={toggleMenu}>Home</a>
          <a href="#about" onClick={toggleMenu}>About</a>
          <a href="#qualifications" onClick={toggleMenu}>Qualifications</a>
          <a href="#certificates" onClick={toggleMenu}>Certificates</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </nav>
      )}
    </header>
  );
};

export default Header;

