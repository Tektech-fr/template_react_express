import axios from "axios";

export const api = axios.create({
  baseURL: "https://work.tektech.fr/api",
  withCredentials: false,
});

export const login = (username: string, password: string) =>
  api.post("/auth/login", { username, password });

export const fetchData = (token: string) =>
  api.get("/data", { headers: { Authorization: `Bearer ${token}` } });
