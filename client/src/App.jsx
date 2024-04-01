import React, { useState } from 'react';
import { Navbar, Welcome, Footer, Services, Transactions } from "./components";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleLogin = (username, password) => {
    console.log("Logging in...");
    if (username === "admin" && password === "admin") {
      setLoggedIn(true);
    } else {
      alert("Invalid username or password");
    }
  };

  const handleSignUp = () => {
    setShowSignUp(true);
  };

  const handleSignUpSuccess = () => {
    setShowSignUp(false);
  };

  return (
    <div className="min-h-screen">
      {!loggedIn && !showSignUp ? (
        <Login onLogin={handleLogin} onSignUp={handleSignUp} />
      ) : (
        <>
          {showSignUp ? (
            <SignUp onSignUp={handleSignUp} onSignUpSuccess={handleSignUpSuccess} />
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
        </>
      )}
    </div>
  );
};

export default App;
