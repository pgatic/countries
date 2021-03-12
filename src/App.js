import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// pages import
import Home from "./pages/Home";
import SingleCountry from "./pages/SingleCountry";
// import components
import Navbar from "./components/Navbar";

// set default theme or get existing from local storage
const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }

  return theme;
};

function App() {
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Router>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/country/:code">
          <SingleCountry />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
