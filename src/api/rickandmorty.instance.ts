import axios from "axios";
import { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

export default api;
