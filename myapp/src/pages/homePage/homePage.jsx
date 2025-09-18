import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../../components/navigation/navigation.jsx';
import Product from '../../components/product/product.jsx';
import './homePage.css';

const HomePage = () => {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const isUserLoggedIn = localStorage.getItem("isLoggedIn");
    
    if (isUserLoggedIn !== "true") {
      navigate("/");
    }
  }, [navigate]);

  const addItemToCart = (product) => {
    setCartCount(previousCount => previousCount + 1);
    console.log('Added to cart:', product.name);
  };

  return (
    <div className="home-page-container">
      <Navigation cartCount={cartCount} />
      <Product onAddToCart={addItemToCart} />
    </div>
  );
};

export default HomePage;