import api from "../api/axios";
import { API_ENDPOINTS } from "../constants/api";

export const checkHealth = async () => {
    const response = await api.get(
        API_ENDPOINTS.HEALTH
    );

    return response.data;
};

export const predictCSV = async (file) => {

    const formData = new FormData();

    formData.append(
        "file",
        file
    );

    const response = await api.post(

        API_ENDPOINTS.PREDICT_CSV,

        formData

    );

    return response.data;
};