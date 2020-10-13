import React from "react";

import "./Register.css";

import AddEditModel from "../components/forms/AddEditModel";

function RegisterPage() {
  return (
    <div className="register-container">
      <main>
        <h1>Welcome to the Register Page!</h1>
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
              inputType: "password",
            },
            timezone: {
              label: "Timezone",
              defaultValue: "",
              inputType: "text",
            },
          }}
          label={"User"}
          method={"POST"}
          redirectURL={"/user-profile"}
        />
      </main>
    </div>
  );
}

export default RegisterPage;
