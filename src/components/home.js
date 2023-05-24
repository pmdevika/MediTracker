import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault(); 

 
    const usernameExists = checkUsernameExists(username);

    if (!usernameExists) {
      
      window.location.href = './createacount';
    } else {
      if (password !== 'validpassword') {
     
        window.location.href = './createacount';
      } else {
        // Continue with successful login logic
        
      }
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value); 
  };

  const checkUsernameExists = (username) => {
   
    return false;
  };

  return (
    <div>
      <div id="login1">
        <div className="loginpage">
          <div className="loginframe">
            <h1>User Login</h1>
            <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                className="input1"
                placeholder="username"
                value={username}
                onChange={handleUsernameChange}
              />
              <br />
              <input
                type="password"
                className="input1"
                placeholder="password"
                value={password}
                onChange={handlePasswordChange}
              />
              <br />
              <button type="submit" className="button">
                Sign in
              </button>
              <br />
              <div className="createacount">
                <Link to="/createacount" style={{ textDecoration: 'none' }}>
                  Create Account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
