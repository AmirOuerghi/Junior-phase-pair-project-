import React, { useState } from 'react';
import '../LoginForm.css';
import SocialButtons from './SocialButtons';
import Home from './Home'; // Import your Home component

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    const validUsername = 'user@example.com';
    const validPassword = 'password123';

    if (username === validUsername && password === validPassword) {
      alert('Login successful!');
      localStorage.setItem('loggedInUser', JSON.stringify({ username }));
      setLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
  };

  if (isLoggedIn) {
    return <Home />;
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
