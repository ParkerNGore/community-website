import React from "react";
import AddEditButtons from "../../components/forms/AddEditButtons";

import ModelList from "../../components/ModelList";

function UserProfile() {
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
          label={"User"}
        />
      </main>
    </div>
  );
}

export default UserProfile;
