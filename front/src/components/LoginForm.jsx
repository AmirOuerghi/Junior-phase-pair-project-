import React, { useState } from 'react';
import '../LoginForm.css';
import SocialButtons from './SocialButtons';
import Home from './Home'; // Import your Home component

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // In a real application, you would perform actual authentication here.
    // For this example, let's check if the username and password match a predefined value.
    const validUsername = 'user@example.com';
    const validPassword = 'password123';

    if (username === validUsername && password === validPassword) {
      // Authentication successful
      alert('Login successful!');
      // Store user information in local storage
      localStorage.setItem('loggedInUser', JSON.stringify({ username }));
      // Update the login state
      setLoggedIn(true);
    } else {
      // Authentication failed
      alert('Invalid username or password');
    }
  };

  // If logged in, render the Home component
  if (isLoggedIn) {
    return <Home/>;
  }
  return (
    <form className="glass-form">
      <h3>Login Here</h3>

      <label htmlFor="username">Username</label>
      <input
        type="text"
        placeholder="Email or Phone"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="Password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="button" onClick={handleLogin}>
        Log In
      </button>
      <SocialButtons />
    </form>
  );
};

export default LoginForm;
