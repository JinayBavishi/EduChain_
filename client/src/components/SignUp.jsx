import React, { useState } from 'react';
import axios from 'axios';

const SignUp = ({ onSignUpSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [metamaskAddress, setMetamaskAddress] = useState('');
  axios.defaults.baseURL = 'http://localhost:5000';

  const handleSignUp = async (e) => {
    e.preventDefault();
    const newUser = { username, password, metamaskAddress };

    try {
      const response = await axios.post('/api/signup', newUser);
      console.log('Response:', response.data);
      onSignUpSuccess();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#222' }}>
      <form style={{ backgroundColor: '#333', padding: '20px', borderRadius: '8px' }} onSubmit={handleSignUp}>
        <h2 style={{ color: '#fff' }}>Sign Up</h2>
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
        <input
          type="text"
          placeholder="MetaMask Address"
          value={metamaskAddress}
          onChange={(e) => setMetamaskAddress(e.target.value)}
          style={{ width: '100%', marginBottom: '10px', padding: '10px', border: 'none', borderRadius: '4px', backgroundColor: '#444', color: '#fff' }}
        />
        <button
          type="submit"
          style={{ width: '100%', padding: '10px', border: 'none', borderRadius: '4px', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
