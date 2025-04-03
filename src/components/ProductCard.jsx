// src org/components/ProductCard.jsx
import React from 'react';

function ProductCard({ product, onAddToCart }) {
  const cardStyles = {
    background: 'white',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  };

  const imageStyles = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  };

  const buttonStyles = {
    background: '#10b981',
    color: 'white',
    padding: '8px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background 0.3s',
    width: '100%',
    marginTop: '10px',
  };

  const priceStyles = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#374151',
    margin: '10px 0',
  };

  return (
    <div style={cardStyles}>
      <img src={product.image} alt={product.name} style={imageStyles} />
      <h3 style={{ margin: '10px 0' }}>{product.name}</h3>
      <p style={priceStyles}>₹{product.price}</p>
      <p style={{ fontSize: '0.9rem', color: '#6b7280' }}>{product.description}</p>
      <button
        onClick={() => onAddToCart(product)}
        style={buttonStyles}
        onMouseOver={(e) => e.target.style.background = '#059669'}
        onMouseOut={(e) => e.target.style.background = '#10b981'}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;