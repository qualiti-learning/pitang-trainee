import axios from "axios";

const baseAxios = axios.create({
  baseURL: "http://localhost:3333/api",
});

export default baseAxios;
