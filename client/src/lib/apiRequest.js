import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://findyourhome-backend.onrender.com",
  withCredentials: true,
});

export default apiRequest;
