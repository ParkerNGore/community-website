import React from "react";

import "./RegisterPage.css";

import { createUser } from "../components/UserService";
import { Redirect } from "react-router-dom";

function RegisterPage() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [timezone, setTimezone] = React.useState("");

  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit(event) {
    console.dir(event);
    event.preventDefault();
    createUser({
      username,
      password,
      timezone,
    })
      .then(() => {
        alert(`Successfully created user: ${username}!`);
        setSubmitted(true);
      })
      .catch((error) => {
        alert(`An error has occured: ${error}`);
      });
  }

  return (
    <div className="register-page-container">
      <main>
        <h1>Welcome to the Register Page!</h1>
        <form className="register-form" onSubmit={(e) => handleSubmit(e)}>
          <label>
            Username:
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>

          <label>
            Password:
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <label>
            Timezone:
            <input
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  );
}

export default RegisterPage;
