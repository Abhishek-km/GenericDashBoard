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

export const UserPermissions = async (userId: string, username: string) => {
  return axiosInstance.get(
    `Users/permissions?username=${username}&username=${username}`
  );
};

export const getRoles = async () => {
  return axiosInstance.get("Roles");
};

export const updateRoles = async (
  roleID: number,
  roleName: string,
  description: string,
  updatedBy: number
) => {
  // Assuming updatedBy is an ID of the role to be updated
  return axiosInstance.put(`/Roles/${roleID}`, {
    roleName: roleName,
    description: description,
    updatedBy: updatedBy, // It might be better to include updatedBy in the body if it's not part of the URL
  });
};

export const addRoles = async (newRole: {
  roleName: string;
  description: string;
  createdBy: number;
}) => {
  return axiosInstance.post("/Roles", newRole);
};

export const deleteRoles = async (roleID: number) => {
  return axiosInstance.delete(`/Roles/${roleID}`);
};

// // Add more APIs here
// export const getDashboardData = async () => {
//   return axiosInstance.get("/dashboard");
// };
