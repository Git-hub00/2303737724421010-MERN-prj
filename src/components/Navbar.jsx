// src org/components/Navbar.jsx
import React from 'react';

function Navbar({ setSearchQuery, cartItems }) {
  const navStyles = {
    backgroundColor: '#1f2937',
    color: 'white',
    padding: '15px 20px',
    position: 'fixed',
    top: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
  };

  const inputStyles = {
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '200px',
  };

  const cartCountStyles = {
    backgroundColor: '#ef4444',
    color: 'white',
    padding: '2px 6px',
    borderRadius: '50%',
    fontSize: '0.8rem',
    marginLeft: '8px',
  };

  return (
    <nav style={navStyles}>
      <h1 style={{ margin: 0 }}>Grocery List</h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => setSearchQuery(e.target.value)}
          style={inputStyles}
        />
        <div>
          Cart
          <span style={cartCountStyles}>{cartItems.length}</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;