// src org/components/Cart.jsx
import React from 'react';

function Cart({ items, onRemoveFromCart }) {
  const cartStyles = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    background: 'white',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '300px',
    zIndex: 1000,
  };

  const cartItemStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
    padding: '5px',
    borderBottom: '1px solid #e5e7eb',
  };

  const buttonStyles = {
    background: '#ef4444',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background 0.3s',
  };

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={cartStyles}>
      <h3 style={{ marginTop: 0 }}>Cart ({items.length} items)</h3>
      {items.map((item, index) => (
        <div key={index} style={cartItemStyles}>
          <span>{item.name} - ₹{item.price}</span>
          <button
            onClick={() => onRemoveFromCart(index)}
            style={buttonStyles}
            onMouseOver={(e) => e.target.style.background = '#dc2626'}
            onMouseOut={(e) => e.target.style.background = '#ef4444'}
          >
            Remove
          </button>
        </div>
      ))}
      <div style={{ marginTop: '15px', fontWeight: 'bold' }}>
        Total: ₹{total}
      </div>
    </div>
  );
}

export default Cart;