import React from "react";

import LoginPage from "../../containers/user/Login";
import RegisterPage from "../../containers/user/Register";
import EditUser from "../../containers/user/EditUser";

import { Switch, Route } from "react-router-dom";

function UserProfileSwitch() {
  return (
    <Switch>
      <Route path="/user-profile/login">
        <LoginPage />
      </Route>
      <Route path="/user-profile/register">
        <RegisterPage />
      </Route>
      <Route path="/user-profile/edit-user/:id">
        <EditUser />
      </Route>
    </Switch>
  );
}

export default UserProfileSwitch;
