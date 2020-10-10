import axios from "axios";

const BASE_URL = "http://localhost:3005/api";

const getUsers = () => {
  return axios.get(`${BASE_URL}/users`);
};

const getUser = (userId) => {
  return axios.get(`${BASE_URL}/users/${userId}`);
};

const createUser = (user) => {
  return axios.post(`${BASE_URL}/users/newUser`, user);
};

const updateUser = (userId, user) => {
  return axios.put(`${BASE_URL}/users/${userId}`, user);
};

const deleteUser = (userId) => {
  return axios.delete(`${BASE_URL}/users/${userId}`);
};

export { getUsers, getUser, createUser, updateUser, deleteUser };
