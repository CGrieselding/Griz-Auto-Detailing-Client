import React, { useState, useEffect } from "react";
import "./App.css";
import Auth from "./components/auth/Auth";
import HomePage from "./components/pages/HomePage";

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

  // Clearing token on logout
  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
  };

  const protectedViews = () => {
    return sessionToken === localStorage.getItem("token") ? (
      <>
        <HomePage clickLogout={clearToken} token={sessionToken} />
      </>
    ) : (
      <Auth updateToken={updateToken} />
    );
  };

  return <div className="App">{protectedViews()}</div>;
}

export default App;
