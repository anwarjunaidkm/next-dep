"use client";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://interview.enfono.com",
});

export default instance;

instance.interceptors.request.use(
  (config) => {
    // Set the Authorization header globally
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
