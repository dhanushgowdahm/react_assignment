import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './navigation.css';

const Navigation = ({ cartCount }) => {
  const navigate = useNavigate();

  const userLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    navigate("/");
  };

  const userEmail = localStorage.getItem("userEmail");

  return (
    <nav className="navigation-container">
      <div className="nav-left">
        <h2 className="brand-name">My Store</h2>
      </div>
      
      <div className="nav-right">
        <span className="user-welcome">Welcome, {userEmail}</span>
        
        <div className="cart-container">
          <div className="cart-icon">
            🛒
            {cartCount > 0 && (
              <span className="cart-count">{cartCount}</span>
            )}
          </div>
        </div>
        
        <button onClick={userLogout} className="logout-button">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
