// src org/components/CategoryFilter.jsx
import React from 'react';

function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  const containerStyles = {
    background: 'white',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const buttonStyles = (category) => ({
    display: 'block',
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    background: selectedCategory === (category.toLowerCase() === 'all' ? 'all' : category) ? '#2563eb' : '#3b82f6',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background 0.3s',
  });

  return (
    <div style={containerStyles}>
      <h2 style={{ marginTop: 0 }}>Categories</h2>
      <button
        style={buttonStyles('all')}
        onClick={() => onCategoryChange('all')}
        onMouseOver={(e) => e.target.style.background = '#2563eb'}
        onMouseOut={(e) => e.target.style.background = selectedCategory === 'all' ? '#2563eb' : '#3b82f6'}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          style={buttonStyles(category)}
          onClick={() => onCategoryChange(category)}
          onMouseOver={(e) => e.target.style.background = '#2563eb'}
          onMouseOut={(e) => e.target.style.background = selectedCategory === category ? '#2563eb' : '#3b82f6'}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;