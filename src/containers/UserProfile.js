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

        <button type="button" onClick={(e) => setLoginPressed(true)}>
          Login
        </button>

        <button type="button" onClick={(e) => setRegisterPressed(true)}>
          Register
        </button>

        <button type="button" onClick={(e) => setEditUserPressed(true)}>
          EditUser
        </button>

        {loginPressed && <Redirect to={"/user-profile/login"} push={true} />}

        {registerPressed && (
          <Redirect to={"/user-profile/register"} push={true} />
        )}

        <input
          value={editUserID}
          onChange={(e) => {
            setEditUserID(e.target.value);
          }}
          type="text"
        />
        {editUserPressed && (
          <Redirect to={`/user-profile/edit-user/${editUserID}`} push={true} />
        )}
      </main>
    </div>
  );
}

export default UserProfile;
