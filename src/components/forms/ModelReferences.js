export const references = {
  userReference: {
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
  },
  calendarReference: {
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
  },
  eventReference: {
    date: {
      label: "Date",
      defaultValue: "",
      inputType: "date",
    },
    time: {
      label: "Time",
      defaultValue: "",
      inputType: "time",
    },
  },
};

export const redirectURLs = {
  userRedirectURL: "/user-profile",
  calendarRedirectURL: "/calendar",
  eventRedirectURL: "/calendar",
};
