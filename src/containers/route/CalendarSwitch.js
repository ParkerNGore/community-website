import React from "react";

import { Switch, Route } from "react-router-dom";
import AddEditModel from "../../components/forms/AddEditModel";

function CalendarSwitch() {
  return (
    <Switch>
      <Route
        path="/calendar/new"
        render={(props) => <AddEditModel {...props} />}
      />
      <Route
        path="/calendar/edit/:id"
        render={(props) => <AddEditModel {...props} />}
      />
    </Switch>
  );
}

export default CalendarSwitch;
