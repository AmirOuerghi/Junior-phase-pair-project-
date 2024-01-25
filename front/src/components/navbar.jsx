// Navbar.jsx
import React, { useState } from 'react';
import '../NavBar.css'; // Assuming you have a CSS file for styling
import About from './About';

const Navbar = ({ onChangeView }) => {
  const [showAbout, setShowAbout] = useState(false);

  const handleAboutClick = () => {
    setShowAbout(!showAbout);
    onChangeView('About'); // Update the view when About is clicked
  };

  // Add similar functions for other navigation links

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
            <a href="#" onClick={() => onChangeView('Jobs')}>
              Jobs
            </a>
          </li>
          {/* Add similar lines for other navigation links */}
          <li>
            <a href="#" onClick={handleAboutClick}>
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

      {showAbout && <About onClick={handleAboutClick} />}
    </header>
  );
};

export default Navbar;
