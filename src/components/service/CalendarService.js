import axios from "axios";

const BASE_URL = "http://localhost:3005/api/calendars";

const getCalendars = () => {
  return axios.get(`${BASE_URL}`);
};

const getCalendar = (calendarID) => {
  return axios.get(`${BASE_URL}/${userID}`);
};

const createCalendar = (calendar) => {
  return axios.post(`${BASE_URL}/`, calendar);
};

const updateCalendar = (calendarID, calendar) => {
  return axios.put(`${BASE_URL}/${calendarID}`, calendar);
};

const deleteCalendar = (calendarID) => {
  return axios.delete(`${BASE_URL}/${calendarID}`);
};

export {
  getCalendars,
  getCalendar,
  createCalendar,
  updateCalendar,
  deleteCalendar,
};
