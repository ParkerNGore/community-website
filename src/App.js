import React from "react";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import "./App.css";

import NavigationBar from "./components/navigation/NavigationBar";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/">
          <NavigationBar />
        </Route>

        {
          // Used to redirect any user at "/" to "/homepage" to
          // ensure the NavLink activeClass works as expected
        }
        <Route exact path="/">
          <Redirect to="/home-page" />
        </Route>
      </Router>
    </div>
  );
}

export default App;
