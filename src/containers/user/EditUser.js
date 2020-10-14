import React from "react";

import AddEditModel from "../../components/forms/AddEditModel";
import { useParams } from "react-router-dom";

function EditUser() {
  let { id } = useParams();

  return (
    <div className="edit-user-container">
      <main>
        <AddEditModel
          reference={{
            username: {
              label: "Username",
              defaultValue: "",
              inputType: "text",
            },
            password: {
              label: "Password",
              defaultValue: "",
              inputType: "text",
            },
            timezone: {
              label: "Timezone",
              defaultValue: "",
              inputType: "text",
            },
          }}
          label={"User"}
          method={"PUT"}
          redirectURL={"/user-profile"}
          id={id}
        />
      </main>
    </div>
  );
}

export default EditUser;
