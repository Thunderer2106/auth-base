import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const signup = (data) => api.post("/auth/signup", data);
export const login = (data) => api.post("/auth/login", data);
export const getProfile = (token) =>
  api.get("/profile/me", {
    headers: { Authorization: token },
  });
export const updateProfile = (data, token) =>
  api.put("/profile/me", data, {
    headers: { Authorization: token },
  });
export const deleteAccount = (token) =>
  api.delete("/profile/me", {
    headers: { Authorization: token },
  });
