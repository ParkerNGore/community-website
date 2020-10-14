import React from "react";
import ModelList from "../components/ModelList";

import AddEditButtons from "../components/forms/AddEditButtons";

function Calendar() {
  return (
    <div className="calendar-container">
      <main>
        <h1>Welcome to the Calendar!</h1>

        <ModelList label={"Calendar"} />
      </main>
    </div>
  );
}

export default Calendar;
