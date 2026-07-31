import axios from "axios";
import { API_CONFIG } from "../constants/api";

const apiClient = axios.create({
    baseURL: API_CONFIG.BASE_URL,
    timeout: API_CONFIG.TIMEOUT,
});

export default apiClient;