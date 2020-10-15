import React from "react";
import MainContainersSwitch from "./MainContainersSwitch";
import UserProfileSwitch from "./UserProfileSwitch";

import NavigationBar from "../../components/navigation/NavigationBar";
import { BrowserRouter as Router, Route } from "react-router-dom";

function MainSwitch() {
  return (
    <Router>
      <Route path="/">
        <NavigationBar />
      </Route>
      {
        // Used to redirect any user at "/" to "/homepage" to
        // ensure the NavLink activeClass works as expected
      }
      {/* 
      <Switch>
        <Route exact path="/">
          <Redirect to="/home-page" />
        </Route>
      </Switch> */}

      <MainContainersSwitch />

      <UserProfileSwitch />
    </Router>
  );
}

export default MainSwitch;
