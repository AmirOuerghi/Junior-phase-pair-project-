import React, { useState } from 'react';
import '../LoginForm.css'; // Import your existing CSS file
import SocialButtons from './SocialButtons';
import Home from './Home'; 
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    const validUsername = 'user@example.com';
    const validPassword = '123';

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
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap"
        rel="stylesheet"
      />

      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
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
        <div className="social">
          <div className="go">
            <i className="fab fa-google"></i> Google
          </div>
          <div className="fb">
            <i className="fab fa-facebook"></i> Facebook
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;

