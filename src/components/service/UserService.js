import axios from "axios";

const BASE_URL = "http://localhost:3005/api/users";

const getUsers = () => {
  return axios.get(`${BASE_URL}`);
};

const getUser = (userID) => {
  return axios.get(`${BASE_URL}/${userID}`);
};

const createUser = (user) => {
  return axios.post(`${BASE_URL}/`, user);
};

const updateUser = (userID, user) => {
  return axios.put(`${BASE_URL}/${userID}`, user);
};

const deleteUser = (userID) => {
  return axios.delete(`${BASE_URL}/${userID}`);
};

export { getUsers, getUser, createUser, updateUser, deleteUser };
