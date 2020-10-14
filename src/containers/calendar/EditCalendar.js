import React from "react";

import AddEditModel from "../../components/forms/AddEditModel";
import { useParams } from "react-router-dom";

function EditCalendar() {
  let { id } = useParams();

  return (
    <div className="edit-calendar-container">
      <main>
        <h1>Welcome to the Edit Calendar Page!</h1>
        <AddEditModel
          reference={{
            year: {
              label: "Year",
              defaultValue: "",
              inputType: "number",
            },
            month: {
              label: "Month",
              defaultVaule: "",
              inputType: "text",
            },
            numberOfDays: {
              label: "Number of Days",
              defaultValue: "",
              inputType: "number",
            },
            startingDayOfTheWeek: {
              label: "Starting Day Of The Week",
              defaultValue: "",
              inputType: "text",
            },
          }}
          label={"Calendar"}
          method={"PUT"}
          redirectURL={"/calendars"}
          id={id}
        />
      </main>
    </div>
  );
}

export default EditCalendar;
