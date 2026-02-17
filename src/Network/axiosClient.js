import axios from "axios";

const DEV = "http://127.0.0.1:8000";
const PROD = "https://api.payeox.com";
const axiosClient = axios.create({
  baseURL: PROD,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("start");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 🔴 Global response error handling
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("start");
      
      window.location.href = "/auth";
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
