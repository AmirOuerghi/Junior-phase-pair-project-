import React from 'react';

const WelcomeMessage = () => {
  return (
    <div>
      <h3>Welcome, {localStorage.getItem('loggedInUser') ? JSON.parse(localStorage.getItem('loggedInUser')).username : 'Guest'}!</h3>
      {/* Add any additional content for the authenticated user */}
    </div>
  );
};

export default WelcomeMessage;
