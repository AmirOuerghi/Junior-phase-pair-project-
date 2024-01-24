// WelcomeMessage.js
import React from 'react';

const WelcomeMessage = () => {
  // Retrieve user information from local storage
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  return (
    <div>
      <h3>Welcome, {loggedInUser ? loggedInUser.username : 'Guest'}!</h3>
      {/* Add any additional content for the authenticated user */}
    </div>
  );
};

export default WelcomeMessage;
