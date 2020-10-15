import Axios from "axios";
import AuthService from "services/AuthService.js";

const axiosInstance = Axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((req) => {
  if (AuthService.getAccessToken() !== "") {
    req.headers.Authorization = `Bearer ${AuthService.getAccessToken()}`;
  }
  console.log(`${req.method} ${req.baseURL} ${req.headers}`);
  return req;
});

export default axiosInstance;
