import React from "react";
import { Redirect } from "react-router-dom";

function UserProfile() {
  const [loginPressed, setLoginPressed] = React.useState(() => false);
  const [registerPressed, setRegisterPressed] = React.useState(() => false);

  return (
    <div className="user-profile-container">
      <main>
        <h1>Welcome to User Profile!</h1>

        <button type="button" onClick={(e) => setLoginPressed(true)}>
          Login
        </button>
        <button type="button" onClick={(e) => setRegisterPressed(true)}>
          Register
        </button>

        {loginPressed && <Redirect to={"/user-profile/login"} push={true} />}
        {registerPressed && (
          <Redirect to={"/user-profile/register"} push={true} />
        )}
      </main>
    </div>
  );
}

export default UserProfile;
