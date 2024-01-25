// Navbar.jsx
import React, { useState } from 'react';
import '../NavBar.css'; // Assuming you have a CSS file for styling
import About from './About';
import AddJob from './AddJob'; // Import the AddJob component

const Navbar = ({ onChangeView }) => {
  const [showAbout, setShowAbout] = useState(false);
  const [showAddJob, setShowAddJob] = useState(false);

  const handleAboutClick = () => {
    setShowAbout(!showAbout);
    onChangeView('About'); // Update the view when About is clicked
  };

  const handleAddJobClick = () => {
    setShowAddJob(!showAddJob);
    onChangeView('AddJob'); // Update the view when AddJob is clicked
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
          <li>
            <a href="#" onClick={handleAddJobClick}>
              Add Job
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
      {showAddJob && <AddJob />}
    </header>
  );
};

export default Navbar;
