import React from "react";
import { Redirect } from "react-router-dom";

import { references, redirectURLs } from "../forms/ModelReferences";

/**  
    Props:
    
    `addURL` The URL the user should be sent to
    when they click on the create/new/add button

    `addButtonDisplay` The string displayed by the
    create/new/add button

    `editURL` The URL the user should be sent to
    when they click on the edit/change/update button

    `editButtonDisplay` The string displayed by the
    edit/change/update button

    `label` The user type being used
*/

function AddEditButtons({
  addURL,
  addButtonDisplay,
  editURL,
  editButtonDisplay,
  label,
}) {
  const [addPressed, setAddPressed] = React.useState(false);
  const [editPressed, setEditPressed] = React.useState(false);

  const [editID, setEditID] = React.useState(1);

  const { userReference, calendarReference, eventReference } = references;

  return (
    <div className="add-edit-buttons-container">
      <button type="button" onClick={(e) => setAddPressed(true)}>
        {addButtonDisplay}
      </button>
      <button type="button" onClick={(e) => setEditPressed(true)}>
        {editButtonDisplay}
      </button>
      <input
        value={editID}
        onChange={(e) => {
          setEditID(e.target.value);
        }}
        type="text"
      />

      {/* Handling Redirection */}

      {editPressed &&
        label.toLowerCase() === "user" &&
        (console.log("Called User PUT") || (
          <Redirect
            to={{
              pathname: `${editURL}/${editID}`,
              state: {
                reference: userReference,
                label,
                method: "PUT",
                redirectURL: redirectURLs.userRedirectURL,
              },
            }}
            push={true}
          />
        ))}

      {editPressed && label.toLowerCase() === "calendar" && (
        <Redirect
          to={{
            pathname: `${editURL}/${editID}`,
            state: {
              reference: calendarReference,
              label,
              method: "PUT",
              redirectURL: redirectURLs.calendarRedirectURL,
            },
          }}
          push={true}
        />
      )}

      {editPressed && label.toLowerCase() === "event" && (
        <Redirect
          to={{
            pathname: `${editURL}/${editID}`,
            state: {
              reference: eventReference,
              label,
              method: "PUT",
              redirectURL: redirectURLs.eventRedirectURL,
            },
          }}
          push={true}
        />
      )}

      {addPressed && label.toLowerCase() === "user" && (
        <Redirect
          to={{
            pathname: addURL,
            state: {
              reference: userReference,
              label,
              method: "POST",
              redirectURL: redirectURLs.userRedirectURL,
            },
          }}
          push={true}
        />
      )}

      {addPressed && label.toLowerCase() === "calendar" && (
        <Redirect
          to={{
            pathname: `${addURL}`,
            state: {
              reference: calendarReference,
              label,
              method: "POST",
              redirectURL: redirectURLs.calendarRedirectURL,
            },
          }}
          push={true}
        />
      )}

      {addPressed && label.toLowerCase() === "event" && (
        <Redirect
          to={{
            pathname: `${addURL}`,
            state: {
              reference: eventReference,
              label,
              method: "POST",
              redirectURL: redirectURLs.eventRedirectURL,
            },
          }}
          push={true}
        />
      )}
    </div>
  );
}

export default AddEditButtons;
