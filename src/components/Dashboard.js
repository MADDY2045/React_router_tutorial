import React from 'react';

const Dashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem('auth');
    window.location.href = '/login'; // Redirect to login after logout
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
