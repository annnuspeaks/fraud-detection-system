import api from "../api/axios";
import { API_ENDPOINTS } from "../constants/api";

export const checkHealth = async () => {
    const response = await api.get(API_ENDPOINTS.HEALTH);
    return response.data;
};

export const predictFraud = async (payload) => {
    const response = await api.post(
        API_ENDPOINTS.PREDICT,
        payload
    );

    return response.data;
};