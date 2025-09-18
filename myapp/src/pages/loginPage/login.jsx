import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import sampledata from "../../credentials/users.js";

const LoginPage = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  useEffect(() => {
    const isUserLoggedIn = localStorage.getItem("isLoggedIn");
    
    if (isUserLoggedIn === "true") {
      navigate("/products");
    }
  }, [navigate]);

  const updateCredentials = (field, value) => {
    setUserCredentials(previousCredentials => ({
      ...previousCredentials,
      [field]: value
    }));
  };

  const checkCredentials = () => {
    const { email, password } = userCredentials;
    
    if (!email.trim() || !password.trim()) {
      alert("Please enter both email and password");
      return false;
    }
    
    return true;
  };

  const findUser = () => {
    const { email, password } = userCredentials;
    
    const authenticatedUser = sampledata.find(
      user => user.email === email && user.password === password
    );
    
    return authenticatedUser;
  };

  const attemptLogin = () => {
    if (!checkCredentials()) {
      return;
    }

    const user = findUser();
    
    if (user) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", userCredentials.email);
      navigate("/products");
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  const submitForm = (event) => {
    event.preventDefault();
    attemptLogin();
  };

  return (
    <div className="login-page-container">
      <div className="login-form-wrapper">
        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">Please sign in to your account</p>
        
        <form onSubmit={submitForm} className="login-form">
          <div className="input-group">
            <label htmlFor="email" className="input-label">Email</label>
            <input
              id="email"
              type="email"
              className="input-field"
              placeholder="Enter your email"
              value={userCredentials.email}
              onChange={(event) => updateCredentials('email', event.target.value)}
              autoComplete="email"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password" className="input-label">Password</label>
            <input
              id="password"
              type="password"
              className="input-field"
              placeholder="Enter your password"
              value={userCredentials.password}
              onChange={(event) => updateCredentials('password', event.target.value)}
              autoComplete="current-password"
              required
            />
          </div>

          <button 
            type="submit"
            className="login-button"
            onClick={attemptLogin}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
