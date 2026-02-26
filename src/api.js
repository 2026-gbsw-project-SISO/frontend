import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080", // 친구가 준 베이스 URL
});

export default api;
