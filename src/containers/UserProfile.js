import React from "react";
import { Redirect } from "react-router-dom";

import ModelList from "../components/ModelList";

function UserProfile() {
  const [loginPressed, setLoginPressed] = React.useState(false);
  const [registerPressed, setRegisterPressed] = React.useState(false);
  const [editUserPressed, setEditUserPressed] = React.useState(false);

  const [editUserID, setEditUserID] = React.useState(1);
  return (
    <div className="user-profile-container">
      <main>
        <h1>Welcome to User Profile!</h1>

        <ModelList label={"User"} />
      </main>
    </div>
  );
}

export default UserProfile;
