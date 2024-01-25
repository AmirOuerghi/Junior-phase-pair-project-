// Navbar.js
import React, { useState } from 'react';
import '../NavBar.css'; // Assuming you have a CSS file for styling
import About from './About';

const Navbar = () => {
  const [showAbout, setShowAbout] = useState(false);

  const handleAboutClick = () => {
    setShowAbout(!showAbout);
  };

  return (
    <header>
      <div className="logo">EVLEARN</div>

      <nav>
        <ul>
          <li>
            <a href="#" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="">Portfolio</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="#" >
              About
            </a>
          </li>
        </ul>
      </nav>
      <label htmlFor="nav_check" className="hamburger">
        <div></div>
        <div></div>
        <div></div>
      </label>

      {showAbout && <About onClick={handleAboutClick}/>}
    </header>
  );
};

export default Navbar;
