import React from 'react';
import LoginForm from './components/LoginForm.jsx';
import '@fortawesome/fontawesome-free/css/all.css'; // Import Font Awesome styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles


function App() {
  const isLoggedIn = !!localStorage.getItem('loggedInUser');
  console.log('isLoggedIn:', isLoggedIn);

  return (
    <div>
           <LoginForm />

    </div>
  );
}

export default App;
