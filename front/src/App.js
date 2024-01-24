// App.js
import React from 'react';
import LoginForm from './components/LoginForm';
import WelcomeMessage from './components/WelcomeMessage';

function App() {
  // Check if the user is logged in (based on local storage)
  const isLoggedIn = !!localStorage.getItem('loggedInUser');

  return (
    <div>
      {isLoggedIn ? (
        <WelcomeMessage />
      ) : (
        <LoginForm />
      )}
    </div>
  );
}

export default App;
