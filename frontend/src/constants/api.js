export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8000",
  TIMEOUT: 10000,
};

export const API_ENDPOINTS = {
  HEALTH: "/health",
  PREDICT: "/predict",
  PREDICT_CSV: "/predict/csv",
};
