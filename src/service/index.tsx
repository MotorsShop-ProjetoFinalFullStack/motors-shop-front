import axios from "axios";

export const api = axios.create({
  baseURL: "https://motors-shop-projeto-final-m6.onrender.com",
  // baseURL: "http://localhost:3000",
  timeout: 7000,
});
