import React from 'react';

function Dashboard() {
  const userDetails = JSON.parse(localStorage.getItem('userDetails'));

  return (
    <div>
      <h1>Welcome to Dashboard, {userDetails.name}!</h1>
      {/* Additional dashboard content can be added here */}
    </div>
  );
}

export default Dashboard;
