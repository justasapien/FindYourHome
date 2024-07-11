import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://findyourhome-backend.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;
