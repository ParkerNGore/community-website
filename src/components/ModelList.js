import React from "react";

import { getUsers, deleteUser } from "./service/UserService";
import { getCalendars, deleteCalendar } from "./service/CalendarService";
import { trimSequilzeDates } from "./util/ModelUtil";

/*
    Props:

    `label`
*/

function ModelList({ label }) {
  const [hasLoaded, setHasLoaded] = React.useState(false);
  const [modelList, setModelList] = React.useState([]);
  const [hasStartedLoading, setHasStartedLoading] = React.useState(false);

  // TODO: Remove duplicated switch statements
  // And implement a Single Source of Truth (SSOT)

  if (!hasStartedLoading) {
    setHasStartedLoading(true);
    let requestPromise;
    switch (label) {
      case "User":
        requestPromise = getUsers();
        break;
      case "Calendar":
        requestPromise = getCalendars();
        break;
      case "Event":
        break;
      default:
        console.error(
          `Given model label doesn't match any expected labels: ${this.props.label}`
        );
        break;
    }

    requestPromise
      .then((response) => {
        const modelList = response.data;

        const trimmedModelList = [];

        for (let i = 0; i < modelList.length; i++) {
          trimmedModelList[i] = trimSequilzeDates(modelList[i]);
        }

        setModelList(trimmedModelList);
        setHasLoaded(true);
      })
      .catch((error) => {
        alert(`Error: ${error}`);
      });
  }

  function handleDelete(e, model) {
    const isDeleteConfirmed = window.confirm(
      `Are you sure you want to delete ${label} ${model.id}?`
    );

    if (!isDeleteConfirmed) {
      return;
    }

    switch (label) {
      case "User":
        deleteUser(model.id);
        break;
      case "Calendar":
        deleteCalendar(model.id);
        break;
      case "Event":
        break;
      default:
        console.error(
          `Given model label doesn't match any expected labels: ${this.props.label}`
        );
        break;
    }

    alert(`${label} ${model.id} has been deleted!`);

    let newList = [];
    for (let prop of modelList) {
      if (prop.id === model.id) {
        continue;
      }
      newList.push(prop);
    }

    setModelList(newList);
  }

  return (
    <>
      {hasLoaded && <h1>Has Loaded!</h1>}
      {hasLoaded &&
        modelList
          .filter((i) => i !== undefined)
          .map((model) => {
            return (
              <div key={model.id + "div"}>
                {<h2 key={model.id + "h2"}>{label}:</h2>}
                {Object.keys(model)
                  .filter((i) => i !== undefined)
                  .map((key) => {
                    return <li key={key + "li"}>{model[key]}</li>;
                  })}
                {
                  <button
                    key={model.idid + "delete"}
                    onClick={(e) => handleDelete(e, model)}
                  >
                    Delete
                  </button>
                }
              </div>
            );
          })}
    </>
  );
}

export default ModelList;
