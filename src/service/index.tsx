import axios from "axios";

export const api = axios.create({
  baseURL: "https://motors-shop-projeto-final-m6.onrender.com",
  timeout: 7000,
});

// baseURL: "http://localhost:3000",
// baseURL: "https://motors-shop-projeto-final-m6.onrender.com",
