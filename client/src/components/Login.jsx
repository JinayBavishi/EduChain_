import React, { useState, useEffect } from 'react';

const Login = ({ onLogin, onSignUp }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Fetch user data from JSON file
    fetch('/src/components/users.json')
    .then(response => response.json())
      .then(data => {
        console.log('Fetched user data:', data);
        setUserData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []); 

  const handleLogin = (e) => {
    e.preventDefault();
    // Find user in userData array with matching username and password
    const user = userData.find(user => user.username === username && user.password === password);
    if (user) {
      console.log("IN");
      onLogin(user.username, user.password);

    } else {
      alert(`Invalid username or password: Username - ${username}, Password - ${password}`);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#222' }}>
      <form style={{ backgroundColor: '#333', padding: '20px', borderRadius: '8px' }} onSubmit={handleLogin}>
        <h2 style={{ color: '#fff' }}>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: '100%', marginBottom: '10px', padding: '10px', border: 'none', borderRadius: '4px', backgroundColor: '#444', color: '#fff' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', marginBottom: '10px', padding: '10px', border: 'none', borderRadius: '4px', backgroundColor: '#444', color: '#fff' }}
        />
        <button
          type="submit"
          style={{ width: '100%', padding: '10px', border: 'none', borderRadius: '4px', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer', marginBottom: '10px' }}
        >
          Login
        </button>
        <button
          type="button"
          onClick={onSignUp}
          style={{ width: '100%', padding: '10px', border: 'none', borderRadius: '4px', backgroundColor: '#28a745', color: '#fff', cursor: 'pointer' }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Login;
