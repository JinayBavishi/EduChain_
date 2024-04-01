import React, { useState } from 'react';
import { Navbar, Welcome, Footer, Services, Transactions } from "./components";
import Login from "./components/login";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    // Simulating login logic with hardcoded credentials
    if (username === "admin" && password === "admin") {
      setLoggedIn(true); // Set loggedIn to true upon successful login
    } else {
      alert("Invalid username or password"); // Alert user for incorrect credentials
    }
  };

  return (
    <div className="min-h-screen">
      {!loggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <div className="gradient-bg-welcome">
            <Navbar />
            <Welcome />
          </div>
          <Services />
          <Transactions />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
