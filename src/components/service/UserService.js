import axios from "axios";

const BASE_URL = "http://localhost:3005/api/users";

const getUsers = () => {
  return axios.get(`${BASE_URL}`);
};

const getUser = (userId) => {
  return axios.get(`${BASE_URL}/${userId}`);
};

const createUser = (user) => {
  return axios.post(`${BASE_URL}/`, user);
};

const updateUser = (userId, user) => {
  return axios.put(`${BASE_URL}/${userId}`, user);
};

const deleteUser = (userId) => {
  return axios.delete(`${BASE_URL}/${userId}`);
};

export { getUsers, getUser, createUser, updateUser, deleteUser };
