import React from "react";
import { deleteCalendar } from "../service/CalendarService";
import { Redirect } from "react-router-dom";

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
*/

function AddEditButtons({
  addURL,
  addButtonDisplay,
  editURL,
  editButtonDisplay,
}) {
  const [addPressed, setAddPressed] = React.useState(false);
  const [editPressed, setEditPressed] = React.useState(false);

  const [editID, setEditID] = React.useState(1);

  return (
    <div class="add-edit-buttons-container">
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
      {editPressed && <Redirect to={`${editURL}/${editID}`} push={true} />}
      {addPressed && <Redirect to={`${addURL}`} push={true} />}
    </div>
  );
}

export default AddEditButtons;
