// src org/components/ProductList.jsx
import React from 'react';
import ProductCard from './ProductCard';

function ProductList({ products, onAddToCart }) {
  const productListStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
  };

  return (
    <div style={productListStyles}>
      {products.map((product) => (
        <ProductCard
          key={product.name}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;