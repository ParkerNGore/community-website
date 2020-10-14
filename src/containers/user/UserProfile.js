import React from "react";
import AddEditButtons from "../../components/forms/AddEditButtons";

import ModelList from "../../components/ModelList";

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
        <AddEditButtons
          addURL={"/user-profile/register"}
          addButtonDisplay={"Create"}
          editURL={"/user-profile/edit-user"}
          editButtonDisplay={"Edit"}
        />
      </main>
    </div>
  );
}

export default UserProfile;
