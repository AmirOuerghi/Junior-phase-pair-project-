// Navbar.jsx
import React from 'react';
import '../NavBar.css';

const Navbar = ({ onChangeView }) => {
  const views = ['Home', 'Jobs', 'AddJob', 'Help', 'About']; // Include 'Help' in the views

  return (
    <header>
      <div className="logo">Forsa</div>

      <nav>
        <ul>
          {views.map(view => (
            <li key={view}>
              <a href="#" onClick={() => onChangeView(view)}>
                {view}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <label htmlFor="nav_check" className="hamburger">
        <div></div>
        <div></div>
        <div></div>
      </label>
    </header>
  );
};

export default Navbar;