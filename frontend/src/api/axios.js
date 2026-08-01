import axios from "axios";
import { API_CONFIG } from "../constants/api";

const apiClient = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
});

apiClient.interceptors.response.use(
  (response) => response,

  (error) => {
    return Promise.reject(error);
  },
);

export default apiClient;
