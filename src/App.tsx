import React, { useState, useEffect } from "react";
import "./App.css";
import Auth from "./components/auth/Auth";
import HomePage from "./components/pages/HomePage";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [sessionToken, setSessionToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token") || "{}");
    }
  }, []);

  // Updating token
  const updateToken = (newToken: any) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log(newToken);
  };

  // 1. Create a get request that tells us whether our token belongs to an admin
        // get request that finds a user and sends back a user is an admin or not (SERVER)
  // 2. Fetch from that endpoint when the app loads
  // 3. store if user is an admin in a state variable
  // 4. conditionally render "stuff" based on isAdmin

  // Clearing token on logout
  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
  };

  const protectedViews = () => {
    return sessionToken === localStorage.getItem("token") ? (
      <HomePage clickLogout={clearToken} token={sessionToken} />
    ) : (
      <Auth updateToken={updateToken} />
    );
  };

  return (
    <div className="App">
      <Router>{protectedViews()}</Router>
    </div>
  );
}

export default App;
