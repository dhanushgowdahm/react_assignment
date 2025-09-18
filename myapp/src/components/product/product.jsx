import { useState } from 'react';
import './product.css';

const Product = ({ onAddToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    {
      id: 1,
      name: "Headphone",
      image: "data:image/jpeg;base64,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",
      description: "High-quality wireless headphones with noise cancellation"
    },
    {
      id: 2,
      name: "Watch",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
      description: "Feature-rich smartwatch with health monitoring"
    },
    {
      id: 3,
      name: "Laptop",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
      description: "Ergonomic aluminum laptop stand for better posture"
    },
    {
      id: 4,
      name: "Keyboard",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
      description: "Compact mechanical keyboard"
    },
    {
      id: 5,
      name: "Mouse",
      image: "data:image/jpeg;base64,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",
      description: "Wireless ergonomic mouse"
    },
    {
      id: 6,
      name: "Speaker",
      image: "data:image/jpeg;base64,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",
      description: "Bluetooth portable speaker"
    }
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addProductToCart = (product) => {
    onAddToCart(product);
  };

  return (
    <div className="product-container">
      <div className="product-header">
        <h1>Our Products</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>
      </div>

      <div className="products-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <div 
              className="product-image"
              onClick={() => addProductToCart(product)}
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="product-img"
              />
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <button 
                className="add-to-cart-btn"
                onClick={() => addProductToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="no-products">
          <p>No products found matching "{searchTerm}"</p>
        </div>
      )}
    </div>
  );
};

export default Product;
