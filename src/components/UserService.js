import axios from "axios";

const BASE_URL = "http://localhost:3005/api";

const getUsers = () => {
  return axios.get(`${BASE_URL}/users`);
};

const getUser = (userId) => {
  return axios.get(`${BASE_URL}/user/${userId}`);
};

const createUser = (user) => {
  return axios.post(`${BASE_URL}/user/newUser`, user);
};

const updateUser = (userId, user) => {
  return axios.put(`${BASE_URL}/user/${userId}`, user);
};

const deleteUser = (userId) => {
  return axios.delete(`${BASE_URL}/user/${userId}`);
};

export { getUsers, getUser, createUser, updateUser, deleteUser };
