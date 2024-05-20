import axios from "axios";

export const api = axios.create({
  baseURL: "https://kissnotes-api.onrender.com"
})