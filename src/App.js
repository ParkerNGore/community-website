import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch,
} from "react-router-dom";
import "./App.css";

import NavigationBar from "./components/navigation/NavigationBar";
import HomePage from "./containers/HomePage";
import Forum from "./containers/Forum";
import Calendar from "./containers/Calendar";
import NewsHub from "./containers/NewsHub";
import GroupFinder from "./containers/GroupFinder";
import AboutUs from "./containers/AboutUs";
import UserProfile from "./containers/UserProfile";

function App() {
  return (
    <div className="App">
      <div className="page-background">
        <Router>
          <Route path="/">
            <NavigationBar />
          </Route>
          {
            // Used to redirect any user at "/" to "/homepage" to
            // ensure the NavLink activeClass works as expected
          }

          <Switch>
            <Route exact path="/">
              <Redirect to="/home-page" />
            </Route>

            <Route path="/home-page">
              <HomePage />
            </Route>

            <Route path="/forum">
              <Forum />
            </Route>

            <Route path="/calendar">
              <Calendar />
            </Route>

            <Route path="/news-hub">
              <NewsHub />
            </Route>

            <Route path="/group-finder">
              <GroupFinder />
            </Route>

            <Route path="/about-us">
              <AboutUs />
            </Route>

            <Route path="/user-profile">
              <UserProfile />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
