import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // adjust to your backend server URL
  withCredentials: true, // so cookies (tokens) are sent
});

// Add Authorization header automatically if token exists
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;
