import React from 'react';

const Login = () => {
  const handleLogin = () => {
    localStorage.setItem('auth', 'true');
    window.location.href = '/dashboard'; // Redirect to dashboard after login
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
