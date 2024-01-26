import React from 'react';
import LoginForm from './components/LoginForm.jsx';
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
