// App.js
import React from 'react';
import LoginForm from './components/LoginForm.jsx';

function App() {
  // Check if the user is logged in (based on local storage)
  const isLoggedIn = !!localStorage.getItem('loggedInUser');
  console.log('isLoggedIn:', isLoggedIn);

  return (
    <div>
           <LoginForm />
       
    </div>
  );
}

export default App;
