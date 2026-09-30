import React from 'react';

function Header() {
  const developerName = "Bhashitha"; // Real-world data variable

  return (
    <header style={{ padding: '15px', backgroundColor: '#1a73e8', color: 'white' }}>
      <h2>DevTask Tracker</h2>
      <p>Welcome back, {developerName}! (Intern Developer)</p>
    </header>
  );
}

export default Header;