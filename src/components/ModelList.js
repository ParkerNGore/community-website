import React from "react";

import { getUsers } from "./service/UserService";
import trimSequilzeDates from "./util/ModelUtil";

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
    console.log("Running!");
    let requestPromise;
    switch (label) {
      case "User":
        requestPromise = getUsers();
        break;
      case "Calendar":
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

  return (
    <>
      {hasLoaded && <h1>Has Loaded!</h1>}
      {hasLoaded &&
        modelList
          .filter((i) => i !== undefined)
          .map((model) => {
            return (
              <>
                {<h2 key={model.key + "h2"}>User:</h2>}
                {Object.keys(model)
                  .filter((i) => i !== undefined)
                  .map((key) => {
                    return <li key={model.key + "li"}>{model[key]}</li>;
                  })}
              </>
            );
          })}
    </>
  );
}

export default ModelList;
