import axios from "axios";

const baseAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:3333/api",
});

export default baseAxios;
