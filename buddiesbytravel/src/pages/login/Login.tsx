import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === '' || password === '') {
      alert('Please fill in all fields');
      return;
    }
  };

  return (
    <div className="login-container">
      <h1>Welcome to BuddiesByTravel</h1>
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="input"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="input"
          /> <br /><br />
          <button type="submit" className="button">
          <a href="/pages/home/home">Login</a>
            
          </button>
        </form>
      </div>
      <div className="register-button">
        <button>Register</button>
      </div>
    </div>
  );
};

export default Login;
