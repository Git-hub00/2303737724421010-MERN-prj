// src org/App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import CategoryFilter from './components/CategoryFilter';
import { products, categories } from './data/products';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cartItems, setCartItems] = useState([]);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleRemoveFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const appStyles = {
    minHeight: '100vh',
    backgroundColor: '#f3f4f6',
    fontFamily: 'Arial, sans-serif',
  };

  const containerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    paddingTop: '80px',
  };

  const contentStyles = {
    display: 'flex',
    gap: '24px',
    padding: '24px',
  };

  return (
    <div style={appStyles}>
      <Navbar setSearchQuery={setSearchQuery} cartItems={cartItems} />
      <div style={containerStyles}>
        <div style={contentStyles}>
          <div style={{ width: '256px' }}>
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>
          <div style={{ flex: 1 }}>
            <ProductList
              products={filteredProducts}
              onAddToCart={handleAddToCart}
            />
          </div>
        </div>
      </div>
      {cartItems.length > 0 && (
        <Cart items={cartItems} onRemoveFromCart={handleRemoveFromCart} />
      )}
    </div>
  );
}

export default App;