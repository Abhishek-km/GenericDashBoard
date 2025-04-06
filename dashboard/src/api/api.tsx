// src/api/api.ts
import axios from "axios";

// You can change this to your actual API base URL
const API_BASE_URL = "https://localhost:7298/api/";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor (optional – for adding tokens)
// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token"); // If you're storing JWT
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// API functions
export const loginUser = async (userData: {
  username: string;
  password: string;
  type: string;
}) => {
  return axiosInstance.post("auth/login", userData);
};

// export const getUserProfile = async () => {
//   return axiosInstance.get("/users/2");
// };

// // Add more APIs here
// export const getDashboardData = async () => {
//   return axiosInstance.get("/dashboard");
// };
