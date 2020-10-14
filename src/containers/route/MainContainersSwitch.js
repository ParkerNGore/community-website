import React from "react";

import { Route, Switch } from "react-router-dom";

import HomePage from "../../containers/HomePage";
import Forum from "../../containers/Forum";
import Calendar from "../../containers/calendar/Calendar";
import NewsHub from "../../containers/NewsHub";
import GroupFinder from "../../containers/GroupFinder";
import AboutUs from "../../containers/AboutUs";

import UserProfile from "../../containers/user/UserProfile";

function MainContainersSwitch() {
  return (
    <Switch>
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

      <Route exact path="/user-profile">
        <UserProfile />
      </Route>
    </Switch>
  );
}

export default MainContainersSwitch;
