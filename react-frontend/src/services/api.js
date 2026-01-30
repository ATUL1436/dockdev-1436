import axios from "axios";

/* 🔓 Login API (NO TOKEN) */
export const publicApi = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

/* 🔐 Protected APIs (TOKEN REQUIRED) */
export const privateApi = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

privateApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("access");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

