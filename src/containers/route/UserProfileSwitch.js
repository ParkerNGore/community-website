import React from "react";

import LoginPage from "../../containers/user/Login";
import RegisterPage from "../../containers/user/Register";
import EditUser from "../../containers/user/EditUser";

import { Switch, Route } from "react-router-dom";
import AddEditModel from "../../components/forms/AddEditModel";

function UserProfileSwitch() {
  const reference = {
    username: {
      label: "Username",
      defaultValue: "",
      inputType: "text",
    },
    password: {
      label: "Password",
      defaultValue: "",
      inputType: "password",
    },
    timezone: {
      label: "Timezone",
      defaultValue: "",
      inputType: "text",
    },
  };

  return (
    <Switch>
      <Route
        path="/user-profile/login"
        render={(props) => <AddEditModel {...props} />}
      >
        <LoginPage />
      </Route>

      <Route
        path="/user-profile/register"
        render={(props) => <AddEditModel {...props} />}
      />
      <Route
        path="/user-profile/edit-user/:id"
        render={(props) => <AddEditModel {...props} />}
      />
    </Switch>
  );
}

export default UserProfileSwitch;
